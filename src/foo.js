export default function () {
  const { console, ...rest } = window;

  return Reflect.ownKeys(rest);
}
