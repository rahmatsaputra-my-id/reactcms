import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { DataGrid } from '@mui/x-data-grid';
import { getDataById } from '../../Helper/Action';
import { SET_SELECTED_WAREHOUSE_ID } from '../../Helper/Constants';
import { RootContainer, Text } from '../../Components/Lib';

class WarehouseDetailSreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
         columns: [],
         rows: []
      }
   }

   componentDidMount() {
      this._handlerGetDataById();
   }

   _handlerGetDataById = async () => {
      try {
         const { selectedWarehouseId } = this.props
         const result = await getDataById(selectedWarehouseId);

         if (!result.isError) {
            if (result?.data) {
               this._handlerColumnData(result?.data);
               this._handlerRowsData(result?.data);
            }
         } else {
            console.log('CTable/index.js@_handlerGetDataById', result);
         }
      } catch (error) {
         console.log('CTable/index.js@_handlerGetDataById', error);
      }
   }

   _handlerColumnData = (listDataById) => {
      if (listDataById) {
         let data = [];
         const columns = Object.keys(listDataById);
         columns.sort();
         columns.reverse();

         for (let i = 0; i < columns.length; i++) {
            const element = columns[i];
            const datum = {
               'field': `col${i}`,
               'headerName': element,
               'width': 200,
            };

            data.push(datum);
         }

         this.setState({ columns: data })
      }
   }

   _handlerRowsData = (listDataById) => {
      if (listDataById) {
         let data = [];

         for (let i = 0; i < 1; i++) {
            const element = listDataById;
            const dateLastSync = new Date(element?.LastSync)
            const dateLastModified = new Date(element?.LastModifiedDateTime)
            const lastSyncDate = dateLastSync.toLocaleString();
            const lastModifiedDate = dateLastModified.toLocaleString();

            const datum = {
               'id': i,
               'col0': element?.WarehouseID,
               'col1': element?.ReplenishmentClass,
               'col2': lastSyncDate,
               'col3': lastModifiedDate,
               'col4': element?.Description,
               'col5': element?.Branch,
               'col6': element?.Active,
            };

            data.push(datum);
         }

         this.setState({ rows: data });
      }
   }

   _renderView = () => {

      const { rows, columns } = this.state;
      return (
         <div style={styles.containerTable}>
            <Text
               style={styles.title}
               children={'Warehouse Detail'}
            />

            {/* <DataGrid
               columns={columns}
               rows={rows}
            /> */}
         </div>
      );
   }

   render() {
      return (
         <RootContainer
            children={this._renderView()}
         />
      );
   }
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
)(WarehouseDetailSreen);

const styles = {
   container: {
      display: 'flex',
      flexDirection: 'row'
   },
   content: {
      padding: 48,
      flex: 1
   },
   containerTable: {
      height: 700
   },
   title: {
      fontWeight: 'bold',
      fontSize: 32,
      marginBottom: 32
   }
};