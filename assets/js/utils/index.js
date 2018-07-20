export function hasOwn(context, prop) {
  return Object.prototype.hasOwnProperty.call(context, prop);
}