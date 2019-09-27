import React, { Component }from 'react';
import Styled from 'styled-components';

const Button = Styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
  `;

class ArticleForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            required='required'
            value={this.props.title}
            onChange={this.props.handleChange}
            className="form-control"/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            rows="5"
            value={this.props.content}
            onChange={this.props.handleChange}
            className="form-control"/>
        </div>
        <div className="btn-group">
          <Button type="submit" className="btn btn-dark">{this.props.action}</Button>
          <Button type="button" onClick={this.props.handleCancel} className="btn btn-secondary">Cancel</Button>
        </div>
      </form>
    );
  }
}

export default ArticleForm;