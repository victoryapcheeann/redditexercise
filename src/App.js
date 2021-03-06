import React, { Component } from 'react';
import './App.css';

import TopicsList from './TopicsList';
import TopicsCreateBox from './TopicsCreateBox';

class App extends Component{
  render() {
    return (
      <div>
        <h2>Reddit Exercise</h2>
        <a href="https://github.com/victoryapcheeann/redditexercise">Github Link</a>
        <br />
        <br />
        <TopicsCreateBox /> {/*This is the component to create new topics*/}
        <TopicsList /> {/*This is the component to view, upvote and downvote topics*/}
      </div>
    )
  }
}

export default App;