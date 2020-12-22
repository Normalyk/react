import React, {Component} from 'react';
import Comment from "../comments/Comment";
import {CommentService} from "../../service/CommentService"
class AllComments extends Component {

    CommentService =  new CommentService();

    state = {comments: [], clicked: null};

    // onCommentClick = (id) => this.setState({clickedS:this.state.comments.find(value => value.id === id)});
    onCommentClick = (id) => {
        let clicked = this.state.comments.find(value => value.id === id);
        this.setState({clicked});
    }

    componentDidMount() {
        this.CommentService.getAllComments().then(value => this.setState({comments:value}));
    }

    render() {
        let {comments, clicked} = this.state;
        return (
            <div>
                {
                    comments.map(value => (<Comment item={value} key={value.id} onCommentClick={this.onCommentClick}/>))
                }
                {clicked && <h2>{clicked.id}-{clicked.name}</h2>}
            </div>

        );
    }
}

export default AllComments;