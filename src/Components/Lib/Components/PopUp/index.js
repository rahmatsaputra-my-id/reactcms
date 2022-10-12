import React, { Component } from 'react';
import { Text, View, Button } from '../../../Lib';
import { Colors } from '../../../Themes';

export default class PopUp extends Component {
   constructor(props) {
      super(props);

      this.state = {}
   }

   _renderScreen = () => {
      const { onPressClose, popUpData } = this.props;
      const { title, description, labelAccept } = popUpData;

      return (
         <View style={styles.container}>

            <View style={styles.card}>
               <View>
                  <Text
                     style={styles.headerTitle}
                     children={title}
                  />

                  <Text
                     style={styles.headerDescription}
                     children={description}
                  />
               </View>

               <Button
                  label={labelAccept}
                  onPress={onPressClose}
               />
            </View>
         </View>
      );
   }

   render() {
      const { visible } = this.props;

      return (
         visible
            ? this._renderScreen()
            : null
      );
   }
}

const styles = {
   container: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
   },
   card: {
      boxShadow: Colors.boxShadow,
      padding: 24,
      borderRadius: 8,
      backgroundColor: Colors.backgroundColor,
      width: 300,
      justifyContent: 'space-between'
   },
   headerTitle: {
      alignSelf: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
      fontSize: 24
   },
   headerDescription: {
      alignSelf: 'center',
      marginBottom: 50,
      fontSize: 18
   },
};
