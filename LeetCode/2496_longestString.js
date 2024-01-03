var maximumValue = function (strs) {

  return Math.max(
    ...strs.map((str) => (Number.isInteger(str) ? str : str.length))
  );
};

const strs = ["alic3", "bob", "3", "4", "00000"];
console.log(maximumValue(strs));
