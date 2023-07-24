import { isNullOrUndefined } from './objects'

export function stringIsNullOrEmpty(obj) {
    return isNullOrUndefined(obj) || obj.length === 0;
};