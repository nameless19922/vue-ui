import { hasOwn } from '@/common/utils';

export function convertToUnit(str, unit = 'px') {
  if (typeof str !== 'undefined' && str !== null ) {
    return `${Number(str)}${unit}`;
  }

  return null;
}

export function normalizeComponentPath(path) {
  if (typeof path === 'string') {
    return path.substring(2).slice(0, -4);
  }

  return null;
}

export function getComponentsList(list) {
  if (typeof list === 'function' && hasOwn(list, 'keys')) {
    return list.keys().map(item => normalizeComponentPath(item));
  }

  return null;
}