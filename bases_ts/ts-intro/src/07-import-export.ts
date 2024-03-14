import { Product } from "./06-destructuringArgs";

const phone: Product = {
  desc: "iPhone 15",
  price: 1200,
};

const tablet: Product = {
  desc: "iPad mini",
  price: 900,
};

export const shoppingCart = [phone, tablet];
