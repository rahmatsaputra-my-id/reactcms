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
import { capitalizeEveryWord } from '../../../../Helper/Functional';
import { pathVariables } from '../../../../Helper/Variables';
import { styles } from './style';
import { SET_ACCESS_TOKEN } from '../../../../Helper/Constants';
import { connect } from 'react-redux';

class SideMenu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dataDrawer: false,
         currentScreen: false
      }
   }

   componentDidMount() {
      this._handlerDataDrawer();
   }

   _handlerDataDrawer = () => {
      const url = window.location.pathname;
      let result = url.split('/');
      result.splice(0, 1);
      const { setAccessToken } = this.props;
      const pathVariables = [
         {
            'icon': iconAllocatedKuota,
            'route': 'dashboard',
            'onPress': () => { window.location.replace('/dashboard'); }
         },
         {
            'icon': iconAllocatedKuota,
            'route': 'transfer-kuota',
            'onPress': () => { window.location.replace('/transfer-kuota'); }
         },
         {
            'icon': iconAllocatedKuota,
            'route': 'table-user',
            'onPress': () => { window.location.replace('/table-user'); }
         },
         {
            'icon': iconAllocatedKuota,
            'route': 'logout',
            'onPress': () => {
               setAccessToken(false);
               window.location.replace('/login');
            }
         },
      ];

      this.setState({
         dataDrawer: pathVariables,
         currentScreen: result[0]
      });
   }

   _renderDrawer = () => {
      const { dataDrawer, currentScreen } = this.state;

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
                  const { icon, route, onPress } = item;
                  const isCurrentScreen = (route === currentScreen);

                  return (
                     <View key={index}>
                        <View style={{ ...styles.buttonContainer, backgroundColor: isCurrentScreen ? Colors.blue : 'transparent' }}>
                           <Image
                              style={styles.buttonIcon}
                              src={icon}
                           />
                           <Button
                              transparent
                              onPress={onPress}
                              style={styles.buttonTitle}
                              label={capitalizeEveryWord(route)}
                           />
                        </View>
                        {index !== (dataDrawer.length - 1) && (
                           <View style={styles.spaces} />
                        )}
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
};

const mapStateToProps = (state) => {
   const { accessToken } = state;
   return {
      accessToken
   };
};

const mapDispatchToProps = dispatch => ({
   setAccessToken: (data) =>
      dispatch({
         type: SET_ACCESS_TOKEN,
         accessToken: data
      })
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SideMenu);