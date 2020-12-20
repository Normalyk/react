import React, {Component} from 'react';
import CommentComponent from "./components/comments/commentComponent";
import AllCommentsComponent from "./components/allComments/allCommentsComponent";

class App extends Component {

    render() {
        return (
            <div>
                <AllCommentsComponent/>
            </div>
        );
    }
}

export default App;