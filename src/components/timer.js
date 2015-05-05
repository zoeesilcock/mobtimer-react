import React from 'react';

class Timer extends React.Component {
  render() {
    return (
      <div>{this.props.msLeft}</div>
    );
  }
};

export default Timer;
