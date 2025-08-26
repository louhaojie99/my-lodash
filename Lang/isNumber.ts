/**
 * 判断是否为数值型
 */
const isNumber = (num?: any) => {
  if (num === null || num === undefined) return false;
  return typeof num.valueOf() === "number";
};
