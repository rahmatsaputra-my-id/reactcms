// import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';
import { TextInput, View } from '../../../../Components/Lib';

export default class AddTransfer extends Component {
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
         <View>
            <View style={styles.inputContainer}>
               <View style={styles.inputInnerContainer}>
                  <TextInput
                     label={'Ref Nbr.'}
                  />
                  <TextInput
                     label={'Branch'}
                  />
                  <TextInput
                     label={'Source Warehouse'}
                  />
                  <TextInput
                     label={'Approved By'}
                  />
                  <TextInput
                     label={'Owner'}
                  />
               </View>

               <View style={styles.inputInnerContainer}>
                  <TextInput
                     type={'date'}
                     label={'Date'}
                  />
                  <TextInput
                     label={'Status'}
                  />
                  <TextInput
                     label={'Allocated Warehouse'}
                  />
                  <TextInput
                     label={'Approved Date'}
                  />
                  <TextInput
                     label={'Reject Reason'}
                  />
               </View>

               <TextInput
                  label={'Description'}
                  width={450}
               />
            </View>

            <View style={{ height: 0 }}>
               {/* <DataGrid
                  columns={columns}
                  rows={rows}
                  onRowClick={onRowClick}
               /> */}
            </View>
         </View>
      );
   }
}

const styles = {
   inputContainer: {
      // backgroundColor: 'red',
      paddingTop: 0,
      paddingBottom: 48
   },
   inputInnerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16
   }
}