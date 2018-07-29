import * as actions from '../../actions';

describe('actions', () => {
  it('should create an action to save topics', () => {
    const topicsTitle = 'New topics'
    const expectedAction = {
      type: 'SAVE_TOPICS',
      payload: topicsTitle
    }
    expect(actions.saveTopics(topicsTitle)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to upvote topics', () => {
    const topicsID = 5
    const expectedAction = {
      type: 'UPVOTE_TOPICS',
      payload: topicsID
    }
    expect(actions.upvoteTopics(topicsID)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to downvote topics', () => {
    const topicsID = 5
    const expectedAction = {
      type: 'DOWNVOTE_TOPICS',
      payload: topicsID
    }
    expect(actions.downvoteTopics(topicsID)).toEqual(expectedAction)
  })
})
