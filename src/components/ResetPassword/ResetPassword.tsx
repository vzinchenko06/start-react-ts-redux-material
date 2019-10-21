import React, { FC } from 'react'
import { match, Route, Switch, useRouteMatch } from 'react-router'

export const ResetPassword: FC = () => {
  let { path } = useRouteMatch() as match<any>
  return (
    <div>
      <div>
        <h1>ResetPassword</h1>
      </div>
      <Switch>
        <Route exact path={path}>
          <div>form</div>
        </Route>
        <Route path={`${path}/sent`}>
          <div>sent email</div>
        </Route>
        <Route path={`${path}/new-password`}>
          <div>new password</div>
        </Route>
        <Route path={`${path}/success`}>
          <div>new password success</div>
        </Route>
      </Switch>
    </div>

  )
}