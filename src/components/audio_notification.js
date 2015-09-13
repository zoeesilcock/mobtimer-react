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
    var audio = React.findDOMNode(this.refs.audioTag);

    audio.load();
    audio.play();
  }

  render() {
    return (
      <audio ref="audioTag">
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
