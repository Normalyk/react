import React, {Component} from 'react';

class PostComponent extends Component {
    render() {

        let {item, selectThisPost} = this.props;
        return (
            <div>
                {item.userId}-{item.id}-{item.title}-{item.body}
                <button onClick={() => selectThisPost(item.id)}>Click on me</button>
            </div>
        );
    }
}

export default PostComponent;