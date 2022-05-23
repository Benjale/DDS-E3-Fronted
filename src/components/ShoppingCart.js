import { TYPES } from "../actions/shoppingActions";
import CartItem from "./CartItem";
import TotalProductsCart from "./TotalProductCart";


const ShoppingCart = (props) => {

  const delFromCart = (id, all = false) => {
    if (all) {
      props.dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      props.dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    props.dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div class="container-md">
      <h2 class="text-center">Carrito de Compras</h2>
      <br></br>
      <article className="box">
        <div class="container">
          <div class="row">
            <div class="col">
              <button class="btn btn-danger" onClick={clearCart}>Limpiar Carrito</button>
            </div>
            <div class="col-6">
              <TotalProductsCart cart={props.cart}></TotalProductsCart>  
            </div>
          </div>
        </div>
        <div className="box grid-responsive" >
          {props.cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} addToCart={props.addToCart}/>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ShoppingCart;