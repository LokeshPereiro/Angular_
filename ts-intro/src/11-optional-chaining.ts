export interface Passenger {
  name: string;
  children?: string[];
}
const passenger1: Passenger = {
  name: "Fernando",
};
const passenger2: Passenger = {
  name: "Rahul",
  children: ["Pepe", "Jero"],
};

const printChildren = (passanger: Passenger) => {
  const howManyChildren = passanger.children?.length || 0; //Si es undefined entonces devuelve hijos = 0
  console.log(`${passanger.name} tiene ${howManyChildren} hijos`);
};

printChildren(passenger1);
