import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login from './routes/Login'
import Register from './routes/Register'

ReactDOM.render(
    <Router>
    <div>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
        <hr/>
        <Route exact path="/" component={Login}></Route>
        <Route path="/register" component={Register}/>
    </div>
</Router>, document.getElementById('app'))