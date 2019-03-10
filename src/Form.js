import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form id="post-add" className="col-lg-4" onSubmit={this.props.app.handleSubmit}>
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            name="title"
            placeholder="заголовок"
            onChange={this.props.app.handleChange}
            value={this.props.app.state.title}
          />
        </div>
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            name="body"
            placeholder="запись"
            onChange={this.props.app.handleChange}
            value={this.props.app.state.body}
          />
        </div>
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            name="tags"
            placeholder="тег, еще тег"
            onChange={this.props.app.handleChange}
            value={this.props.app.state.tags}
          />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    );
  }
}

export default Form;
