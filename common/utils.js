export function hasOwn(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function isNotEmptyString(value) {
  return typeof value === 'string' && value.length;
}