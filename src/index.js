import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const products = [{id:1, name:'Pasta Spaghetti N°5 - 400g', price: 780, brand: 'Luccheti', id_category: 1, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1014013_1-ndzC92fm-medium.jpg' },
                    {id:2, name:'Pasta Rigati - 400g', price: 809, brand: 'Luccheti', id_category: 1, imagen:'https://www.lucchetti.cl/wp-content/themes/lucchetti/images/productos/01_Pastas/02_Cortas/04_pastas_rigati_400gr.jpg' },
                    {id:3, name:'Salsa de Tomates natural - 200g', price: 549, brand: 'Luccheti', id_category: 2, imagen:'https://cdn.shopify.com/s/files/1/0575/2805/8064/products/cl_488539_c2b0ef18-2fe4-4607-afb4-2a0b0d7c6d38_600x.jpg?v=1648483572' },
                    {id:4, name:'Pasta Rigatoni 48 - 400g', price: 890, brand: 'Carozzi', id_category: 1, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1014046-MKzDyCdg.jpg?wid=1500&hei=1500&qlt=70' },
                    {id:5, name:'Pasta Spaghetti N°5 - 400g', price: 890, brand: 'Carozzi', id_category: 1, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/01014064-IfN-GnVi.jpg?wid=1500&hei=1500&qlt=70' },
                    {id:6, name:'Salsa de Tomate Italiana - 200g', price: 649, brand: 'Carozzi', id_category: 2, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/2600061-5xd6jjKn.jpg?wid=1500&hei=1500&qlt=70' },
                    {id:7, name:'Salsa de Tomate Toscana Pesto-200g', price: 740, brand: 'Carozzi', id_category: 2, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20013926-Tgvf8COX-large.jpg' },
                    {id:8, name:'Salsa de Tomate Toscana Oliva-200g', price: 680, brand: 'Carozzi', id_category: 2, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20013928-zjM3ucft.jpg?wid=1500&hei=1500&qlt=70' },
                    {id:9, name:'Pasta N°90 Huevo - 400 gr', price: 1340, brand: 'Talliani', id_category: 1, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1014231_1-p1XTVTnz-large.jpg' },
                    {id:10, name:'Pasta Tallarin N°78 Huevo - 400g', price: 110, brand: 'Talliani', id_category: 1, imagen:'https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/1014158_1-U9J4Xxk2.jpg?wid=1500&hei=1500&qlt=70'},
                    {id:11, name:'Salsa con Trozos de Tomate - 200g', price: 649, brand: 'Talliani', id_category: 2, imagen:'https://images.lider.cl/wmtcl?source=url%5Bfile:/productos/801544a.jpg%5D&viewport=color%5Bwhite%5D,height%5B1000%5D,seed%5B1632941639%5D,vsize%5B1058%5D,width%5B1000%5D,x%5B0%5D,y%5B0%5D&sink' },
                    {id:12, name:'Gnocchi - 500g', price: 2640, brand: 'Trattoria', id_category: 1, imagen: 'https://www.trattoria.cl/assets/img/productos/gnocchi.webp'}
                    ] 
    const categorias = [{id:1, name:'Pasta'},
                        {id:2, name:'Salsa de Tomates'}
                     ] 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App products={products} categorias={categorias} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
