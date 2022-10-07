import { Colors } from '../../../Themes';
import View from '../View';

const TextInput = ({
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   width = 200,
   height = 20,
   center = false,
   type = 'text',
   label = false,
   padding = 8,
   borderRadius = 4,
   borderColor = Colors.grey2,
   style = {},
   ...props
}) => {
   return (
      <View>
         {label && (<label style={{ marginBottom: 2 }}>{label}</label>)}

         <input
            type={type}
            style={{
               marginTop: top,
               marginRight: right,
               marginBottom: bottom,
               marginLeft: left,
               borderColor,
               width,
               height,
               padding,
               borderRadius,
               textAlign: center ? 'center' : 'left',
               ...style
            }}
            {...props}
         />
      </View>
   );
};

export default TextInput;