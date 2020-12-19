import React, {Component} from 'react';
import UserMain from "./Component/user/userMain";

class App extends Component {
     users = [{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
        { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
        { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
        { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
        { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }];
    render() {
        return (
            <div>
                {this.users.map(value => {
                return(<UserMain item = {value}/>)

                })
                }
            </div>
        );
    }
}

export default App;