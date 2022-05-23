import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import 'w3-css/w3.css';

const App = (props) => {
  return (
    <>
    <Router>
      <div className="App">
        <div className="w3-bar w3-black">
          <label className="w3-bar-item  w3-mobile">E-COMMERCE PASTAFARI</label>
          <Link to = "/"  className="w3-bar-item w3-button w3-mobile">Listado de Productos</Link>
          <Link to="/categorias" className="w3-bar-item w3-button w3-mobile">Categorías</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home products={props.products} categorias={props.categorias} cart={props.cart} />}/>
          <Route path="/categorias" element={<Category products={props.products} categorias={props.categorias} /> }/>
        </Routes>
      </div>
    </Router>
    </>
    
    
  );
}

export default App;
