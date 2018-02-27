import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.filterFn = this.filterFn.bind(this);
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then((results) => {this.setState({posts: results.data})});
  }

  updatePost(id, text) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text}).then(results => {
      this.setState({posts: results.data});
    });
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`).then(results => {
      this.setState({posts: results.data});
    });
  }

  createPost( text ) {
    axios.post('https://practiceapi.devmountain.com/api/posts', {text}).then(results => {
      this.setState({posts: results.data});
    });
  }

  filterFn(input) {
    axios.get(`https://practiceapi.devmountain.com/api/posts/filter?text=${input}`).then(results => {
      this.setState({posts: results.data});
    }).catch(e => {
      console.log(e);
  });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header inputfilter={this.filterFn}/>

        <section className="App__content">

          <Compose createPostFn={this.createPost} />

          {posts.map((post) => (<Post key={post.id} text={post.text} date={post.date} id={post.id} updatePostFn={this.updatePost} deletePostFn={this.deletePost} />))}
          
        </section>
      </div>
    );
  }
}

export default App;
