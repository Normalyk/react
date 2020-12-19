import React, {Component} from 'react';
import './User.css';
class UserMain extends Component {

    render() {
        let {item} = this.props;
        return (
            <div className={'target'}>
                <h3>
                {item.name} - {item.age} - {item.status.toString()}
                </h3>
            </div>
        );
    }
}

export default UserMain;