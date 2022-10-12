import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SELECTED_WAREHOUSE_ID } from '../../Helper/Constants';
import { Text, View } from '../../Components/Lib';

class NotFoundScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
      }
   }

   componentDidMount() {
   }

   _renderScreen = () => {
      return (
         <View>
            <Text
               style={styles.title}
               children={'Not Found Screen'}
            />
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
)(NotFoundScreen);


const styles = {
   container: {
      display: 'flex',
      flexDirection: 'row'
   },
   content: {
      paddingLeft: 48,
      paddingRight: 48,
      paddingTop: 24,
      paddingBottom: 48,
      flex: 1
   },
   title: {
      fontWeight: 'bold',
      fontSize: 32,
      marginBottom: 32
   }
};
