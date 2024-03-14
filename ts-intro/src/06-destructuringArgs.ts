import { shoppingCart } from "./07-import-export";

export interface Product {
  desc: string;
  price: number;
}

interface TaxCalculation {
  products: Product[];
  tax: number;
}

function totalCaculation(options: TaxCalculation): [number, number] {
  const { products, tax } = options;
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

//Productos que voy a comprar
// const shoppingCart = [phone, tablet];
const tax = 0.15;

// const result = taxCaculation({
//   products: shoppingCart,
//   tax: tax,
// });

// console.log(`Total: Products ${result[0]}€`);
// console.log(`Total: Tax ${result[1]}€`);

const [total, iva] = totalCaculation({
  products: shoppingCart,
  tax: tax,
});
console.log({
  totalAntesIVA: total,
  iva,
});
