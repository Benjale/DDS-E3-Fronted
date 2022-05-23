import React from 'react'
import Product from './Product';



const Catalogue = (props) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <article className='box grid-responsive product-list'>
        {props.products.map((product) => (
          props.categorias.map((category) =>
            category.id === product.id_category? <Product key={product.id} category={category.name} data={product} parent={'catalogue'}/> : null
          )
        ))}
      </article>
    </div>
  )
}

export default Catalogue