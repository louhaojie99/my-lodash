/**
 * 判断是否为对象
 */
const isObject = (value?: any): value is object => {
  return typeof value === "object";
};
