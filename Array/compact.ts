type Falsey = null | undefined | false | "" | 0 | 0n;
type List<T> = ArrayLike<T>;

const DEFAULT_ARRAY = [];

/**
 * 创建一个数组移除所有假值
 */
const compact = <T>(array: ArrayLike<T | null | undefined>): T[] => {
  return Array.from(array).filter(Boolean) as T[];
};

console.log(compact([0, 1, false, 2, "", 3]));
// output: [1, 2, 3]

