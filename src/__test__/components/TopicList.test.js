import React from 'react';
import { mount } from 'enzyme';
import topics from '../../data/topics'
import TopicsList from '../../TopicsList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    topics: topics
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <TopicsList />
    </Root>
  );
});

it('creates one LI per topics, up to a maximum of 20 topics', () => {
  expect(wrapped.find('li').length).toEqual(20);
});