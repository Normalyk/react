import React, {Component} from 'react';
import CommentComponent from "../comments/commentComponent";
import {commentService} from "../service/commentService";

class AllCommentsComponent extends Component {
    commentService = new commentService();
    state = {comment: [], chosenComment: null};

    // selectThisComment = (id) => {
    //     let chosenComment = this.state.comment.find(value => value.id === id);
    //     this.setState({chosenComment});
    // };

    selectThisComment = (id) => {
        this.commentService.getCommentByID(id).then(value => this.setState({chosenComment:value}));
    };

    customComment() {
        this.commentService.getAllComments().then(value => this.setState({comment: value}));
    }

    render() {
        let {comment, chosenComment} = this.state;
        return (
            <div>
                {
                    comment.map(value => (
                        <CommentComponent item={value}
                                          key={value.id}
                                          selectThisComment={this.selectThisComment}
                                          isShowButton={true}
                        />))
                }
                <hr/>
                {
                    chosenComment && <CommentComponent item={chosenComment} isShowButton={false}/>
                }

            </div>
        );
    }
}

export default AllCommentsComponent;