import React,{Component} from 'react';
export default class Content extends Component{
    render(){
        const location=this.props.location;
        const params=this.props.match.params;
        return(
            <div>
                Content
                <br/>
                Params:{JSON.stringify(params)}
                <br/>
                Location:{JSON.stringify(location)}
            </div>
        )
    }
}