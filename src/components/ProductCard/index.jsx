import { useAppContext } from "@/hooks/useAppContext";
import { actionTypes as cartTypes } from "@/reducers/cart";
import { UilMultiply } from '@iconscout/react-unicons';
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
        <div className="product-header">
          <p>{title}</p>
          <p className="product-price">$ {price.toFixed(2)}</p>
        </div>
        <p className="product-description">{description}</p>

        <button className={!productInCart ? "btn btn-primary": "btn btn-secondary"} onClick={onClick}>
          {productInCart
          ? "Remove From Cart"
          : "Add To Cart"
          }
        </button>
      </div>
    </div>
  );
};
