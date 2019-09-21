import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Details from './Details'
import Home from './Home'


class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path='/details' component={ Details } />
        </Switch>
      </Router>
    )
  }
}

export default App
