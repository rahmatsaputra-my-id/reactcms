import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SideMenu } from '../../Components/Lib';
// import { DataGrid } from '@mui/x-data-grid';
import { getAllData } from '../../Helper/Action';
// import { Breadcrumbs, Link } from '@mui/material';
import { SET_SELECTED_WAREHOUSE_ID } from '../../Helper/Constants';

class WarehouseScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
         listAllData: false,
         listDataById: false,
         columns: [],
         rows: [],
         warehouseIdSelected: false
      }
   }

   componentDidMount() {
      this._hanlderGetAllData();
   }


   _hanlderGetAllData = async () => {
      try {
         const result = await getAllData();

         if (!result.isError) {
            if (result?.data) {
               this.setState({ listAllData: result?.data });
               this._handlerColumnData(result?.data);
               this._handlerRowsData(result?.data);
            }
         } else {
            console.log('CTable/index.js@_hanlderGetAllData', result);
         }
      } catch (error) {
         console.log('CTable/index.js@_hanlderGetAllData', error);
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
               'width': 200,
            };

            data.push(datum);
         }
         this.setState({ columns: data })
      }
   }

   _handlerRowsData = (listAllData) => {
      if (listAllData) {
         let data = [];

         for (let i = 0; i < listAllData.length; i++) {
            const element = listAllData[i];
            const dateLastSync = new Date(element.LastSync)
            const dateLastModified = new Date(element.LastModifiedDateTime)
            const lastSyncDate = dateLastSync.toLocaleString();
            const lastModifiedDate = dateLastModified.toLocaleString();

            const datum = {
               'id': i,
               'col0': element.WarehouseID,
               'col1': lastSyncDate,
               'col2': lastModifiedDate,
               'col3': element.Description,
               'col4': element.Branch,
               'col5': element.Active,
            };

            data.push(datum);
         }
         this.setState({ rows: data });
      }
   }

   // _renderHeader = () => {
   //    const title = 'Warehouse';

   //    return (
   //       <div>
   //          <Breadcrumbs aria-label='breadcrumb'>
   //             <Link underline='always' color={'#0000FF'} href='/warehouse'>
   //                {title}
   //             </Link>
   //          </Breadcrumbs>

   //          <h1 style={styles.title}>{title}</h1>
   //       </div>
   //    );
   // }

   _renderView = () => {
      const { rows, columns } = this.state;
      const { setSelectedWarehouseId } = this.props;

      return (
         <div style={styles.container}>
            <SideMenu />

            <div style={styles.content}>
               {this._renderHeader()}

               <div style={styles.containerTable}>
                  {/* <DataGrid
                     columns={columns}
                     rows={rows}
                     onRowClick={(params, event) => {
                        if (!event.ignore && params) {
                           setSelectedWarehouseId(params.row.col0);
                           window.location.replace('/warehouse/detail-location-warehouse-retail');
                        }
                     }}
                  /> */}
               </div>
            </div>
         </div>
      );
   }

   render() {
      return (this._renderView());
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
)(WarehouseScreen);


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
      height: 600
   },
   title: {
      textAlign: 'left',
      marginBottom: 32
   }
};
