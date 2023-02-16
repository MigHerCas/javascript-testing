// sum is intentionally broken so you can see errors in the tests
const sum = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

// these are kinda pointless I know, but it's just to simulate an async function
const sumAsync = (a: number, b: number) => Promise.resolve(sum(a, b));
const subtractAsync = (a: number, b: number) => Promise.resolve(subtract(a, b));

export { sum, subtract, sumAsync, subtractAsync };
