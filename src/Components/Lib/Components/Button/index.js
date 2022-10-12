import { Colors } from '../../../Themes';
import LoadingSpinner from '../LoadingSpinner';

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
   isLoading = false,
   transparent = false,
   disabled = false,
   onPress = () => { },
   style = {},
   ...props
}) => {
   const backgroundColor =
      disabled || isLoading
         ? Colors.grey2
         : transparent
            ? 'transparent'
            : Colors.blue;
   return (
      <button
         style={{
            display: 'flex',
            justifyContent: 'center',
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
         disabled={isLoading || disabled}
         onClick={onPress}
         type={type}
         {...props}
      >
         {!isLoading && label}
         {isLoading && <LoadingSpinner />}
      </button >
   );
};

export default Button;