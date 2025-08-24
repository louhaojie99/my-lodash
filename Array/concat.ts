interface ConcatArray<T> {
  readonly length: number;
  readonly [n: number]: T;
}

const concat = <T>(array: T[], ...items: any[]) => {
  return array.concat(...items);
};
