function sum(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

function expect(actual: unknown) {
  return {
    toBe(expected: unknown) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

let result = sum(3, 7);
let expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);
