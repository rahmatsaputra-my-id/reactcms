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
      <a
         style={{
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            ...style
         }}
         href={onPress}
         {...props}
      >
         {children}
      </a >
   );
};

export default Touchable;