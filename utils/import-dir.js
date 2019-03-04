export default function importDir(dir, components) {
  const result = {};

  if (Array.isArray(components)) {
    for (const item of components) {
      result[item] = () => import(/* webpackMode: "eager" */ `@/components/${dir}/${item}`);
    }
  }

  return result;
}