import Product from './Product';
import React from 'react'

class CategoryDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.actual_products = this.props.products
      this.state = {
        optionsdata : [{key:-1,value:'Todas las Categorías'}]
      }
      this.setData()
    }

    refresh = () => {
        // re-renders the component
        this.setState({});
      };
    
    handleClick = (e) => {
        this.setData()
    }
    setData(){
        this.state.optionsdata = [{key:-1,value:'Todas las Categorías'}]
        this.props.categorias.map((category) =>
            this.state.optionsdata.push({key:category.id, value:category.name})
     )
    }

    handleChange = (e) => {
      if(e.target.value !== '-1'){
        this.actual_products = this.props.products.filter(function(product) {
            return product.id_category == e.target.value
          })
      } 
      else{
        this.actual_products = this.props.products
      }
      this.refresh()
    }
    render() {
      return (
        <>
        <h3>Productos por Categoría</h3>
        <div className = 'box product-list'>
            <select className="form-select" aria-label="Default select example" onClick={this.handleClick} onChange={this.handleChange}>
            {this.state.optionsdata.map(function(data, key){  return (
                <option key={key} value={data.key}>{data.value}</option> )
            })}
            </select>
            <article className='grid-responsive'>
                {this.actual_products.map((product) => (
                    this.props.categorias.map((category) =>
                      category.id === product.id_category? <Product 
                      key={product.id} category={category.name} data={product} parent={'category'} categorias = {this.props.categorias} refreshDropdown ={this.refresh}
                      /> : null
                    )
                ))}
            </article>
        </div>
        </>
      )
    }
  }

export default CategoryDropdown