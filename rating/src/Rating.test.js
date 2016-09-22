// no need to explictly "unmock" since automock is disabled by default.
import React from 'react';
import ReactDOM from 'react-dom';
//import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import Rating from './Rating';

it('renders without crashing (with Shallow)', () => {
  shallow(<Rating />);
});

it('renders a span', () => {
  const wrapper = shallow(<Rating />);
  const aSpan = <span />;
  // expect(wrapper.contains(aSpan)).to.equal(true);
  expect(wrapper.contains(aSpan)).toEqual(true);
});