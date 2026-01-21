export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(greet("World"));
console.log(add(5, 3));
console.log(multiply(4, 7));
console.log(isEven(10));
