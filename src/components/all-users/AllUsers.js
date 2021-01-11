import React, {Component} from 'react';
import UserService from '../../services/UserService';
import User from '../user/User';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, withRouter
} from 'react-router-dom';
import FullUser from '../full-users/FullUser';

class AllUsers extends Component {

    userService = new UserService();
    state = {users: []};


    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});


    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    {/*/users/3*/}
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;

                        return <FullUser {...props} key={id}/>;
                    }}/>
                </Switch>


                <hr/>
            </div>

        );
    }
}

export default withRouter(AllUsers);