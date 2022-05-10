import React from 'react';
import TimerActions from '../actions/timer_actions';

class AudioNotification extends React.Component {
  componentWillReceiveProps(props) {
    if (props.playNotification) {
      this.play();
      TimerActions.notificationPlayed();
    }
  }

  play() {
    this.audioTag.load();
    this.audioTag.play();
  }

  render() {
    return (
      <audio ref={(element) => this.audioTag = element}>
        <source src="audio/music_box.mp3" type="audio/mpeg" />
        <source src="audio/music_box.wav" type="audio/wav" />
      </audio>
    );
  }
};

AudioNotification.propTypes = {
  playNotification: React.PropTypes.bool.isRequired
};

export default AudioNotification;
