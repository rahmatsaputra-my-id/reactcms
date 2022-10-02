import React, { Component } from 'react';
import { Colors } from '../../../Themes';
import {
   Button,
   Image,
   Text,
   View
} from '../../../Lib';
import {
   iconAllocatedKuota,
   iconToolbar
} from '../../../../Assets/Shared';

export default class SideMenu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dataDrawer: false
      }
   }

   componentDidMount() {
      this._handlerDataDrawer();
   }

   _handlerDataDrawer = () => {
      const data = [
         {
            'icon': iconAllocatedKuota,
            'title': 'Transfer Kuota',
            'onClick': () => { window.location.replace('/home/erp/transfer-kuota'); }
         }
      ];

      this.setState({ dataDrawer: data });
   }

   _renderDrawer = () => {
      const { dataDrawer } = this.state;

      return (
         <>
            <View style={styles.toolbarContainer}>
               <Image
                  style={styles.toolbarIcon}
                  src={iconToolbar}
               />
               <Text
                  style={styles.toolbarTitle}
                  children={'Material Dashboard'}
               />
            </View>

            <View style={styles.line} />

            <View style={styles.listContainer}>

               {dataDrawer && dataDrawer?.map((item, index) => {
                  const { icon, title, onClick } = item;
                  return (
                     <View key={index} style={styles.buttonContainer}>
                        <Image
                           style={styles.buttonIcon}
                           src={icon}
                        />
                        <Button
                           transparent
                           onClick={onClick}
                           style={styles.buttonTitle}
                           children={title}
                        />
                     </View>
                  );
               })}

            </View>
         </>
      );
   }

   render() {
      return (
         <View style={styles.outterContainer}>
            <View style={styles.container}>
               {this._renderDrawer()}
            </View>
         </View>
      );
   }
}

const styles = {
   outterContainer: {
      padding: 16,
      backgroundColor: Colors.red
   },
   container: {
      flex: 1,
      paddingTop: 16,
      borderRadius: 16,
      backgroundColor: Colors.darkBlueBlack,
      width: 250
   },
   line: {
      height: 0.1,
      marginTop: 16,
      marginBottom: 24,
      marginRight: 32,
      marginLeft: 32,
      backgroundColor: Colors.white,
   },
   toolbarContainer: {
      height: 50,
      alignItem: 'center',
      flexDirection: 'row',
      paddingLeft: 16,
      backgroundColor: Colors.darkBlueBlack,
      paddingRight: 16
   },
   buttonContainer: {
      backgroundColor: Colors.blue,
      padding: 16,
      borderRadius: 4,
      flexDirection: 'row'
   },
   toolbarIcon: {
      alignSelf: 'center',
      resizeMode: 'contain',
      height: 24,
      width: 24,
      marginRight: 8
   },
   buttonIcon: {
      alignSelf: 'center',
      resizeMode: 'contain',
      height: 16,
      width: 16,
      marginRight: 8
   },
   toolbarTitle: {
      alignSelf: 'center',
      fontSize: 14,
      color: Colors.white,
      fontWeight: 'bold'
   },
   buttonTitle: {
      alignSelf: 'center',
      fontSize: 12,
      color: Colors.white
   },
   listContainer: {
      flexDirection: 'column',
      paddingLeft: 16,
      paddingRight: 16
   },
   listTitle: {
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 8,
      textAlign: 'left',
      fontSize: 13,
      color: Colors.white,
   },
   listItemTitle: {
      color: Colors.white
   },
};