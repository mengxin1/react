import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom'
import {Content} from '../components'
export default class BasicRouting extends Component{
    render(){
        return(
            <div>
                BasicRouting
                <br/>
                <ul>
                    <li><Link to={this.props.match.url+'/level1'}>Level 1</Link></li>
                    <li><Link to={this.props.match.url+'/level2'}>Level 2</Link></li>
                    <li><Link to={this.props.match.url+'/level3'}>Level 3</Link></li>
                </ul>

                <Route path={`${this.props.match.url}/:level`} component={Content}></Route>

            </div>
        )
    }
}