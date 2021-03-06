import React,{Component} from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import {Content,Nomatch} from '../components'
export default class Miss extends Component{
    render(){
        return(
            <div>
                Miss
                <br/>
                <ul>
                    <li><Link to={this.props.match.url+'/level1'}>Level 1</Link></li>
                    <li><Link to={this.props.match.url+'/level2'}>Level 2</Link></li>
                    <li><Link to={this.props.match.url+'/level3'}>Level 3</Link></li>
                </ul>
                <Switch>
                    <Route path={`${this.props.match.url}/:level`} component={Content}></Route>
                    <Route component={Nomatch}></Route>
                </Switch>
                
            </div>
        )
    }
}