/** 
 * fill() 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。
 */
const fill = <T>(
  array: T[],
  ...args: Parameters<typeof Array.prototype.fill>
) => {
  return array.fill(...args);
};
