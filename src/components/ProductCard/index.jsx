import { useAppContext } from "@/hooks/useAppContext";
import { actionTypes as cartTypes } from "@/reducers/cart";

import "./styles.css";

export const ProductCard = ({ product }) => {
  const { state, dispatch } = useAppContext();

  const { id, title, image, price, description } = product;

  const productInCart = state?.cart?.find((item) => item.id === id);

  const onClick = () => {
    if (!productInCart) {
      dispatch({ type: cartTypes.ADD_TO_CART, payload: product });
    } else {
      dispatch({ type: cartTypes.REMOVE_FROM_CART, payload: product });
    }
  };

  return (
    <div className="product-card" key={id}>
      <img className="product-img" src={image} />
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-description">{description}</p>
        <p className="product-price">$ {price}</p>
        <button className="product-button" onClick={onClick}>
          {productInCart ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};
