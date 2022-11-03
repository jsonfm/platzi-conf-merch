import { useAppContext } from "@/hooks/useAppContext";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import "./styles.css";

export const Header = () => {
  const { state } = useAppContext();

  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/">Platzi Conf Merch</Link>
        <Link to="/checkout" className="cart">
          {!!state.cart.length && <p className="items-count">{state.cart.length}</p>}

          <UilShoppingBag />
        </Link>
      </nav>
    </header>
  );
};
