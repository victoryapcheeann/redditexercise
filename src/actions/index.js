export function saveTopics(topics) {
  return {
    type: 'SAVE_TOPICS',
    topics
  };
}

export function upvoteTopics(id) {
  return {
    type: 'UPVOTE_TOPICS',
    id
  };
}

export function downvoteTopics(id) {
  return {
    type: 'DOWNVOTE_TOPICS',
    id
  };
}