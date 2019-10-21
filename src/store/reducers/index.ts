import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { getApiHealthCheck } from '../actions'
import { ActionType } from 'redux-promise-middleware'

const api = handleActions<any, any>({
  [getApiHealthCheck.toString()]: {
    [ActionType.Pending]: (state, action) => {
      console.log('handleAction.PENDING', state, action)
      return state
    },
    [ActionType.Fulfilled]: (state, action) => {
      console.log('handleAction.FULFILLED', state, action)
      return action.payload || state
    },
    [ActionType.Rejected]: (state, action) => {
      console.log('handleAction.REJECTED', state, action)
      return state
    }
  }
}, {})

export type StoreState = {
  api?: any
}

const reducers = combineReducers<StoreState>({
  api
})

export default reducers