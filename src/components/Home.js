import '../App.css';
import Catalogue from './Catalogue';
import ShoppingCart from './ShoppingCart';


function Home(props) {

 
  
  return (
    <div className="App">
      <hr/>
      <div>
        <Catalogue products={props.products} categorias={props.categorias} cart={props.cart} />
      </div>
    </div>
  );
}

export default Home;
