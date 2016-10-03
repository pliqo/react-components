// no need to explictly "unmock" since automock is disabled by default.
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow, mount, render } from 'enzyme';
import Rating from '../Rating';

//jest.mock('isomorphic-fetch');

describe('<Rating />',() => {
  it('renders without crashing', () => {
    // pure Jest
    const div = document.createElement('div');
    ReactDOM.render(<Rating />, div);
  });

  it('renders without crashing (with Shallow)', () => {
    // with enzyme
    shallow(<Rating />);
  });

  it('renders an element with a class named ".Rating"', () => {
    // with enzyme
    const wrapper = shallow(<Rating />);
    expect(wrapper.is('.Rating')).toBe(true);
  });

  it('renders N spans as default', () => {
    // with TestUtils
    const wrapper = TestUtils.renderIntoDocument(<Rating />);
    const wrapperNode = ReactDOM.findDOMNode(wrapper);
    var el = TestUtils.scryRenderedDOMComponentsWithTag(wrapper,'span');
    expect(el.length).toBe(2);  
  });

  it('adds a class when clicked', () => {
    // with TestUtils
    const wrapper = TestUtils.renderIntoDocument(<Rating />);
    var el = TestUtils.scryRenderedDOMComponentsWithTag(wrapper,'span');
    var el_active = TestUtils.scryRenderedDOMComponentsWithClass(wrapper,'Rate--active');
    expect(el_active.length).toBe(1); 
    TestUtils.Simulate.click(el[0]);
    var el_active = TestUtils.scryRenderedDOMComponentsWithClass(wrapper,'Rate--active');
    expect(el_active.length).toBe(1);  
    expect(el_active.length).not.toBe(2);
    TestUtils.Simulate.click(el[1]);
    var el_active = TestUtils.scryRenderedDOMComponentsWithClass(wrapper,'Rate--active');
    expect(el_active.length).toBe(2);
  });

  it('adds a class when hovered', () => {
    // with TestUtils
    const wrapper = TestUtils.renderIntoDocument(<Rating />);
    var el = TestUtils.scryRenderedDOMComponentsWithTag(wrapper,'span');
    var el_hover = TestUtils.scryRenderedDOMComponentsWithClass(wrapper,'Rate--onover');
    expect(el_hover.length).toBe(0); 
    TestUtils.Simulate.mouseOver(el[0]);
    var el_hover = TestUtils.scryRenderedDOMComponentsWithClass(wrapper,'Rate--onover');
    expect(el_hover.length).toBe(1);  
    TestUtils.Simulate.mouseOver(el[1]);
    var el_hover = TestUtils.scryRenderedDOMComponentsWithClass(wrapper,'Rate--onover');
    expect(el_hover.length).toBe(2); 
  });

  it('returns proper response', () => {
    // with enzyme
    const wrapper = mount(<Rating />);
    expect(wrapper.node.handleAction('hover', 2)).toBe(true);
    expect(wrapper.node.handleAction('onOver', 2)).not.toBe(true);
    //console.log(wrapper.find('span'));
  })

  it('propagates correct state', () => {
    // with enzyme
    const wrapper = mount(<Rating />);
    expect(wrapper.node.handleAction('hover', 2)).toBe(true);
    expect(wrapper.state().rate).toBe(2);
    expect(wrapper.node.handleAction('clicked', 1)).toBe(true);
    expect(wrapper.state().rate).toBe(1);
    //expect(wrapper.props().rate).toBe(2);
  })
});