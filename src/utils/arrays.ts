import { isNullOrUndefined } from './objects';

export function arrayIsNullOrEmpty(array) {
  return isNullOrUndefined(array) || array.length === 0;
}
