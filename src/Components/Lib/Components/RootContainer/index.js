import {
   Breadcrumbs,
   SideMenu,
   View
} from '../../index';

const RootContainer = ({
   children
}) => {
   return (
      <View style={styles.container}>
         <SideMenu />

         <View style={{ flex: 1 }}>
            {/* <Breadcrumbs /> */}

            <View style={styles.content}>
               {children}
            </View>
         </View>
      </View>
   );
};

export default RootContainer;

const styles = {
   container: {
      flexDirection: 'row'
   },
   content: {
      paddingLeft: 54,
      paddingRight: 54,
      paddingTop: 24,
      paddingBottom: 0,
      flex: 1
   },
}