import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
   const match = useMatch({
      path: to,
      end: false,
   })
   return (
      <Link
         to={to}
         style={{
            color: match ? 'red' : 'blue',
         }}
         {...props}
      >

         {children}
      </Link>
   )
}

export { CustomLink };