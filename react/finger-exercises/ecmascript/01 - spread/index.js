import { isArray } from './utils';

export function min(param) {
  let number;
  if (isArray(param)) {
    number = Math.min(...param);
  } else {
    number = Math.min(param);
  }
  return number;
}

export function copy() {

}
