export function toggleClass (classStr = '', toggle = false) {
  return toggle ? classStr : ''
}

export function createNumArray (num) {
  if (!Number.isInteger(num))
    return []

  return [ ...new Array(num).keys() ]
}

export default function throttle (fn, delay) {
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