// no need to explictly "unmock" since automock is disabled by default.
import React from 'react';
import ReactDOM from 'react-dom';
//import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import App, { changeRate, loadRates } from './App';

//jest.mock('isomorphic-fetch');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing (with Shallow)', () => {
  shallow(<App />);
});

it('should show the proper response', () => {
  expect(changeRate).toBeCalled();
});