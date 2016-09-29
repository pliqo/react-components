// no need to explictly "unmock" since automock is disabled by default.
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow, mount, render } from 'enzyme';
import Rating from '../Rating';

it('renders without crashing (with Shallow)', () => {
  shallow(<Rating />);
});

it('renders a class named ".Rating"', () => {
  const wrapper = shallow(<Rating />);
  expect(wrapper.is('.Rating')).toBe(true);
});