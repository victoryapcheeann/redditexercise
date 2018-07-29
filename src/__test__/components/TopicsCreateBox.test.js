import React from 'react';
import { mount } from 'enzyme';
import TopicsCreateBox from '../../TopicsCreateBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <TopicsCreateBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and one buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new topics' }
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new topics');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});