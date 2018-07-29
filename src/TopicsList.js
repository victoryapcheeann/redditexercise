import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from "react-redux";
import { upvoteTopics, downvoteTopics } from './actions';

class TopicsList extends Component{  
  upvoteTopics(id) {this.props.upvoteTopics(id);}
  downvoteTopics(id) {this.props.downvoteTopics(id);}
  
  render() {
    return (
      <div>
      {
        _.sortBy(this.props.topics,'totalVote').reverse().map(topic => {
            return(
              <div key={topic.id} className="columnStyle topicContainer ">
                <h4>{topic.id}</h4>
                <h4>{topic.topicTitle}</h4>
                <div className="voteContainer">
                  <div className="columnStyle">
                    <button onClick={() => this.upvoteTopics(topic.id)}>
                      Upvote
                    </button>
                    <span>{topic.upvote}</span>              
                  </div>
                  <div className="columnStyle">
                    <button onClick={() => this.downvoteTopics(topic.id)}>
                      Downvote
                    </button>
                    <span>{topic.downvote}</span>
                  </div>
                  <div className="columnStyle">
                    <span>Total Vote</span>
                    <span>{topic.totalVote}</span>
                  </div>
                </div>
              </div>
            )
          })
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics
  };
}

const mapDispatchToProps = {
  upvoteTopics,
  downvoteTopics
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList) 
