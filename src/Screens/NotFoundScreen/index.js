import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_ACCESS_TOKEN, SET_SELECTED_WAREHOUSE_ID } from '../../Helper/Constants';
import { Button, Text, View } from '../../Components/Lib';
import { Colors } from '../../Components/Themes';

class NotFoundScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
      }
   }

   componentDidMount() {
   }

   _renderScreen = () => {
      const { accessToken } = this.props;
      const { isLoading } = this.state;

      return (
         <View style={styles.container}>
            <View style={styles.card}>
               <Text
                  style={styles.title}
                  children={'The page you are looking for could not be found.'}
               />

               <Button
                  isLoading={isLoading}
                  label={'Back'}
                  onPress={() => {
                     this.setState({ isLoading: true });
                     setTimeout(() => {
                        accessToken
                           ? window.location.replace('/dashboard')
                           : window.location.replace('/login')
                     }, 1500);
                  }}
               />
            </View>
         </View>
      );
   }

   render() { return (this._renderScreen()); }
}

const mapStateToProps = state => {
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
)(NotFoundScreen);


const styles = {
   container: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
   },
   card: {
      boxShadow: Colors.boxShadow,
      padding: 24,
      borderRadius: 8,
      width: '30%',
      backgroundColor: Colors.backgroundColor
   },
   title: {
      fontWeight: 'bold',
      fontSize: 32,
      marginBottom: 32,
      width: '100%',
      textAlign: 'center'
   },
};
