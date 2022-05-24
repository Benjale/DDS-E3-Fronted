import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
      <img src='ecommerce_logo.png' class="d-inline-block align-top" width="60" height="30" alt=""></img>
        Ecommerce
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Lista Productos <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/categorias">
              Categorías <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/ordenes">
              Órdenes <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/cupones">
              Cupones <span class="sr-only"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
