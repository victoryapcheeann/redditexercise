export function saveTopics(topics) {
  return {
    type: 'SAVE_TOPICS',
    payload: topics //The content of the textarea 
  };
}

export function upvoteTopics(id) {
  return {
    type: 'UPVOTE_TOPICS',
    payload: id //The id of the topics which is upvoted
  };
}

export function downvoteTopics(id) {
  return {
    type: 'DOWNVOTE_TOPICS',
    payload: id // The id of the topics which is downvoted
  };
}