import React, { Component } from 'react';

class TopicCreateBox extends Component{
  render() {
    return (
      <div className = "columnStyle">
        <span>Create a new topic</span>
          <textarea />
        <button>Submit topic</button> 
      </div>
    )
  }
}

export default TopicCreateBox;