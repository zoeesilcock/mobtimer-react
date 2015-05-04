import React from 'react';
import TimerControl from './timer_control';

class Interval extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="30" />
        <TimerControl />
      </div>
    );
  }
};

export default Interval;
