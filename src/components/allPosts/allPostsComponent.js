import React, {Component} from 'react';
import PostComponent from "../post/postComponent";

class AllPostsComponent extends Component {
    state = {posts: [], chosenPosts: null};
    flag = false;

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }


    selectThisPost = (id) => {
        let chosenPosts = this.state.posts.find(value => value.id === id);
        this.setState({chosenPosts});
    };

    render() {
        let {posts, chosenPosts} = this.state;
        return (
            <div>
                {
                    posts.map(value => (
                        <PostComponent item={value}
                                       key={value.id}
                                       selectThisPost={this.selectThisPost}
                        />))
                }
                <hr/>
                {
                    chosenPosts && <PostComponent item={chosenPosts}/>
                }

            </div>
        );
    }
}

export default AllPostsComponent;