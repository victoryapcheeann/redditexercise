import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../../App';
import TopicsCreateBox from '../../TopicsCreateBox';
import TopicsList from '../../TopicsList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a topics create box', () => {
  expect(wrapped.find(TopicsCreateBox).length).toEqual(1);
});

it('shows a topics list', () => {
  expect(wrapped.find(TopicsList).length).toEqual(1);
});