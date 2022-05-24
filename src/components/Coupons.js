import React from "react";
import CouponCard from "../components/CouponCard";
import { coupons } from "../data/data";

const Coupons = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-lg-3 row-cols-md-2 pt-4">
          {coupons.map((cupon) => {
            return <CouponCard cupon={cupon} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Coupons;
