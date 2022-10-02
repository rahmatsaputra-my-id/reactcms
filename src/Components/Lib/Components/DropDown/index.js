import { Colors } from '../../../Themes';

const DropDown = ({
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   style = {},
   options = [
      { value: 'sidoarjo', label: 'Branch Sidoarjo' },
      { value: 'mojokerto', label: 'Branch Mojokerto' },
      { value: 'jakarta', label: 'Branch Jakarta' },
      { value: 'bogor', label: 'Branch Bogor' },
      { value: 'bekasi', label: 'Branch Bekasi' },
   ],
   backgroundColor = Colors.darkBlue,
   fontSize = 12,
   color = Colors.grey2
}) => {
   return (
      <select
         name={'BranchTransfer'}
         id={'BranchTransfer'}
         style={{
            backgroundColor,
            color,
            fontSize,
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            ...style
         }}
      >
         {options.map(({ value, label }, index) =>
            <option key={index} value={value}>
               {label}
            </option>
         )}
      </select>
   );
};

export default DropDown;