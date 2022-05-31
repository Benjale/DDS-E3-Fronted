import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import 'w3-css/w3.css';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import Coupons from './components/Coupons';
import OrderDetail from './components/OrderDetail';


const App = (props) => {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home products={props.products} categorias={props.categorias} cart={props.cart} />}/>
          <Route path="/categorias" element={<Category products={props.products} categorias={props.categorias} /> }/>
          <Route path="/ordenes" element={ <Orders /> }/>
          <Route path="/orden/:id" element={ <OrderDetail /> }/>
          <Route path="/cupones" element={ <Coupons /> }/>
        </Routes>
      </div>
    </Router>
    </>
    
    
  );
}

export default App;
