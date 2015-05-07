import React from 'react';
import Moment from 'moment';

class Timer extends React.Component {
  formatTime() {
    return Moment(this.props.msLeft).format('mm:ss');
  }

  render() {
    return (
      <div>{this.formatTime()}</div>
    );
  }
};

export default Timer;
