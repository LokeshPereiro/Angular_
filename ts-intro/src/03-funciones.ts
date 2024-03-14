// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

const addNumbers = (a: number, b: number): number => {
  return a + b;
};

const result = addNumbers(10, 5);
console.log(`El resultado es: ${result}`);

const userName = (name: string, surname?: string, age = 26) => {
  return `Hola me llamo ${name} ${surname} y tengo ${age}`;
};

const user = userName("Lokesh", "Pereiro");
console.log(user);

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const personaje = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 10,
  showHp() {
    console.log(`Puntos de poder: ${this.hp}`);
  },
};

personaje(strider, 20);

console.log(strider.showHp());
