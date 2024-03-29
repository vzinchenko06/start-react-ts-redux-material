import React, { FC, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import useLogin from './hooks/useLogin'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import Terms from './components/Terms'
import { Provider as StoreProvider } from 'react-redux'
import { getApiHealthCheck } from './store/actions'
import store from './store'
import useAsyncDispatch from './hooks/useAsyncDispatch'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from './theme'

const App: FC = () => {
  const { user } = useLogin()

  const dispatch = useAsyncDispatch()

  useEffect(() => {
    dispatch(getApiHealthCheck())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/reset-password" component={ResetPassword}/>
        <Route path="/terms" component={Terms}/>
        <Redirect exact path="/*" to={user ? '/dashboard' : '/login'}/>
      </Switch>
    </Router>
  )
}

const AppProvider: FC = () => (
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <App/>
    </StoreProvider>
  </ThemeProvider>
)

export default AppProvider
