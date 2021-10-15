const delayedResolve = (delay = 0) => new Promise(res => setTimeout(res, delay));

class PromiseTimeoutError extends Error {
  constructor (message = 'promise timed-out') {
    super(message);

    this.name = 'PromiseTimeoutError'
    this.date = new Date()
  }
}

function pMinDelay (promise, delay = 0) {
  return Promise.all([promise, delayedResolve(delay)])
    .then(([settledPromise]) => {
      return settledPromise
    })
}


async function promiseTimeout(promise, timeOutMil = 10000 /* 10 secs */) {
  let error = new PromiseTimeoutError(), timeoutId
  const timeoutPromise = new Promise((res, reject) => {
    timeoutId = setTimeout(() => reject(error), timeOutMil)
  })

  return Promise.race([
    promise,
    timeoutPromise
  ]).then(v => {
    clearTimeout(timeoutId)

    return v
  }).catch(err => {
    clearTimeout(timeoutId)

    throw err
  })
}

async function pMinMax (promise, min = 200, max = 10000) {
  return promiseTimeout( pMinDelay(promise, min), max)
}

export {
  pMinMax,
  pMinDelay,
  promiseTimeout
}