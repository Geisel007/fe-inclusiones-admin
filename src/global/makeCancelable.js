export const makeCancelable = (promise) => {
  let hasCanceled_ = false

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => hasCanceled_ ? reject(new Error('The promise was canceled')) : resolve(val),
      error => hasCanceled_ ? reject(new Error('The promise was canceled')) : reject(error)
    )
  })

  return {
    promise: wrappedPromise,
    cancel () {
      hasCanceled_ = true
    }
  }
}
