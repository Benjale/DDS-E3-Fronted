import React from 'react';
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import AddProductToCategoryForm from './AddProductToCategoryForm';

const Product = (data) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  let {id, name, price, brand, id_category, imagen} = data.data

  const refresh = ()=>{
    data.refreshDropdown()
  }
  
  let modal;
  let btn;

  if(data.parent ==='catalogue'){
    btn  = (<button className='principal-btn' onClick={() => data.addToCart(id)}>Agregar al Carro</button>)
  }
  else{
    btn = (<button className='principal-btn' onClick={openModal}>+ Categoría</button>)
    modal = (
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <AddProductToCategoryForm categorias = {data.categorias} product = {data.data} id_category = {id_category} refreshProduct={refresh} closeModal= {closeModal}/>
      </Modal>)
  }

  return (
    <>
      <div style = {{border: 'thin solid gray', padding:'1rem'}}>
        <img src = {imagen} alt="product"></img>
        <h4>{name}</h4>
        <hr/>
        <div className='product-info'>
          <h5>Valor: ${price}</h5>
          <h5>Marca: {brand}</h5>
          <h5>Categoría: {data.category}</h5>
        </div>
        {btn}
      </div>
      {modal}
    </>
  )
}

export default Product