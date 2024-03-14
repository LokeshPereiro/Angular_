//! Estandar, primer genérico siempre una letra T
export function whatsMyType<T>(argument: T): T {
  return argument;
}
let amIString = whatsMyType("Hello World!");
let amINumber = whatsMyType(100);
let amIArray = whatsMyType([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
