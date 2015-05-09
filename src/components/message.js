import React from 'react';

class Message extends React.Component {
  propTypes: {
    state: React.PropTypes.string.isRequired
  }

  getMessageForState(state, driver) {
    var message = "Get ready for some mob programming!"

    if (driver) {
      switch(state) {
        case "idle":
          message = "Grab the keyboard " + driver + ". Don't forget to change the keyboard language.";
          break;
        case "running":
          message = "Time to write some code " + driver + "! Try not to think too much.";
          break;
        case "paused":
          message = "You deserve a break!";
          break;
      }
    }

    return message;
  }

  render() {
    var message = this.getMessageForState(this.props.timerState, this.props.currentDriver);

    return (
      <p>{message}</p>
    );
  }
};

export default Message;
