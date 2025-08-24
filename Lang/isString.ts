const isString = (str: string) => {
  if (str === null || str === undefined) return false;

  // 为什么用 str.valueOf()？
  // valueOf() 是 JavaScript 对象的一个方法，它会返回对象的 原始值（primitive value）。对于 String 对象：
  // const strObj = new String("hello");
  // console.log(strObj.valueOf()); // "hello"（返回原始字符串）
  return typeof str.valueOf() === "string";
};
