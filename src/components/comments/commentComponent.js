import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {

        let {item, selectThisComment} = this.props;
        return (
            <div>
                {item.postId}-{item.id}-{item.name}-{item.email}-{item.body}
                <button onClick={() => selectThisComment(item.id)}>Click on me</button>
            </div>
        );
    }
}

export default CommentComponent;