import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AllComments from './components/all-comments/AllComments';

class App extends Component {


    render() {

        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/comments'}>to all comments</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path={'/comments'} render={() => <AllComments/>}/>
                    </Switch>
                    <hr/>


                </div>
            </Router>
        );
    }
}

export default App;