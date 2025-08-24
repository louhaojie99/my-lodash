/**
 * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
 */
const isPlainObject = (value?: any) => {
  if (typeof value !== "object" || value === null || value === undefined) {
    return false;
  }

  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }

  const proto = Object.getPrototypeOf(value); // 获取对象 value 的原型

  if (proto === null || proto === undefined) {
    return true;
  }

  const constructor = proto.constructor;

  return typeof constructor === "function" && constructor === Object;
};
