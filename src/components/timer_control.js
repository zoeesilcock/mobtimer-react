import React from 'react';
import TimerActions from '../actions/timer_actions';

class TimerControl extends React.Component {
  handleStart() {
    TimerActions.start();
  }

  handlePause() {
    TimerActions.pause();
  }

  handleReset() {
    TimerActions.reset();
  }

  playButton() {
    return <button onClick={this.handleStart.bind(this)}>Start</button>;
  }

  pauseButton() {
    return <button onClick={this.handlePause.bind(this)}>Pause</button>;
  }

  resetButton() {
    return <button onClick={this.handleReset.bind(this)}>Reset</button>;
  }

  render() {
    var mainButton = '';
    var resetButton = '';

    if (this.props.state == 'idle' || this.props.state == 'paused') {
      mainButton = this.playButton();
    } else if (this.props.state == 'running') {
      mainButton = this.pauseButton();
    }

    if (this.props.state == 'paused') {
      resetButton = this.resetButton();
    }

    return (
      <span>
        {mainButton}
        {resetButton}
      </span>
    );
  }
};

export default TimerControl;
