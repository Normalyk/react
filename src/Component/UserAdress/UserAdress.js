import React, {Component} from 'react';
import './UserAdress.css';
class UserAdress extends Component {
    render() {
            let {item} = this.props;
        return (
            <div className={'target'}>
                <h3>
                    {item.id} - {item.name} - {item.age} - {item.status.toString()}
                </h3>
            </div>
        );
    }
}

export default UserAdress;