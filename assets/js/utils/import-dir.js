export default function importDir(dir, components) {
  const result = {};

  if (Array.isArray(components)) {
    for (const item of components) {
      result[item] = () => import(`@/components/${dir}/${item}`);
    }
  }

  return result;
}