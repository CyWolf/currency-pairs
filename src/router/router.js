import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainView from '../modules/view/pages/index'

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <MainView />
        </Route>
      </Switch>
    </div>
  )
}

export default Router
