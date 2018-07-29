import React, { Component } from 'react';
import './App.css';
import TopicsList from './TopicsList';
import TopicsCreateBox from './TopicsCreateBox';

class App extends Component{
  render() {
    return (
      <div>
        <h2>Reddit Exercise</h2>
        <TopicsCreateBox />
        <TopicsList />
      </div>
    )
  }
}

export default App;