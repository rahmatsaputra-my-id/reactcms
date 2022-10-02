import './index.css';

const Breadcrumbs = ({
   top = 24,
   right = 0,
   bottom = 0,
   left = 54,
   style = {},
}) => {
   const url = window.location.pathname;
   let result = url.split('/');
   result.splice(0, 1);

   return (
      <ul
         className="breadcrumb"
         style={{
            marginTop: top,
            marginRight: right,
            marginLeft: left,
            marginBottom: bottom,
            ...style
         }}>
         {result.map((items, index) => {
            const lastIndex = index == (result?.length - 1);
            const upperCaseFirstChar = items.charAt(0).toUpperCase() + items.slice(1);
            const route = upperCaseFirstChar.replaceAll('-', ' ');

            return (
               lastIndex
                  ? <li key={index}>{route}</li>
                  : <li key={index}><a>{route}</a></li>
            );
         })}
      </ul>
   );
};

export default Breadcrumbs;