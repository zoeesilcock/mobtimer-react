import React from 'react';
import TimerControl from './timer_control';
import PeopleActions from '../actions/people_actions';
import TimerActions from '../actions/timer_actions';

class Interval extends React.Component {
  handleChange(event) {
    TimerActions.minutesChanged(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="number" className="minutes" defaultValue={this.props.minutes} onChange={this.handleChange.bind(this)} />
        <TimerControl state={this.props.state} />
      </div>
    );
  }
};

export default Interval;
