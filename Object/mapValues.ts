type ObjectCallback<TObject, TResult> = (
  value: TObject[keyof TObject],
  key: string
) => TResult;

/**
 * 映射对象所有的值
 */
const mapValues = <TObject extends object, TResult>(
  object: TObject | null | undefined,
  callback: ObjectCallback<TObject, TResult>
): { [P in keyof TObject]: TResult } => {
  const newObj = {} as { [P in keyof TObject]: TResult };

  for (const key in object) {
    const value = object[key];
    newObj[key] = callback(value, key);
  }

  return newObj;
};

const users = {
  fred: { user: "小酷", age: 22 },
  pebbles: { user: "小樱", age: 20 },
};

console.log(
  mapValues(users, function (o) {
    return o.age;
  })
);

/*
{ [P in keyof TObject]: TResult } 是一个映射类型（Mapped Type） 
  - keyof TObject：获取 TObject 类型的所有属性名的联合类型
  - P in keyof TObject：遍历 TObject 的每一个属性名 P
  - { [P in keyof TObject]: TResult }：创建一个新类型，保持原对象的键名，但将所有值的类型都改为 TResult


工作原理
  - 保持键名不变：P in keyof TObject 确保新对象有完全相同的键
  - 统一值类型：所有属性的值类型都变为 TResult
*/

type User = {
  username: string;
  age: number;
};

// const obj: { [keyof User]: User[keyof User] } = { username: "小樱", age: 20 };
const obj: { [P in keyof User]: User[P] } = {
  username: "小樱",
  age: 20,
};

type MappedUser = { [P in keyof User]: User[P] };
