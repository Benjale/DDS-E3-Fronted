const CartItem = ({ data, delFromCart, addToCart}) => {
  let { id, name, price, quantity } = data;

  return (
    <div class="card"  style={{ border: "thin solid gray", padding: "1rem"}}>

      <h5>{name}</h5>
      <br />

      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <div>
      <br />
      </div>
      <div className="row">
        <button class=" col btn btn-success" onClick={() => addToCart(id)}><i class="bi bi-plus-circle "></i></button>
        <br />
        <button  class="col btn btn-primary mx-2" onClick={() => delFromCart(id)}><i class=" bi bi-dash-circle "></i></button>
        <br />
        <button  class="col btn btn-danger" onClick={() => delFromCart(id, true)}><i class=" bi bi-trash"></i></button>
        <br />
        <br />
        </div>
    </div>
    
  );
};

export default CartItem;