import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Users from './containers/User'
import Home from './containers/Home'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
            </Switch>
        </Router>

    )
}

export default Routes