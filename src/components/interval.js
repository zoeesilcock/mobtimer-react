import React from 'react';
import TimerControl from './timer_control';
import PeopleActions from '../actions/people_actions';

class Interval extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.minutes} />
        <TimerControl state={this.props.state} />
      </div>
    );
  }
};

export default Interval;
