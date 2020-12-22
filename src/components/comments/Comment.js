import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item, onCommentClick} = this.props;
        return (
            <div>
                {item.id} - {item.name} - <button onClick={()=>{onCommentClick(item.id)}}>~Click on me, seenpai~</button>
            </div>
        );
    }
}

export default Comment;