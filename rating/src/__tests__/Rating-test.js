// no need to explictly "unmock" since automock is disabled by default.
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow, mount, render } from 'enzyme';
import Rating from '../Rating';

//jest.mock('isomorphic-fetch');

describe('<Rating />',() => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating />, div);
});

it('renders without crashing (with Shallow)', () => {
  shallow(<Rating />);
});

it('renders a class named ".Rating"', () => {
  const wrapper = shallow(<Rating />);
  expect(wrapper.is('.Rating')).toBe(true);
});

it('renders N spans as default', () => {
  const div = TestUtils.renderIntoDocument(
    <Rating />
  );
  const divNode = ReactDOM.findDOMNode(div);
  //console.log(TestUtils.isElementOfType(<Rating />, Rating));
  //console.log(TestUtils.isDOMComponent(divNode));
  var span = TestUtils.scryRenderedDOMComponentsWithTag(div,'span');
  //console.log(span);
  expect(span.length).toBe(2);  
});

it('adds a class when clicked', () => {
  const div = TestUtils.renderIntoDocument(
    <Rating />
  );
  var span = TestUtils.scryRenderedDOMComponentsWithTag(div,'span');
  //expect(span.length).toBe(2);
  var aspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--active');
  //console.log(aspan);  
  expect(aspan.length).toBe(1); 
  TestUtils.Simulate.click(span[0]);
  var cspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--active');
  //console.log(cspan);
  expect(cspan.length).toBe(1);  
  expect(cspan.length).not.toBe(2);

  TestUtils.Simulate.click(span[1]);
  var ccspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--active');
  //console.log(ccspan);
  expect(ccspan.length).toBe(2); 
  //expect(div.changeRate).toBeCalled();
});

it('adds a class when hovered', () => {
  const div = TestUtils.renderIntoDocument(
    <Rating />
  );
  var span = TestUtils.scryRenderedDOMComponentsWithTag(div,'span');
  //expect(span.length).toBe(2);  
  var aspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--onover');
  expect(aspan.length).toBe(0); 
  TestUtils.Simulate.mouseOver(span[0]);
  var cspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--onover');
  expect(cspan.length).toBe(1);  
  TestUtils.Simulate.mouseOver(span[1]);
  var ccspan = TestUtils.scryRenderedDOMComponentsWithClass(div,'Rate--onover');
  expect(ccspan.length).toBe(2); 
});

it('returns proper response', () => {
  const div = mount(<Rating />);
  //console.log(div);
  expect(div.node.handleAction('hover', 2)).toBe(true);
  expect(div.node.handleAction('onOver', 2)).not.toBe(true);
  //console.log(wrRatinger.find('span'));
})

it('propagates correct state', () => {
  const div = mount(<Rating />);
  console.log(div.state().tempRate);
  //console.log(div.props());
  expect(div.node.handleAction('hover', 2)).toBe(true);
  //expect(div.props().rate).toBe(2);
  expect(div.state().rate).toBe(2);
  expect(div.node.handleAction('clicked', 1)).toBe(true);
  console.log(div.state().tempRate);
  expect(div.state().rate).toBe(1);
  //var span = div.find('span');
  //console.log(span.at(0));
  //console.log(div.state().rate);
  //TestUtils.Simulate.mouseOver(span.at(1));
  //expect(span.at(1).hasClass('Rate--onover')).toBe(true);
  //console.log(wrRatinger.find('span'));
})

//it('expects qty prop to be 2 (with Shallow)', () => {
  //var renderer = TestUtils.createRenderer();
  //renderer.render(<Rating />);
  //var subject = renderer.getRenderOutput();
  //expect(subject.props.qty).toBe(2); // => true
  //console.log(subject.props);
//});
});