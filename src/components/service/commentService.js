export class commentService {

    url = 'https://jsonplaceholder.typicode.com/comments';

    getAllComments() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value;
            });
    }

    getCommentByID(id) {
        return fetch(`url/${id}`).then(value => value.json()).then(value => value);
    }
}