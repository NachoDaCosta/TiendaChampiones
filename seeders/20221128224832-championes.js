'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      product_name: 'Nike Air Max',
      description: 'Muy comodo',
      category: 'Nike',
      price:200,
      image:'https://f.fcdn.app/imgs/bce380/www.globalsports.com.uy/gls/d13b/original/catalogo/NKCD5432-003-1/1500-1500/nike-air-max-excee-w-black.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    product_name: 'Nike Court',
      description: 'Elegante diseño',
      category: 'Nike',
      price:500,
      image:'https://cdn.shopify.com/s/files/1/0276/4288/8329/products/Disenosintitulo_1_54ad007f-0a1f-45c1-974f-445ff7206e09_1024x1024.png?v=1658674653',
      createdAt: new Date(),
      updatedAt: new Date()
  },
{
  product_name: 'Adidas Forum',
      description: 'Champíon blanco y lindo',
      category: 'Adidas',
      price:400,
      image:'https://sunfersa-assets.s3.amazonaws.com/images/ADFY7756-0001.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
}
]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};

