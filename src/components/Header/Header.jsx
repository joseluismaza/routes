import { NavLink } from "react-router-dom"; /* se importa el modulo*/
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/*Esto es lo que se resume en el app.jsx con la etiqueta <header />*/}
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              {/*se relaciona con el navlink */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <NavLink to="/contact/contact" activeClassName="active">
            Contact
          </NavLink>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
