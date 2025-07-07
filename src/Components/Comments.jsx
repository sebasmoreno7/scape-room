import React, { Component } from 'react';

class Comments extends Component {
  state = {
    comments: [],
    text: ''
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.text.trim();
    if (!value) return;
    this.setState((state) => ({
      comments: [...state.comments, value],
      text: ''
    }));
  };

  render() {
    return (
      <div className="comments">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a comment"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.comments.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;
