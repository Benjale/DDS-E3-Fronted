import { useReducer } from "react";
import React from 'react'
import Product from './Product';
import { TYPES } from "../actions/shoppingActions";
import { shoppingReducer } from "../reducers/shoppingReducer";
import ShoppingCart from './ShoppingCart';



const Catalogue = (props) => {

  const [state, dispatch] = useReducer(shoppingReducer, props);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    console.log(state);
  };
  
  return (
    <>
    <div className="row">
      <div className="col-md-8">
        <h2>Lista de Productos</h2>
        <article className='box grid-responsive product-list'>
          {props.products.map((product) => (
            props.categorias.map((category) =>
              category.id === product.id_category? <Product key={product.id} category={category.name} data={product} parent={'catalogue'} addToCart={addToCart}/> : null
            )
          ))}
        </article>
      </div>
      <div className="col-md-4">
        <ShoppingCart products={props.products} categorias={props.categorias} cart={state.cart} addToCart={addToCart} dispatch={dispatch} />
      </div>
    </div>
    </>
  )
}

export default Catalogue