import React,{Component} from 'react';
import {Prompt} from 'react-router-dom'
export default class Blocking extends Component{
    render(){
        return(
            <div>
                Blocking
                <br/>
                <Prompt message="你确定离开吗？"/>
            </div>
        )
    }
}