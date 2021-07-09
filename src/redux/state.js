const NewPost = 'newPost'

let store = {
    _state: {
        PostsPage: {
            PostData: [
                { id: 1, name: 'Jan-Pier', lastName: 'Polnaref' },
                { id: 2, name: 'Liza', lastName: 'Liza' },
                { id: 3, name: 'Holly', lastName: 'Kujo' }
            ],

            newNamePostText: '',
            newLastNamePostText: ''
        },
    },

    getState() {
        return this._state;
    },

    _rerenderApp() {
        console.log('Hello!');
    },

    render(observer) {
        this._rerenderApp(observer);
    },

    addPost() {
        let newPost = {
            id: 3,
            name: this._state.PostsPage.newNamePostText,
            lastName: this._state.PostsPage.newLastNamePostText
        }

        this._state.PostsPage.PostData.push(newPost);
        this._state.PostsPage.newNamePostText = '';
        this._state.PostsPage.newLastNamePostText = '';
        this._rerenderApp(this._state)
    },

    newNameText(text) {
        this._state.PostsPage.newNamePostText = text;
        this._rerenderApp(this._state);
    },

    newLastNameText(text) {
        this._state.PostsPage.newLastNamePostText = text;
        this._rerenderApp(this._state)
    },
}

export default store;