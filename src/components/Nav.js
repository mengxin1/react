import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class Nav extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                    <li><NavLink to="/basic-routing" activeClassName="active">BasicRouting</NavLink></li>
                    <li><NavLink to="/blocking" activeClassName="active">Blocking</NavLink></li>
                    <li><NavLink to="/miss" activeClassName="active">Miss</NavLink></li>
                    <li><NavLink to="/query-params" activeClassName="active">QueryParams</NavLink></li>
                </ul>
            </div>
        )
    }
} 