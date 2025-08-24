/**
 * 创建一个去重后的数组
 */
const uniq = <T>(array: ArrayLike<T>) => {
  return [...new Set(Array.from(array))];
};
