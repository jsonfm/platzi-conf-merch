import { UilShoppingBag } from '@iconscout/react-unicons';
import { Link } from "react-router-dom";
import "./styles.css";

export const Header = () => {
  return(
    <header className="header">
      <nav className="navbar container">
        <Link to="/">
          Platzi Conf Merch
        </Link>
        <Link to="/checkout">
          <UilShoppingBag/>
        </Link>
      </nav>
    </header>
  )
}
