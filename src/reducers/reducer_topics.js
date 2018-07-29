import topics from '../data/topics'
import { SAVE_TOPICS } from '../actions';
import _ from 'lodash';

export default function(state = topics, action) {
  let newID = _.maxBy(state, 'id').id + 1;   
  switch (action.type) {
    case SAVE_TOPICS:
      return [
        ...state, 
        { "id": newID,
          "topicTitle": action.payload.topics,
          "upvote": 0,
          "downvote": 0,
          "totalVote": 0 }];
    default: 
      return state;
  }
}