import '../App.css';
import Catalogue from './Catalogue';

function Home(props) {
  return (
    <div className="App">
      <hr/>
      <Catalogue products={props.products} categorias={props.categorias} />
    </div>
  );
}

export default Home;
