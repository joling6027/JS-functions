type ArrayValue<T> = T | Array<ArrayValue<T>>;

export default function flatten<T>(value: Array<ArrayValue<T>>): Array<T> {
  for (let i = 0; i < value.length;) {
    const item = value[i];
    if (Array.isArray(item)) {
      value.splice(i, 1, ...item)
    } else {
      i++
    }
  }
  return value as Array<T>;
}