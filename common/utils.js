export function hasOwn(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}