// import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';
import { View } from '../../../../Components/Lib';

export default class ListTransfer extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      const {
         columns,
         rows,
         onRowClick
      } = this.props;

      return (
         <View style={styles.container}>
            {/* <DataGrid
               columns={columns}
               rows={rows}
               onRowClick={onRowClick}
            /> */}
         </View>
      );
   }
}

const styles = {
   container: {
      height: 0
   }
}