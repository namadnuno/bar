import { Product } from "./product.db";

export const seedDB = () => {
  seedProducts();
}

const seedProducts = () => {
  new Product({
    name: 'Café',
    icon: 'coffee',
    price: 0.60
  }).save();
  new Product({
    name: '  BOLOS',
    price: 0.90,
    icon: 'coffee'
    }).save();
  new Product({
    name: 'GALÃO',
    price: 0.80,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'MEIA DE LEITE',
    price: 0.70,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'CHÁ',
    price: 0.70,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'LEITE COM CHOCOLATE',
    price: 0.70,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'ÁGUA S/ GÁS',
    price: 0.60,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'ÁGUA C/ GÁS',
    price: 0.90,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'REFRIGERANTES',
    price: 1.10,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'CERVEJA MINI',
    price: 0.80,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'LICOR BEIRÃO',
    price: 1.50,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'VINHO DO PORTO',
    price: 1.00,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'MARTINI',
    price: 1.00,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'MARTINI COM CERVEJA',
    price: 1.50,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'RICARD',
    price: 1.50,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'MACIEIRA',
    price: 1.00,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'BRANDY 1920',
    price: 1.00,
    icon: 'coffee'
  }).save();
  new Product({
    name: 'BRANDY CROFT',
    price: 1.00,
    icon: 'coffee'
  }).save();
}