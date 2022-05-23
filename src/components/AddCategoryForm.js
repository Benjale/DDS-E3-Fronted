import React from 'react'

class AddCategoryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit() {
        if(this.state.value !== '' && !this.props.categorias.find(element => element.name.toUpperCase() === this.state.value.toUpperCase())){   
            const last_element = this.props.categorias[this.props.categorias.length - 1]
            const id = last_element.id + 1
            this.props.categorias.push({'id' : id, 'name' : this.state.value})
            this.props.closeModal()
        }
        this.props.closeModal()
    }
  
    render() {
      return (
        <>
        <h5>Agregue una Categoría</h5>
          <div>
            <label className = 'mt-1' for="category_name">Nombre:</label>
          </div>
          <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={this.handleSubmit} className='principal-btn btn btn-success mt-3 col-md-8'>Agregar</button>
          </div>
        </>  
      );
    }
  }

export default AddCategoryForm

 