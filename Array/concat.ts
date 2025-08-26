interface ConcatArray<T> {
  readonly length: number;
  readonly [n: number]: T;
}

/**
 * 创建一个新数组，该数组由原始数组与任何其他数组和/或值连接而成。
 */
const concat = <T>(array: T[], ...items: any[]) => {
  return array.concat(...items);
};
