import React from 'react';
import Moment from 'moment';

class Timer extends React.Component {
  propTypes: {
    msLeft: React.PropTypes.number.isRequired
  }

  formatTime() {
    return Moment(this.props.msLeft).format('mm:ss');
  }

  render() {
    return (
      <div className="timer">{this.formatTime()}</div>
    );
  }
};

export default Timer;
