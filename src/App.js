import React, {Component} from 'react';
import PostComponent from "./components/post/postComponent";
import AllPostsComponent from "./components/allPosts/allPostsComponent";

class App extends Component {

    render() {
        return (
            <div>
                <AllPostsComponent/>
            </div>
        );
    }
}

export default App;