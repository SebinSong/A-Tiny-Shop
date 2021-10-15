import {
  pMinMax,
  pMinDelay,
  promiseTimeout
} from './p-min-max.js'

function toggleClass (classStr = '', toggle = false) {
  return toggle ? classStr : ''
}

function createNumArray (num) {
  if (!Number.isInteger(num))
    return []

  return [ ...new Array(num).keys() ]
}

function throttle (fn, delay) {
  let allowSample = true;

  return (...args) => {
    if (!allowSample)
      return;

    fn(...args);

    allowSample = false;
    setTimeout(() => {
      allowSample = true;
    }, delay)
  }
}

function cloneDeep (obj) {
  if (!obj) return obj;

  return JSON.parse(JSON.stringify(obj));
}

export {
  // p-min-max
  pMinMax,
  pMinDelay,
  promiseTimeout,

  toggleClass,
  createNumArray,
  throttle,
  cloneDeep
}
