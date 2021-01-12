import React, {Component} from 'react';
import CommentService from '../../services/CommentService';
import Comment from '../comment/Comment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, withRouter
} from 'react-router-dom';
import FullComments from '../full-comments/FullComments';

class AllComments extends Component {

    commentService = new CommentService();
    state = {comments: []};


    async componentDidMount() {
        let comments = await this.commentService.comments();
        this.setState({comments});


    }

    render() {
        let {comments} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    {/*/comments/3*/}
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;

                        return <FullComments {...props} key={id}/>;
                    }}/>
                </Switch>


                <hr/>
            </div>

        );
    }
}

export default withRouter(AllComments);