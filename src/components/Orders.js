import React from "react";
import OrderCard from "../components/OrderCard";
import { orders } from "../data/data";

const Orders = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-1 row-cols-lg-3 row-cols-md-2 pt-4">
          {orders.map((order) => {
            return <OrderCard order={order} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;
