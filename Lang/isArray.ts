/**
 * 判断是否为数组
 */
const isArray = (...args: Parameters<typeof Array.isArray>) => {
  return Array.isArray(...args);
};

var array = [];
console.log(isArray(array));

// output: true
