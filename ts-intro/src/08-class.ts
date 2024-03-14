export class Persona {
  //   public name: string;
  //   private address: string;

  //   constructor(name: string, address: string) {
  //     this.name = name;
  //     this.address = address;
  //   }

  constructor(
    public firstName: string,
    public surName: string,
    private address: string = "tbc"
  ) {
    this.firstName = firstName;
    this.surName = surName;
    this.address = address;
  }
}

// export class Hero extends Persona {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "Tierra");
//   }
// }

// const goku = new Persona("Gokú");
// const goku = new Hero("Dragon Ball Z", 1000, "Son Goku");
// console.log(goku);

//! Priorizar la composición sobre la herencia, de esta manera evitamos llamar al padre super() y averiguar las herencias entre clases
//! Nos permite tener los objetos de las clases y sus propiedades de una manera más fácil, cómo usarlos, consumirlos, etc.

export class Hero {
  //   public person: Persona;
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Persona
  ) {
    // this.person = new Persona(realName);
  }
}
//Tine una props en su clase pero no afecta a la clase Hero
const tony = new Persona("Tony", "Stark", "NY");

const marvel = new Hero("Ironman", 45, "Tony Stak", tony);

console.log(marvel);
export {};
