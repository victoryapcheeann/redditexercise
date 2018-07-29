import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from "react-redux";
import { upvoteTopics, downvoteTopics } from './actions';

class TopicsList extends Component{  
  state = { sortingStyle: 'totalVote' };
  
  //Action function
  upvoteTopics(id) {this.props.upvoteTopics(id);}
  downvoteTopics(id) {this.props.downvoteTopics(id);}
  
  //Toggle between totalvote and newvote
  sortByTopVote = event => {this.setState ({sortingStyle: 'totalVote'});};
  sortByNewVote = event => {this.setState ({sortingStyle: 'id'});};
  
  render() {
    return (
      <div>
        <div className = "rowStyle">
          <button onClick={this.sortByTopVote}>Top Vote</button>
          <button onClick={this.sortByNewVote}>New Vote</button>
        </div>
      {
        _.sortBy(this.props.topics, `${this.state.sortingStyle}`).reverse().slice(0,20).map(topic => {
            return(
              <li key={topic.id} className="columnStyle topicContainer ">
                <h4>{topic.topicTitle}</h4>
                <div className="voteContainer">
                  <div className="columnStyle upvoteContainer">
                    <button onClick={() => this.upvoteTopics(topic.id)}>
                      Upvote
                    </button>
                    <span>{topic.upvote}</span>              
                  </div>
                  <div className="columnStyle downvoteContainer">
                    <button onClick={() => this.downvoteTopics(topic.id)}>
                      Downvote
                    </button>
                    <span>{topic.downvote}</span>
                  </div>
                  <div className="columnStyle totalVoteContainer">
                    <span>Total Vote</span>
                    <span>{topic.totalVote}</span>
                  </div>
                </div>
              </li>
            )
          })
      }
      </div>
    )
  }
}

//Access to the topics state in store
function mapStateToProps(state) {
  return {
    topics: state.topics
  };
}

//Access to the upVoteTopics and downvoteTopics in store
const mapDispatchToProps = {
  upvoteTopics,
  downvoteTopics
}

//Link to the store
export default connect(mapStateToProps, mapDispatchToProps)(TopicsList) 
