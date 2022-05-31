import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from "../hooks/useModal";
import AddCategoryForm from './AddCategoryForm';
import Modal from "./Modal";
import CategoryDropdown from './Dropdowns';

const Category = (props) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
            <h3>Lista de Categorías</h3>
            <ul className="box">
                <button className='principal-btn ' onClick={openModal}>Agregar Categoría</button>
                {props.categorias.map((categoria) => (
                        <li className="list-group-item text-uppercase" >{categoria.id}. {categoria.name} </li>
                    ))}
            </ul>
        </div>
        <div className='col-md-8'>
            <CategoryDropdown categorias={props.categorias} products = {props.products}/>
        </div>
    </div>
      
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <AddCategoryForm categorias = {props.categorias} closeModal= {closeModal}/>
    </Modal>
    
    </>
  )
}

export default Category