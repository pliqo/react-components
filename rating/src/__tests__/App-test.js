import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

jest.mock('isomorphic-fetch');

describe('default test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
})

describe('fetch from external url', () => {
  // pit() is the async version of it()
  pit('should respond with the proper data when url is right', () => {
      fetch('http://badurl').then((data) => {
        expect(data).toEqual({ someKey: 'someValue' })
    })
  });
  pit('should throw an error when url is wrong', () => {
      fetch('http://badurl').then(() => {
        expect(true).toBeFalsy()
      }).catch((e) => {
        expect(e.message).toBe('Not found')
      })
  });
})

describe('some test', () => {
  it('should show the proper response', () => {
    expect()
  })
})