import { createAction } from 'redux-actions'
import api from '../../api'

export const getApiHealthCheck = createAction<any>('APP/HEALTH-CHECK', api.getHealthCheck.bind(api))