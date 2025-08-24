type Many<T> = T | readonly T[];

/**
 * 如果值还不是数组，则将其放入长度为一的数组中。
 */
export const castArray = <T>(value?: Many<T>): T[] => {
  return Array.isArray(value) ? value : ([value] as T[]);
};
