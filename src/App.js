import React, { Component } from 'react';
import Posts from './Posts';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem(this.props.localKey) === null) {
      localStorage.setItem(this.props.localKey, JSON.stringify([]));
    }
    this.state = { posts: JSON.parse(localStorage.getItem(this.props.localKey)), title: '', body: '', tags: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  render() {
    return (
      <div className="container">
        <header id="header">
          <div className="page-header">
            <h1>Коллекция постов</h1>
          </div>
        </header>
        <section>
          <Posts app={this} />
          <Form app={this} />
        </section>
      </div>
    );
  }

  handleChange(e) {
    switch (e.target.name) {
      case 'title':
        this.setState({ title: e.target.value });
        break;
      case 'body':
        this.setState({ body: e.target.value });
        break;
      case 'tags':
        this.setState({ tags: e.target.value.split(',') });
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const maxId = this.getPostsMaxId();
    const clearTitle = this.state.title.trim();
    const clearBody = this.state.body.trim();
    const clearTags = this.state.tags.map(elem => elem.trim()).filter((elem,i,arr) => (elem && arr.indexOf(elem) === i));
    if (!clearTitle.length || !clearBody.length || !clearTags.length) {
      return;
    }
    const newPost = {
      id: maxId,
      title: clearTitle,
      body: clearBody,
      tags: clearTags
    };
    this.setState(state => ({
      posts: state.posts.concat(newPost),
      title: '',
      body: '',
      tags: []
    }), function() {
      localStorage.setItem(this.props.localKey, JSON.stringify(this.state.posts));
    });
  }

  handleRemove(e) {
    const clearId = parseInt(e.target.id.substr("button-post-".length));
    this.setState(state => ({
      posts: state.posts.filter(elem => (parseInt(elem.id) !== clearId)),
      title: '',
      body: '',
      tags: []
    }), function() {
      localStorage.setItem(this.props.localKey, JSON.stringify(this.state.posts));
    });
  }

  getPostsMaxId() {
    let maxId = 1;
    this.state.posts.forEach((elem) => {if(elem.id >= maxId) maxId = +elem.id + 1;});
    return maxId;
  }
}

export default App;
