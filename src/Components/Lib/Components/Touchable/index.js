import { NavLink } from "react-router-dom";

const Touchable = ({
   children,
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   onPress = () => { },
   style = {},
   ...props
}) => {
   return (
      <NavLink
         style={{
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            ...style
         }}
         to={onPress}
         {...props}
      >
         {children}
      </NavLink >
   );
};

export default Touchable;