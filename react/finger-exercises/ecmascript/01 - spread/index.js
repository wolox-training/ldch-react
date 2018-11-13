import isArray from './utils';

export function min(...param) {
  if (!param.length) {
    return undefined;
  }
  return isArray(...param) ? Math.min(...param[0]) : Math.min(...param);
}

export function copy(obj) {
  return isArray(obj) ? [...obj] : { ...obj };
}

export function reverseMerge(a, b) {
  return [...b, ...a];
}

export function filterAttribs({ a, b, ...rest }) {
  return rest;
}
