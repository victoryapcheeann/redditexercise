import rootReducer from '../../reducers';
import topics from '../../data/topics'
import _ from 'lodash';
import { SAVE_TOPICS, UPVOTE_TOPICS, DOWNVOTE_TOPICS } from '../../actions';

it('handles actions of type SAVE_TOPICS', () => {
  const action = {
    type: 'SAVE_TOPICS',
    payload: 'New Topics'
  };
  
  const newState = rootReducer([], action);  
  let newID = _.maxBy(newState.topics, 'id').id; 
  
  expect(newState.topics[newID].topicTitle).toEqual('New Topics');
});

it('handles actions of type UPVOTE_TOPICS', () => {
  const action = {
    type: 'UPVOTE_TOPICS',
    payload: 5
  };
  
  console.log(topics[5])
  /*
    { id: 5,
    topicTitle: 'equaline ibuprofen',
    upvote: 4,
    downvote: 3,
    totalVote: 1 }
    
    Current upvote is 4
    Hence final upvote should be 5 after upvoting
  */
  const newState = rootReducer(topics:[], action);  
  
  expect(newState.topics[5].upvote).toEqual(5);
});

it('handles actions of type DOWNVOTE_TOPICS', () => {
  const action = {
    type: 'DOWNVOTE_TOPICS',
    payload: 6
  };
  
  console.log(topics[6])
  /*
    { id: 6,
      topicTitle: 'Ceftriaxone Sodium',
      upvote: 4,
      downvote: 1,
      totalVote: 3 }
    
    Current downvote is 1
    Hence final upvote should be 2 after upvoting
  */
  const newState = rootReducer(topics:[], action);  
  
  expect(newState.topics[6].downvote).toEqual(2);
});