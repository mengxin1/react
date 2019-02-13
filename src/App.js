import React,{Component} from 'react';
import NavLink from './NavLink'

//函数式组件，无状态组件
// const Child=()=>{
//     return(
//         <div>
//             <h1>React Hello World</h1>
//         </div>
//     )
// }



export default class App extends Component{

    render(){
        
        return(
            <div>
                <h1>App</h1>
                <ul>
                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>

                {this.props.children}

            </div>
        )
    }
}

// export default App;