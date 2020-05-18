// Utility function that converts a number into a string dollar amount
export const numToDollar = (num) => {
  let numStr = `$${num.toString()}0`;
  let idx = numStr.indexOf(".");
  numStr = numStr.slice(0, idx + 3);
  return numStr;
};
