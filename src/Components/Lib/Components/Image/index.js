const Image = ({
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   width = 16,
   height = 16,
   resizeMode = 'contain',
   center = false,
   style = {},
   textAlign = center ? 'center' : 'left',
   src = false,
   ...props
}) => {
   return (
      <img
         style={{
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            width,
            height,
            resizeMode,
            textAlign,
            ...style
         }}
         src={src}
         {...props}
      />
   );
};

export default Image;