/**
 * 检查value是否为空对象或空集合
 */
const isEmpty = (obj: any) => {
  return (
    // 检查 obj 是否是 Object 或 Array 类型（.constructor：获取 obj 的构造函数（如 Object 或 Array））
    [Object, Array].includes((obj || {}).constructor) &&
    // [Object, Array].includes(...)：检查 obj 的构造函数是否是 Object 或 Array
    !Object.entries(obj || {}).length
  );
};
