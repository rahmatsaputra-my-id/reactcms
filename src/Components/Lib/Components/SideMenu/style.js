import { Colors } from "../../../Themes";

export const styles = {
   outterContainer: {
      backgroundColor: Colors.red,
      height: window.innerHeight
   },
   container: {
      flex: 1,
      margin: 16,
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
      paddingLeft: 16,
      paddingRight: 16,
      alignItem: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.darkBlueBlack
   },
   buttonContainer: {
      paddingLeft: 16,
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
      fontSize: 14,
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
   spaces: {
      height: 8
   }
};