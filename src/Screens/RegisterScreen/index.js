import React, { Component } from 'react';
import { Button, PopUp, Text, TextInput, Touchable, View } from '../../Components/Lib';
import { Colors } from '../../Components/Themes';
import { regexEmail, regexFullName, regexOTP, regexPassword, regexPhoneNumber } from '../../Helper/Functional';
import { postOTP, postRegister } from '../../Helper/Action';
export default class RegisterScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
         username: {
            value: false,
            error: false
         },
         email: {
            value: false,
            error: false
         },
         msisdn: {
            value: false,
            error: false
         },
         password: {
            value: false,
            error: false
         },
         passwordConfirmation: {
            value: false,
            error: false
         },
         otp: {
            value: false,
            error: false
         },
         isLoading: false,
         isLoadingPopup: false,
         popUpData: false,
         currentScreen: 'REGISTER'
      }
   }

   _handlerInputUsername = (event) => {
      const username = event?.target?.value;

      if (regexFullName.test(username)) {
         this.setState({ username: { value: username, error: false } })
      } else {
         this.setState({ username: { value: false, error: 'The username you entered is incorrect' } })
      }
   }

   _handlerInputEmail = (event) => {
      const email = event?.target?.value;

      if (regexEmail.test(email)) {
         this.setState({ email: { value: email, error: false } })
      } else {
         this.setState({ email: { value: false, error: 'The email you entered is incorrect' } })
      }
   }

   _handlerInputMsisdn = (event) => {
      const msisdn = event?.target?.value;

      if (regexPhoneNumber.test(msisdn)) {
         this.setState({ msisdn: { value: msisdn, error: false } })
      } else {
         this.setState({ msisdn: { value: false, error: 'The msisdn you entered is incorrect' } })
      }
   }

   _handlerInputOTP = (event) => {
      const otp = event?.target?.value;

      if (regexOTP.test(otp)) {
         this.setState({ otp: { value: otp, error: false } })
      } else {
         this.setState({ otp: { value: false, error: 'The otp you entered is incorrect' } })
      }
   }

   _handlerInputPassword = (event) => {
      const { passwordConfirmation } = this.state;
      const passwordConfirmationValue = passwordConfirmation?.value;
      const password = event?.target?.value;
      const regexPasswordCondition = regexPassword.test(password);
      const isPasswordMatch = password === passwordConfirmationValue;

      if (regexPasswordCondition) {
         if (!passwordConfirmationValue) {
            this.setState({ password: { value: password, error: false } })
         } else {
            isPasswordMatch
               ? this.setState({ password: { value: password, error: false } })
               : this.setState({ password: { value: false, error: 'The password you entered is not matched' } });
         }
      } else {
         this.setState({ password: { value: false, error: 'The password you entered is incorrect, at least one special character, and minimum six character' } })
      }
   }

   _handlerInputPasswordConfirmation = (event) => {
      const { password } = this.state;
      const passwordValue = password?.value;
      const passwordConfirmation = event?.target?.value;
      const regexPasswordCondition = regexPassword.test(passwordConfirmation);
      const isPasswordConfirmationMatch = passwordConfirmation === passwordValue;

      if (regexPasswordCondition) {
         if (!passwordValue) {
            this.setState({ passwordConfirmation: { value: passwordConfirmation, error: false } })
         } else {
            isPasswordConfirmationMatch
               ? this.setState({ passwordConfirmation: { value: passwordConfirmation, error: false } })
               : this.setState({ passwordConfirmation: { value: false, error: 'The password confirmation you entered is not matched' } });
         }
      } else {
         this.setState({ passwordConfirmation: { value: false, error: 'The password you entered is incorrect, at least one special character, and minimum six character' } })
      }
   }

   _handlerSubmit = async () => {
      const { username, email, msisdn, password, passwordConfirmation, otp, currentScreen } = this.state;
      const isCurrentScreenRegister = currentScreen === 'REGISTER';
      const usernameValue = username?.value;
      const emailValue = email?.value;
      const msisdnValue = msisdn?.value;
      const passwordValue = password?.value;
      const passwordConfirmationValue = passwordConfirmation?.value;
      const otpValue = otp?.value;
      const isAllFieldRegisterNotEmpty = usernameValue && emailValue && msisdnValue && passwordValue && passwordConfirmationValue;
      const isAllFieldOTPNotEmpty = emailValue && otpValue;

      if (isCurrentScreenRegister) {
         if (isAllFieldRegisterNotEmpty) {
            this.setState({ isLoading: true });
            try {
               const payload = {
                  username: usernameValue,
                  email: emailValue,
                  phone: msisdnValue,
                  account_type: 'MEM00',
                  password: passwordValue,
                  password_confirmation: passwordValue
               }

               const result = await postRegister(payload);

               if (!result?.isError) {
                  const { system, user } = result?.data?.status?.messages;
                  this.setState({
                     isLoading: false,
                     popUpData: {
                        visible: true,
                        title: system,
                        description: user,
                        labelAccept: 'UNDERSTAND',
                        onPressAccept: () => {
                           this.setState({
                              popUpData: { visible: false },
                              currentScreen: "OTPSCREEN"
                           });
                        }
                     }
                  });
               } else {
                  const { system, user } = result?.responseData?.status?.messages;
                  const errorUsername = user?.username?.[0] || '';
                  const errorEmail = user?.email?.[0] || '';
                  const errorMsisdn = user?.phone?.[0] || '';
                  const errorPassword = user?.password?.[0] || '';
                  const errorDescription = `${errorUsername} ${errorEmail} ${errorMsisdn} ${errorPassword}`;

                  this.setState({
                     isLoading: false,
                     popUpData: {
                        visible: true,
                        title: system,
                        description: errorDescription,
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
               console.log('RegisterScreen/index.js@_handlerSubmitRegister >>>', error);
            }
         }
      } else {
         if (isAllFieldOTPNotEmpty) {
            this.setState({ isLoading: true });

            try {
               const payload = {
                  email: emailValue,
                  verify_code: otpValue
               }

               const result = await postOTP(payload);

               if (!result?.isError) {
                  const { system, user } = result?.data?.status?.messages;
                  this.setState({
                     isLoading: false,
                     popUpData: {
                        visible: true,
                        title: system,
                        description: user,
                        labelAccept: 'UNDERSTAND',
                        onPressAccept: () => {
                           this.setState({
                              isLoadingPopup: true,
                           });
                           window.location.replace('/login');
                        }
                     }
                  });
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
                     },
                     currentScreen: 'OTPSCREEN'
                  });
               }
            } catch (error) {
               console.log('RegisterScreen/index.js@_handlerSubmitOTP >>>', error);
            }
         }
      }

   }

   _renderRegisterComponent = () => {
      const { username, email, msisdn, password, passwordConfirmation, isLoading } = this.state;
      const usernameError = username?.error;
      const emailError = email?.error;
      const msisdnError = msisdn?.error;
      const passwordError = password?.error;
      const passwordConfirmationError = passwordConfirmation?.error;
      const usernameValue = username?.value;
      const emailValue = email?.value;
      const msisdnValue = msisdn?.value;
      const passwordValue = password?.value;
      const passwordConfirmationValue = passwordConfirmation?.value;
      const isButtonDisabled = !usernameValue || !emailValue || !msisdnValue || !passwordValue || !passwordConfirmationValue || usernameError || emailError || msisdnError || passwordError || passwordConfirmationError;

      return (
         <>
            <TextInput type={'hidden'} />

            <TextInput
               width={250}
               style={styles.textInput}
               label={'Username'}
               placeholder={'Type your username'}
               labelError={usernameError}
               onChange={(username) => { this._handlerInputUsername(username) }}
            />

            <TextInput
               type='email'
               width={250}
               style={styles.textInput}
               label={'Email'}
               placeholder={'Type your email'}
               labelError={emailError}
               onChange={(email) => { this._handlerInputEmail(email) }}
            />

            <TextInput
               width={250}
               style={styles.textInput}
               label={'Phone Number'}
               placeholder={'Type your phone number'}
               labelError={msisdnError}
               onChange={(msisdn) => { this._handlerInputMsisdn(msisdn) }}
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

            <TextInput
               type='password'
               width={250}
               style={styles.textInput}
               label={'Confirmation Password'}
               placeholder={'Type your confirmation password'}
               labelError={passwordConfirmationError}
               maxLength={8}
               onChange={(passwordConfirmation) => { this._handlerInputPasswordConfirmation(passwordConfirmation) }}
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
                  children={'Already have an account?'}
               />

               <Touchable
                  onPress={'/login'}
                  style={{ textDecoration: 'none' }}
               >
                  <Text
                     style={styles.answerSignupTitle}
                     children={'Sign In'}
                  />
               </Touchable>
            </View>
         </>
      );
   }

   _renderOTPComponent = () => {
      const { email, otp, isLoading } = this.state;
      const emailError = email?.error;
      const otpError = otp?.error;
      const emailValue = email?.value;
      const otpValue = otp?.value;
      const isButtonDisabled = !emailValue || !otpValue || emailError || otpError;

      return (
         <>
            <TextInput
               width={250}
               style={styles.textInput}
               label={'OTP Code'}
               placeholder={'Type your otp code'}
               labelError={otpError}
               onChange={(otpUser) => { this._handlerInputOTP(otpUser) }}
            />

            <Button
               isLoading={isLoading}
               disabled={isButtonDisabled}
               style={styles.button}
               label={'SUBMIT'}
               onPress={() => { this._handlerSubmit(); }}
            />
         </>
      );
   }

   _renderScreen = () => {
      const { isLoadingPopup, popUpData, currentScreen } = this.state;
      const isCurrentScreenRegister = currentScreen === 'REGISTER';

      return (
         <>
            <View style={styles.container}>
               <View style={styles.badges} >
                  <Text
                     style={styles.headerTitle}
                     children={'Sign Up'}
                  />
               </View>

               <View style={styles.card}>
                  {
                     isCurrentScreenRegister
                        ? this._renderRegisterComponent()
                        : this._renderOTPComponent()
                  }
               </View>
            </View>
            <PopUp
               isLoading={isLoadingPopup}
               visible={popUpData?.visible}
               popUpData={popUpData}
            />
         </>
      );
   }

   render() { return (this._renderScreen()); }
}


const styles = {
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: window.innerHeight,
      background: Colors.gradientWhite,
      backgroundColor: Colors.green100
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
