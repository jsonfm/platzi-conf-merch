import { useEffect } from "react";
import { useAppContext } from "@/hooks/useAppContext";
import { UilTrashAlt } from '@iconscout/react-unicons';
import { actionTypes as cartTypes } from "@/reducers/cart";
import "@/components/ProductCard/styles.css";
import "./styles.css";

export const Checkout = () => {
  const { state, dispatch } = useAppContext();

  const totalPrice = state.cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteFromCart = (product) =>{
    dispatch({ type: cartTypes.REMOVE_FROM_CART , payload: product });
  }

  return (
    <section className="checkout-section">
    <div className="checkout-container">
      {!!state.cart.length
      ?
      <>
      <div className="checkout-products">
        <div className="checkout-products-title">
          <p>List of Products: </p>
          <b>{state.cart.length}</b>
        </div>

        {state.cart.map((product) => (
          <div className="checkout-product" key={product.id}>
            <p className="checkout-name">{product.title}</p>
            <div className="checkout-icons">
              <b>$ {product.price}</b>
              <UilTrashAlt onClick={() => {deleteFromCart(product)}}/>
            </div>
          </div>

        ))}
      </div>
      <div className="checkout-price">
        <h4>Total: $ <b>{totalPrice}</b></h4>
        <button className="product-button">
          Proceder
        </button>
      </div>
      </>
      :
      <div className="checkout-message">Aún no has seleccionado ningún artículo :c</div>
      }

    </div>
    </section>
  );
};
