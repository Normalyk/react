import React, {Component} from 'react';
import CommentComponent from "../comments/commentComponent";

class AllCommentsComponent extends Component {
    state = {comment: [], chosenComment: null};

    selectThisComment = (id) => {
        let chosenComment = this.state.comment.find(value => value.id === id);
        this.setState({chosenComment});
    };

    render() {
        let {comment, chosenComment} = this.state;
        return (
            <div>
                {
                    comment.map(value => (
                        <CommentComponent item={value}
                                          key={value.id}
                                          selectThisComment={this.selectThisComment}
                        />))
                }
                <hr/>
                {
                    chosenComment && <CommentComponent item={chosenComment}/>
                }

            </div>
        );
    }
}

export default AllCommentsComponent;