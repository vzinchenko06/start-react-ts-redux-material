import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import promise from 'redux-promise-middleware'
import { createPromise } from 'redux-promise-middleware'

const promise = createPromise({ promiseTypeDelimiter: '/' })
const middlewares: any[] = [thunk, promise]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').default)
}

export default applyMiddleware<any>(...middlewares)