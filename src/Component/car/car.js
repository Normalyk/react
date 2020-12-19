import React, {Component} from 'react';
import './car.css';
class Car extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'target'}>
                <h3>
                    {item.producer} - {item.model} - {item.year}
                </h3>
            </div>
        );
    }
}

export default Car;