import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleInfo extends Component {
  constructor() {
    super();
    this.state = { article: '', articles: '' } ;
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const requestOptions = {
      method: 'DELETE'
    };

    let articleID = this.state.article.id;
    fetch("/api/articles/" + articleID, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
      this.setState({articles: result});
    });
  };

  componentDidMount() {
    fetch('api/articles')
      .then(response => response.json())
      .then(data => {
        fetch(`api/articles/${this.props.match.params.id}`)
          .then(response => response.json())
          .then(dataArticle => {
            this.setState({article: dataArticle, articles: data});
          })
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <h2>{this.state.article.id}: {this.state.article.title}</h2>
        <p>{this.state.article.content}</p>
        <p>
          <Link to={`/articles/${this.state.article.id}/edit`} className="btn btn-outline-dark">Edit</Link>
          <Link to="/articles" onClick={this.handleDelete} className="btn btn-outline-dark">Delete</Link>
          <Link to="/articles" className="btn btn-outline-dark">Close</Link>
        </p>
        <hr/>
      </div>
    )
  }
}

export default ArticleInfo;