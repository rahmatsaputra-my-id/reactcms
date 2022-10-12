import { Colors } from '../../../Themes';
import View from '../View';

const TextInput = ({
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   width = 200,
   center = false,
   type = 'text',
   label = false,
   labelError = false,
   padding = 0,
   borderRadius = 4,
   borderColor = Colors.grey2,
   style = {},
   ...props
}) => {
   return (
      <View
         style={{
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            padding,
            ...style
         }}
      >
         {label && (<label style={{ marginBottom: 4, fontSize: 14 }}>{label}</label>)}

         <input
            type={type}
            style={{
               borderColor,
               width,
               padding: 8,
               borderRadius,
               textAlign: center ? 'center' : 'left',
            }}
            {...props}
         />

         {labelError && (
            <label
               style={{
                  marginTop: 2,
                  fontSize: 14,
                  color: 'red',
                  maxWidth: 300
               }}>
               {labelError}
            </label>
         )}
      </View>
   );
};

export default TextInput;