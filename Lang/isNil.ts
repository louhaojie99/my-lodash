/**
 * 检查 value 是否是 null 或者 undefined。
 */
export const isNil = (val: unknown) => {
  return val === null || val === undefined;
};
