// no need to explictly "unmock" since automock is disabled by default.
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

//jest.mock('isomorphic-fetch');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing (with Shallow)', () => {
  shallow(<App />);
});

it('expects qty prop to be 2 (with Shallow)', () => {
  var renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  var subject = renderer.getRenderOutput();
  expect(subject.props.qty).toBe(2); // => true
  //console.log(subject.props.qty);
});

it('adds a class when clicking', () => {
  const div = TestUtils.renderIntoDocument(
    <App />
  );
  const divNode = ReactDOM.findDOMNode(div);
  //console.log(TestUtils.isElementOfType(<App />, App));
  //console.log(TestUtils.isDOMComponent(divNode));
  var span = TestUtils.scryRenderedDOMComponentsWithTag(div,'span');
  //console.log(span);
  expect(span.length).toBe(2);  
  var aspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--active');
  //console.log(aspan);  
  expect(aspan.length).toBe(1); 
  TestUtils.Simulate.click(span[0]);
  var cspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--active');
  //console.log(cspan);
  expect(cspan.length).toBe(1);  
  TestUtils.Simulate.click(span[1]);
  var ccspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--active');
  //console.log(ccspan);
  expect(ccspan.length).toBe(2); 
  //expect(div.changeRate).toBeCalled();
  //var allComponentsWithType = TestUtils.scryRenderedComponentsWithType(div, 'Rate');
  //console.log(allComponentsWithType);
});

it('adds a class when hovering', () => {
  const div = TestUtils.renderIntoDocument(
    <App />
  );
  var span = TestUtils.scryRenderedDOMComponentsWithTag(div,'span');
  expect(span.length).toBe(2);  
  var aspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--onover');
  expect(aspan.length).toBe(0); 
  TestUtils.Simulate.mouseOver(span[0]);
  var cspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--onover');
  expect(cspan.length).toBe(1);  
  TestUtils.Simulate.mouseOver(span[1]);
  var ccspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--onover');
  expect(ccspan.length).toBe(2); 
});

it('when rendered the changeRate should be called', () => {
  const wrapper = mount(<App />);
  console.log(wrapper.find('span'));
})