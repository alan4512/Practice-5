// B4 – Namespace import
import * as math from "../mathUtils.js";

export function sum(numbers) {
  return numbers.reduce((total, number) => math.add(total, number), 0);
}

export function average(numbers) {
  if (numbers.length === 0) return null;
  return math.divide(sum(numbers), numbers.length);
}
