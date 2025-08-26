/**
 * isNaN() 函数用来确定一个值是否为 NaN，若有必要，则首先将值转换为数字。
 * 由于 isNaN() 函数内部的强制类型转换可能令人迷惑，因此你可能更想要使用 Number.isNaN()。
 */
const _isNaN = (num: unknown) => {
  return Number.isNaN(num);
};
