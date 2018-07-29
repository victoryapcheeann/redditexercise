export const SAVE_TOPICS = 'save_topics';

export function saveTopics(topics) {
  return {
    type: SAVE_TOPICS,
    payload: topics
  };
}