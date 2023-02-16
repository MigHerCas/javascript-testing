// Code to test
function sum(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

// Test functions
function expect(actual: unknown) {
  return {
    toBe(expected: unknown) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

function test(title: string, callback: () => void) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function sumTest() {
  let result = sum(3, 7);
  let expected = 10;
  expect(result).toBe(expected);
}

function subtractTest() {
  let result = subtract(7, 3);
  let expected = 4;
  expect(result).toBe(expected);
}

// Test execution
test("sum adds numbers", sumTest);
test("subtract subtracts numbers", subtractTest);
