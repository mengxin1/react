import React from 'react';
import ReactDOM from 'react-dom';
import {Home,Nav,BasicRouting,Blocking,Miss,Nomatch,QueryParams} from './components';
import style from "./main.css";
import {Route,HashRouter as Router,Switch} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/basic-routing" component={BasicRouting}/>
                <Route path="/blocking" component={Blocking}/>
                <Route path="/miss" component={Miss}/>
                <Route path="/query-params" component={QueryParams}/>
                <Route component={Nomatch}/>
            </Switch>
            
        </div>
    </Router>

,document.getElementById('app'));

