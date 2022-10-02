import { Colors } from '../../../Themes';

const Text = ({
   children,
   size = 12,
   center = false,
   color = Colors.black,
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   lineHeight = null,
   textAlign = center ? 'center' : 'left',
   style = {},
   ...props
}) => {
   return (
      <p
         style={{
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            color,
            fontSize: size,
            lineHeight,
            textAlign,
            ...style
         }}
         {...props}
      >
         {children}
      </p>
   );
};

export default Text;