const TotalProductsCart = ({ cart}) => {
  let total_products = 0;
    for (var i = 0; i < cart.length; i++) {
      total_products += cart[i].quantity;
  }
  return (
    <h4 class="text-right"> Total de productos: {total_products}</h4> 
  );
};

export default TotalProductsCart;