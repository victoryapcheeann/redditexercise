import topics from '../data/topics'
import _ from 'lodash';

export default function(state = topics, action) {  
  let newID = _.maxBy(state, 'id').id + 1; 
  let i = action.payload; 
  
  switch (action.type) {
    case 'SAVE_TOPICS':    
      return [
        ...state,
        { "id": newID,
          "topicTitle": action.payload,
          "upvote": 0,
          "downvote": 0,
          "totalVote": 0 }]; // add a new topics with zero vote  
    case 'UPVOTE_TOPICS':  
      return [
        ...state.slice(0,i), // before the one we are updating, ensure that the state remains un changed
        {...state[i], 
          upvote: state[i].upvote + 1,
          totalVote: state[i].totalVote + 1
        },
        ...state.slice(i + 1) // after the one we are updating, ensure that the state remains un changed
      ]
    case 'DOWNVOTE_TOPICS':
        return [
          ...state.slice(0,i), // before the one we are updating
          {...state[i], 
            downvote: state[i].downvote + 1,
            totalVote: state[i].totalVote - 1
          },
          ...state.slice(i + 1) // after the one we are updating
        ]
    default: 
      return state;
  }
}