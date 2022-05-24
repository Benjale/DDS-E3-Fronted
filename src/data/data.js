export const orders = [
  {
    id: 0,
    precio_total: 150000,
    precio_final: 150000,
    estado: "Orden Iniciada",
    fecha_creacion: "23 de Abril del 2022",
    cupon: null,
    items: [
      {
        nombre: "zapatilla 1",
        fotoUrl:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0990e1f2-192c-4e14-9bc1-9158a400b923/air-max-90-zapatillas-nino-a-j0sbgp.png",
        cantidad: 2,
        precio: 50000,
      },
      {
        nombre: "zapatilla 2",
        fotoUrl:
          "https://media.vogue.es/photos/6120c767358123b52e2edbbe/master/w_320%2Cc_limit/Captura%2520de%2520pantalla%25202021-08-21%2520a%2520las%252011.29.06.png",
        cantidad: 1,
        precio: 50000,
      },
    ],
  },
  {
    id: 1,
    precio_total: 250000,
    precio_final: 225000,
    estado: "Productos Enviados",
    fecha_creacion: "23 de Abril del 2022",
    cupon: { nombre: "TODOS 10%", descuento: 0.1 },
    items: [
      {
        nombre: "Poleron 1",
        fotoUrl:
          "https://nikeclprod.vteximg.com.br/arquivos/ids/208205-1000-1000/DC9604_010_A_PREM.jpg?v=637691535025830000",
        cantidad: 1,
        precio: 50000,
      },
      {
        nombre: "zapatilla 2",
        fotoUrl:
          "https://media.vogue.es/photos/6120c767358123b52e2edbbe/master/w_320%2Cc_limit/Captura%2520de%2520pantalla%25202021-08-21%2520a%2520las%252011.29.06.png",
        cantidad: 1,
        precio: 50000,
      },
      {
        nombre: "pelota 1",
        fotoUrl:
          "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dweaad620f/images/imagenes-productos/800/MKOM/MKOMCU84VK-001.png?sw=320&sh=409&sm=fit",
        cantidad: 3,
        precio: 50000,
      },
    ],
  },
  {
    id: 2,
    precio_total: 200000,
    precio_final: 180000,
    estado: "Productos Entregados",
    fecha_creacion: "23 de Abril del 2022",
    cupon: { nombre: "POLERAS 40%", descuento: 0.4 },
    items: [
      {
        nombre: "Polera 1",
        fotoUrl: "https://img.yapo.cl/images/20/2044822789.jpg",
        cantidad: 1,
        precio: 50000,
      },
      {
        nombre: "Poleron 1",
        fotoUrl:
          "https://nikeclprod.vteximg.com.br/arquivos/ids/208205-1000-1000/DC9604_010_A_PREM.jpg?v=637691535025830000",
        cantidad: 1,
        precio: 50000,
      },
      {
        nombre: "zapatilla 2",
        fotoUrl:
          "https://media.vogue.es/photos/6120c767358123b52e2edbbe/master/w_320%2Cc_limit/Captura%2520de%2520pantalla%25202021-08-21%2520a%2520las%252011.29.06.png",
        cantidad: 1,
        precio: 50000,
      },
      {
        nombre: "pelota 1",
        fotoUrl:
          "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dweaad620f/images/imagenes-productos/800/MKOM/MKOMCU84VK-001.png?sw=320&sh=409&sm=fit",
        cantidad: 1,
        precio: 50000,
      },
    ],
  },
];

export const coupons = [
  {
    nombre: "TODOS 10%",
    descripcion: "Este cupon sirve para descontar un 10% del total de la orden",
    descuento: 0.1,
    estado: "GASTADO",
  },
  {
    nombre: "POLERAS 40%",
    descripcion:
      "Este cupon sirve para descontar un 40% del precio de las poleras de tu orden",
    descuento: 0.4,
    estado: "GASTADO",
  },
  {
    nombre: "ZAPATILLAS 15%",
    descripcion:
      "Este cupon sirve para descontar un 15% del precio de las zapatillas de la orden",
    descuento: 0.15,
    estado: "DISPONIBLE",
  },
];
