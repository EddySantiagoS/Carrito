//Este es un objeto que representa el estado y muestra los productos por defecto
//Devuelve los productos predeterminados y un arreglo vacío "cart"
//que es nuestro  estado inicial para el carro de compras

export default {
  cart: [],
  products: [
    {
      id: 1,
      name: "Acetaminofen",
      category: "Pastas",
      price: 10000,
      image:
        "https://www.farmalisto.com.co/95434-thickbox_default/comprar-acetaminofen-500-mg-caja-x-20-tabletas-precio-7707193640282.jpg",
    },
    {
      id: 2,
      name: "Ibuprofeno",
      category: "Pastas",
      price: 9500,
      image:
        "https://www.farmandina.gt/userfiles/2019/01/IBUPROFENO-800MG-CAJA-POR-50-TABLETAS-CON-BLISTER.jpg",
    },
    {
      id: 3,
      name: "X Ray Dol",
      category: "Pastas",
      price: 12000,
      image:
        "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00065024001181L.jpg",
    },
    {
      id: 4,
      name: "Betametasona",
      category: "Crema",
      price: 15800,
      image:
        "https://th.bing.com/th/id/R.18e98089cdcfc4f5017196314709015c?rik=Y9%2fOb3h8UCP30w&pid=ImgRaw&r=0",
    },
  ],
};
