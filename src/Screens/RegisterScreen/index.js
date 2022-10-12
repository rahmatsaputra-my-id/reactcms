import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SELECTED_WAREHOUSE_ID } from '../../Helper/Constants';
import { Button, Text, TextInput, Touchable, View } from '../../Components/Lib';
import { Colors } from '../../Components/Themes';

class RegisterScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
      }
   }

   componentDidMount = () => {
   }

   _renderScreen = () => {
      const { isInputDataTransfer } = this.state;

      return (
         <View style={styles.container}>
            <View style={styles.badges} >
               <Text
                  style={styles.headerTitle}
                  children={'Sign Up'}
               />
            </View>

            <View style={styles.card}>

               <TextInput
                  width={250}
                  style={styles.textInput}
                  placeholder={'Email'}
               />

               <TextInput
                  width={250}
                  style={styles.textInput}
                  placeholder={'Password'}
               />
               
               <TextInput
                  width={250}
                  style={styles.textInput}
                  placeholder={'Password'}
               />

               <Button
                  label={'SUBMIT'}
               />

               <View style={styles.textContainer}>
                  <Text
                     style={styles.quetionSignupTitle}
                     children={'Dont have an account?'}
                  />

                  <Touchable
                     onPress={'#'}
                     style={{ textDecoration: 'none' }}
                  >
                     <Text
                        style={styles.answerSignupTitle}
                        children={'Sign Up'}
                     />
                  </Touchable>
               </View>
            </View>
         </View>
      );
   }

   render() { return (this._renderScreen()); }
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
)(RegisterScreen);


const styles = {
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: window.innerHeight,
      background: Colors.gradientWhite,
      backgroundColor: Colors.red
   },
   card: {
      boxShadow: Colors.boxShadow,
      paddingTop: 80,
      paddingBottom: 40,
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: 8,
      backgroundColor: Colors.backgroundColor
   },
   textInput: {
      marginBottom: 16
   },
   badges: {
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: Colors.grey5,
      borderRadius: 8,
      width: 200,
      marginBottom: -48,
      zIndex: 1
   },
   headerTitle: {
      alignSelf: 'center',
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: 20
   },
   textContainer: {
      flexDirection: 'row',
      paddingTop: 32,
      paddingBottom: 8,
      alignSelf: 'center',
   },
   quetionSignupTitle: {
      color: Colors.grey80,
      fontSize: 14,
      marginRight: 4
   },
   answerSignupTitle: {
      fontSize: 14,
      color: Colors.blue
   }
};
