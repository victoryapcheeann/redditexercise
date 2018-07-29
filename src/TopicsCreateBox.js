import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveTopics } from './actions';

class TopicCreateBox extends Component{
  state = { 
    topics: '' ,
    exceedLength: false
  };
  
  //Action function
  saveTopics() {this.props.saveTopics(this.state.topics);}
    
  //Assign the value to the topics state when it changes
  handleChange = event => {
    this.setState({ topics: event.target.value });
  };
  
  //Save the topics when clicked
  handleSubmit = event => {
    event.preventDefault();
    this.saveTopics();
    this.setState({ topics: '' });
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className = "columnStyle">
          <span>Create a new topic</span>
            <textarea 
              maxLength="255"
              onChange={this.handleChange} 
              value={this.state.topics} />
          <button>Submit topic</button> 
        </div>
      </form>
    )
  }
}

//Access to the saveTopics function in redux store
const mapDispatchToProps = {
  saveTopics
}

//Link this component to the store, the first field is null since no state is required to be map here
export default connect(
  null,
  mapDispatchToProps
)(TopicCreateBox);