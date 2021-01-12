import React, {Component} from 'react';
import CommentService from '../../services/CommentService';

class FullComments extends Component {

    state = {comment: null};
    commentService = new CommentService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let comment = await this.commentService.comment(id);
        this.setState({comment});
        console.log(this.props);
    }

    render() {

        let {comment} = this.state;
        return (
            <div>
                {comment && <div>{comment.id}-{comment.name}-{comment.email}-{comment.body}</div>}
            </div>
        );
    }
}

export default FullComments;