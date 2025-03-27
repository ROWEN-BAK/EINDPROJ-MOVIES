import {Link, Outlet } from "react-router-dom";
const Navigation = () => {
    return ( 
<>
  <nav className="bg-gray-900 text-white p-4 shadow-md">
    <ul className="flex justify-center space-x-6">
      <li>
        <Link to="/home" className="hover:text-gray-400 transition duration-300">
          Home
        </Link>
      </li>
      <li>
        <Link to="/catalog" className="hover:text-gray-400 transition duration-300">
          Catalog
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-gray-400 transition duration-300">
          About
        </Link>
      </li>
    </ul>
  </nav>
  <Outlet />
</>
     );
}
 
export default Navigation;