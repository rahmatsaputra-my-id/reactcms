const View = ({
   children,
   top = 0,
   right = 0,
   bottom = 0,
   left = 0,
   display = 'flex',
   flexDirection = 'column',
   style = {}
}) => {
   return (
      <div style={{
         marginTop: top,
         marginRight: right,
         marginBottom: bottom,
         marginLeft: left,
         flexDirection,
         display,
         ...style
      }}>
         {children}
      </div>
   );
};

export default View;