function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProp = "New Prop";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  public myProp: string = "hjadhjdhad";

  print() {
    console.log("Hola Mundo!!!");
  }
}

const myClass = new SuperClass();
console.log(myClass);
