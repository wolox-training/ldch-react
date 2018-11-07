import { isArray } from './utils';

export function min(...param) {
  if (!param.length) {
    return undefined;
  }
  let number;
  if (isArray(...param)) {
    number = Math.min(...param[0]);
  } else {
    number = Math.min(...param);
  }
  return number;
}

export function copy() {

}
