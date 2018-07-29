import React, { Component } from 'react';
import topics from './data/topics'
import _ from 'lodash';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class TopicsList extends Component{
  render() {
    return (
      <div>
      {
        _.sortBy(this.props.topics,'totalVote').reverse().map(topic => {
            return(
              <div key={topic.id} className="columnStyle topicContainer ">
                <h4>{topic.topicTitle}</h4>
                <div className="voteContainer">
                  <div className="columnStyle">
                    <button >
                      Upvote
                    </button>
                    <span>{topic.upvote}</span>              
                  </div>
                  <div className="columnStyle">
                    <button>
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


export default connect(mapStateToProps, null)(TopicsList) 
