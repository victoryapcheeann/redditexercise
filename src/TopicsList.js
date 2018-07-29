import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from "react-redux";

class TopicsList extends Component{
  render() {
    return (
      <div>
      {
        _.sortBy(this.props.topics,'id').reverse().map(topic => {
            return(
              <div key={topic.id} className="columnStyle topicContainer ">
                <h4>{topic.id}</h4>
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
