import { Colors } from '../../../Themes';

const Button = ({
   children,
   size = 12,
   center = false,
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   type = 'submit',
   transparent = false,
   disabled = false,
   onClick = () => { },
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
            ...style
         }}
         disabled={disabled}
         onClick={onClick}
         type={type}
         {...props}
      >
         {children}
      </button >
   );
};

export default Button;