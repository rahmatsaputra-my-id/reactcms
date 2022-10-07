import { Colors } from '../../../Themes';

const Button = ({
   label,
   size = 12,
   center = true,
   bold = false,
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   borderRadius = 8,
   type = 'submit',
   padding = 16,
   transparent = false,
   disabled = false,
   onPress = () => { },
   style = {},
   ...props
}) => {
   const backgroundColor =
      disabled
         ? Colors.grey
         : transparent
            ? 'transparent'
            : Colors.blue;
   return (
      <button
         style={{
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            backgroundColor: backgroundColor,
            fontSize: size,
            textAlign: center ? 'center' : 'left',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            opacity: 1,
            transition: 'opacity 300ms ease',
            fontWeight: bold && 'bold',
            borderRadius,
            padding,
            color: Colors.white,
            ...style
         }}
         disabled={disabled}
         onClick={onPress}
         type={type}
         {...props}
      >
         {label}
      </button >
   );
};

export default Button;