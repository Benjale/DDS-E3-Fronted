import React from "react";

const CouponCard = ({ cupon }) => {
  return (
    <div>
      <div className="col card shadow rounded">
        <h4 className="align-left fw-bolder">{cupon.estado}</h4>

        <img
          className="thumb-nail shadow-sm rounded p-4 border m-4"
          src="ticket_logo.png"
          alt=""
        />

        <div className="row row-cols-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="col-2"
            fill="#99CCFF"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          <div className="col-8 mt-3">{cupon.nombre}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="col-2 "
            fill="#99CCFF"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </div>
        <p className="flex text-lg font-medium leading-tight text-gray-400 ml-2 mb-2 mt-1 text-justify">
          {cupon.descripcion}
        </p>
      </div>
    </div>
  );
};

export default CouponCard;
