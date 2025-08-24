const isNumber = (num: number) => {
  if (num === null || num === undefined) return false;
  return typeof num.valueOf() === "number";
};
