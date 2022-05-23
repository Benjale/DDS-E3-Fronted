import React from 'react'

class AddProductToCategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.id_category};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit() { 
        this.props.product.id_category = this.state.value
        this.props.refreshProduct()
        this.props.closeModal()
      }
    
      render() {
        return (
          <>
          <h5>Seleccione una Categoría</h5>
          <ul className="box">
            {this.props.categorias.map((categoria) => (
                    categoria.id === this.state.value?  <li onClick={this.handleChange} value = {categoria.id} className="list-group-item text-uppercase" >{categoria.id}. {categoria.name} <i class="bi bi-check2-circle"></i> </li>: 
                    <li onClick={this.handleChange} value = {categoria.id}  className="list-group-item text-uppercase" >{categoria.id}. {categoria.name} </li>
                ))}
            </ul>
            <div>
              <button onClick={this.handleSubmit} className='btn btn-success mt-3 col-md-8'>Continuar</button>
            </div>
          </>  
        );
      }
    }

export default AddProductToCategoryForm