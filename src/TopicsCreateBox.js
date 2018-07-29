import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveTopics } from './actions';

class TopicCreateBox extends Component{
  state = { topics: '' };

  handleChange = event => {
    this.setState({ topics: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.saveTopics();
    this.setState({ topics: '' });
  };
  
  saveTopics() {
    this.props.saveTopics(this.state.topics);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className = "columnStyle">
          <span>Create a new topic</span>
            <textarea onChange={this.handleChange} value={this.state.topics} />
          <button>Submit topic</button> 
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  saveTopics
}

export default connect(
  null,
  mapDispatchToProps
)(TopicCreateBox);