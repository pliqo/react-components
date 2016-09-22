import React, { Component } from 'react';
import Rating from './Rating';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.initialUrl;
    this.pollInterval = this.props.initialPollInterval;
    // if fetching doesn't work...
    this.state = {   
      // by fetching unknown elements you'd want to leave an empty array like: data: []
      isOnOver: props.initialIsOnOver,
      qty: props.initialQty,
      rate: props.initialRate,
      tempRate: props.initialTempRate
    };
    this.changeRate = this.changeRate.bind(this);
  }

  loadRates() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => { 
        this.setState({ 
          isOnOver: data.isOnOver,
          qty: data.qty,
          rate: data.rate,
          tempRate: data.tempRate
        }); 
      })
      .catch(err => console.error(this.url, err.toString()))
  }

  componentDidMount() {
    this.loadRates();
    // load defaults only once. If you need a continuos polling, uncomment the line below
    // setInterval(() => this.loadRates(), this.pollInterval);
  }

  changeRate(action, rate) {
    let isOnOver; 
    let tempRate;

    switch(action) {
      case 'change':
        isOnOver = false;
        tempRate = rate;
        break;
      case 'show':
        isOnOver = true;
        tempRate = this.state.rate;
        break;
      case 'reset':
        isOnOver = false;
        rate = this.state.tempRate;
        break;
      default :
        return false;
    }

    this.setState({
     isOnOver,
     rate, 
     tempRate
    });
  }

  render() {
    return (
      <Rating
        changeRate={ this.changeRate } 
        isOnOver={ this.state.isOnOver }
        qty={ this.state.qty }  
        rate={ this.state.rate }
       />
    );
  }
}

App.propTypes = {
  initialUrl: React.PropTypes.string,
  initialPollInterval: React.PropTypes.number,
  initialIsOnOver: React.PropTypes.bool,
  initialQty: React.PropTypes.number,
  initialRate: React.PropTypes.number,
  initialTempRate: React.PropTypes.number
}

// Give some defaults
App.defaultProps = {
  initialUrl: "https://raw.githubusercontent.com/nickbalestra/appUno/master/initialdata.json",
  initialPollInterval: 2000,
  initialIsOnOver: false,
  initialQty: 2,
  initialRate: 1,
  initialTempRate: 0
}

export default App;