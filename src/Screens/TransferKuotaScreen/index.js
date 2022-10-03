import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllData } from '../../Helper/Action';
import { SET_SELECTED_WAREHOUSE_ID } from '../../Helper/Constants';
import { Text, View, DefaultTemplates } from '../../Components/Lib';
import AddTransfer from './Components/AddTransfer';
import ListTransfer from './Components/ListTransfer';

class AllocatedQuotaScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
         listAllData: false,
         listDataById: false,
         columnsSummaryTable: [],
         rowsSummaryTable: [],
         isInputDataTransfer: false,
         warehouseIdSelected: false
      }
   }

   componentDidMount() {
      this._handlerGetAllData();
   }

   _handlerGetAllData = async () => {
      try {
         const result = await getAllData();

         if (!result.isError) {
            if (result?.data) {
               this.setState({ listAllData: result?.data });
               this._handlerColumnData(result?.data);
               this._handlerRowsData(result?.data);
            }
         } else {
            console.log('CTable/index.js@_handlerGetAllData', result);
         }
      } catch (error) {
         console.log('CTable/index.js@_handlerGetAllData', error);
      }
   }

   _handlerColumnData = (listAllData) => {
      if (listAllData) {
         let data = [];
         const firstData = listAllData?.[0];
         const columns = Object.keys(firstData);
         columns.sort();
         columns.reverse();

         for (let i = 0; i < columns.length; i++) {
            const element = columns[i];
            const datum = {
               'field': `col${i}`,
               'headerName': element,
               'width': 170,
            };

            data.push(datum);
         }
         this.setState({ columnsSummaryTable: data })
      }
   }

   _handlerRowsData = (listAllData) => {
      if (listAllData) {
         let data = [];

         for (let i = 0; i < listAllData.length; i++) {
            const element = listAllData[i];
            const dateLastSync = new Date(element?.LastSync)
            const dateLastModified = new Date(element?.LastModifiedDateTime)
            const lastSyncDate = dateLastSync?.toLocaleString();
            const lastModifiedDate = dateLastModified?.toLocaleString();

            const datum = {
               'id': i,
               'col0': element?.WarehouseID,
               'col1': lastSyncDate,
               'col2': lastModifiedDate,
               'col3': element?.Description,
               'col4': element?.Branch,
               'col5': element?.Active,
            };

            data.push(datum);
         }
         this.setState({ rowsSummaryTable: data });
      }
   }

   _renderListTransfer = () => {
      const { rowsSummaryTable, columnsSummaryTable } = this.state;
      const { setSelectedWarehouseId } = this.props;

      return (
         <ListTransfer
            rows={rowsSummaryTable}
            columns={columnsSummaryTable}
            onRowClick={(params, event) => {
               if (!event?.ignore && params) {
                  setSelectedWarehouseId(params?.row?.col0);
                  window.location.replace('/home/erp/warehouse/detail-location-warehouse-retail');
               }
            }}
         />
      );
   }

   _renderAddTransfer = () => {
      const { rowsSummaryTable, columnsSummaryTable } = this.state;
      const { setSelectedWarehouseId } = this.props;

      return (
         <AddTransfer
            rows={rowsSummaryTable}
            columns={columnsSummaryTable}
            onRowClick={(params, event) => {
               if (!event?.ignore && params) {
                  setSelectedWarehouseId(params?.row?.col0);
                  window.location.replace('/home/erp/warehouse/detail-location-warehouse-retail');
               }
            }}
         />
      );
   }

   _renderView = () => {
      const { isInputDataTransfer } = this.state;

      return (
         <View>
            <Text
               style={styles.title}
               children={'Transfer Kuota'}
            />

            {
               isInputDataTransfer
                  ? this._renderAddTransfer()
                  : this._renderListTransfer()
            }
         </View>
      );
   }

   render() { return (this._renderView()); }
}

const mapStateToProps = state => {
   const { selectedWarehouseId } = state;
   return {
      selectedWarehouseId
   };
};

const mapDispatchToProps = dispatch => ({
   setSelectedWarehouseId: (data) =>
      dispatch({
         type: SET_SELECTED_WAREHOUSE_ID,
         selectedWarehouseId: data
      })
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(AllocatedQuotaScreen);


const styles = {
   container: {
      display: 'flex',
      flexDirection: 'row'
   },
   content: {
      paddingLeft: 48,
      paddingRight: 48,
      paddingTop: 24,
      paddingBottom: 48,
      flex: 1
   },
   title: {
      fontWeight: 'bold',
      fontSize: 32,
      marginBottom: 32
   }
};
