import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
      <div id="posts" className={this.props.app.state.posts.length ? "well" : "empty-posts-area"}>
        {this.props.app.state.posts.map(post => (

          <article key={post.id}>
            <header>
              <h3>{post.title}</h3>
            </header>
            <section>
              <p>{post.body}</p>
            </section>
            <footer>
              <div className="tags">
                {post.tags.map(tag => (
                  <button key={tag} className="btn btn-xs btn-default">{tag}</button>
                ))}
              </div>
            </footer>
            <div className="controls">
              <button
                id={"post-button-" + post.id}
                className="btn btn-danger btn-mini"
                onClick={this.props.app.handleRemove}>
                  удалить
              </button>
            </div>
          </article>
        
        ))}
      </div>
    );
  }
}

export default Posts;
