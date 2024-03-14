//! Estandar, primer genérico siempre una letra T
export function whatsMyType<T>(argument: T): T {
  return argument;
}
let amIString = whatsMyType<string>("Hello World!");
let amINumber = whatsMyType<number>(100.37827487487);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed()); // Devuelve un entero string sin los decimales
console.log(amIArray.join("-"));
