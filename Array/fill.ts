const fill = <T>(
  array: T[],
  ...args: Parameters<typeof Array.prototype.fill>
) => {
  return array.fill(...args);
};
