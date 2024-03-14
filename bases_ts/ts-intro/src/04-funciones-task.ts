// interface SuperHero {
//   name: string;
//   age: number;
//Se puede hacer de esta forma pero se recomienda usar un interface diff
//   address: {
//     calle: string;
//     ciudad: string;
//     pais: string;
//   };
//   showAddress: () => string;
// }

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

//Mayor flexibilidad
interface Address {
  street: string;
  city: string;
  country: string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHeroe.showAddress();
console.log(address);
