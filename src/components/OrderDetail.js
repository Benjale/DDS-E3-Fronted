import React from "react";
import { useParams } from "react-router-dom";
import { orders } from "../data/data";

const OrderDetail = () => {
  const { id } = useParams();
  let order;

  orders.forEach((o) => {
    if (o.id.toString() === id) {
      order = o;
    }
  });

  return (
    <div>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col text-start">
          <h3 className="m-4">
            <b>Creada En: {order.fecha_creacion}</b>
          </h3>
          {order.items.map((product) => {
            return (
              <div className="row row-cols-3">
                <div className="col-1"></div>
                <img
                  className="thumb-nail border shadow col-4 m-2 rounded"
                  src={product.fotoUrl}
                  alt=""
                />
                <div className="item-body px-2 ">
                  <div className="mt-4 text-md font-medium leading-tight text-gray-500">
                    <b>Nombre:</b> {product.nombre}
                  </div>
                  <div className="mt-4 text-md font-medium leading-tight text-gray-500">
                    <b>Cantidad:</b> {product.cantidad}
                  </div>
                  <div className="mt-4 text-md font-medium leading-tight text-gray-500">
                    <b>Precio:</b> {product.precio}
                  </div>
                  <div className="mt-4 text-md font-medium leading-tight text-gray-500">
                    <b>Precio Total:</b> {product.cantidad * product.precio}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col text-start">
          <div className="row p-4"></div>
          <div class="row bg-primary p-4 rounded-pill mt-4">
            <h4 class="ml-4 text-white fw-bolder">
              Estado: {order.estado}
            </h4>
          </div>
          <div class="row bg-primary p-4 rounded-pill mt-2">
            <h4 class="ml-4 text-white fw-bolder">
              {order.cupon ? (
                <div>
                  Total a pagar (Cupon: {order.cupon.nombre}):{" "}
                  <del className="ml-4"> {order.precio_total}</del>{" "}
                  {order.precio_final}
                </div>
              ) : (
                <div>Total a pagar: {order.precio_final}</div>
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
