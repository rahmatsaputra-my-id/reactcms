import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_ACCESS_TOKEN } from '../../Helper/Constants';
import { Button, PopUp, Text, TextInput, Touchable, View } from '../../Components/Lib';
import { Colors } from '../../Components/Themes';
import { postLogin } from '../../Helper/Action';
import { regexEmail, regexPassword } from '../../Helper/Functional';


class LoginScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: {
            value: false,
            error: false
         },
         password: {
            value: false,
            error: false
         },
         isLoading: false,
         popUpData: false
      }
   }

   componentDidMount = () => {
   }

   _handlerInputEmail = (event) => {
      const email = event?.target?.value;

      if (regexEmail.test(email)) {
         this.setState({ email: { value: email, error: false } })
      } else {
         this.setState({ email: { value: false, error: 'The email you entered is incorrect' } })
      }
   }

   _handlerInputPassword = (event) => {
      const password = event?.target?.value;

      if (regexPassword.test(password)) {
         this.setState({ password: { value: password, error: false } })
      } else {
         this.setState({ password: { value: false, error: 'The password you entered is incorrect, at least one special character, and minimum six character' } })
      }
   }

   _handlerSubmit = async () => {

      const { email, password } = this.state;
      const { setAccessToken } = this.props;
      const emailValue = email?.value;
      const passwordValue = password?.value;

      if (emailValue && passwordValue) {
         this.setState({ isLoading: true });
         try {
            const payload = {
               email: emailValue,
               password: passwordValue,
            }

            const result = await postLogin(payload);

            if (!result?.isError) {
               const token = result?.data?.token?.access || false;
               setAccessToken(token);
               window.location.replace('/dashboard');
            } else {
               const { system, user } = result?.responseData?.status?.messages;

               this.setState({
                  isLoading: false,
                  popUpData: {
                     visible: true,
                     title: system,
                     description: user,
                     labelAccept: 'TRY AGAIN',
                     onPressAccept: () => {
                        this.setState({
                           popUpData: { visible: false }
                        })
                     }
                  }
               });
            }
         } catch (error) {
            console.log('LoginScreen/index.js@_handlerSubmit >>>', error);
         }
      }

   }

   _renderScreen = () => {
      const { email, password, isLoading, popUpData } = this.state;
      const emailError = email?.error;
      const passwordError = password?.error;
      const emailValue = email?.value;
      const passwordValue = password?.value;
      const isButtonDisabled = !emailValue || !passwordValue || emailError || passwordError;

      return (
         <>
            <View style={styles.container}>
               <View style={styles.badges} >
                  <Text
                     style={styles.headerTitle}
                     children={'Sign In'}
                  />
               </View>

               <View style={styles.card}>

                  <TextInput
                     type='email'
                     width={250}
                     style={styles.textInput}
                     placeholder={'Type your email'}
                     label={'Email'}
                     labelError={emailError}
                     onChange={(email) => { this._handlerInputEmail(email) }}
                  />

                  <TextInput
                     type='password'
                     width={250}
                     style={styles.textInput}
                     label={'Password'}
                     placeholder={'Type your password'}
                     labelError={passwordError}
                     maxLength={8}
                     onChange={(password) => { this._handlerInputPassword(password) }}
                  />

                  <Button
                     isLoading={isLoading}
                     disabled={isButtonDisabled}
                     style={styles.button}
                     label={'SUBMIT'}
                     onPress={() => { this._handlerSubmit(); }}
                  />

                  <View style={styles.textContainer}>
                     <Text
                        style={styles.quetionSignupTitle}
                        children={'Dont have an account?'}
                     />

                     <Touchable
                        onPress={'/register'}
                        style={{ textDecoration: 'none' }}
                     >
                        <Text
                           style={styles.answerSignupTitle}
                           children={'Sign Up'}
                        />
                     </Touchable>
                  </View>

                  <View style={styles.textContainer}>
                     <Touchable
                        onPress={'/forget-password'}
                        style={{ textDecoration: 'none' }}
                     >
                        <Text
                           style={styles.answerSignupTitle}
                           children={'Forgot password?'}
                        />
                     </Touchable>
                  </View>

               </View>
            </View>

            <PopUp
               visible={popUpData?.visible}
               popUpData={popUpData}
            />
         </>
      );
   }

   render() { return (this._renderScreen()); }
}

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
)(LoginScreen);


const styles = {
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: window.innerHeight,
      background: Colors.gradientWhite,
      backgroundColor: Colors.blue
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
      zIndex: 0
   },
   headerTitle: {
      alignSelf: 'center',
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: 20
   },
   button: {
      marginBottom: 16
   },
   textContainer: {
      flexDirection: 'row',
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
