import React from 'react';
import Reflux from 'reflux';

// Components
import Message from './components/message';
import Timer from './components/timer';
import Interval from './components/interval';
import People from './components/people';
import AudioNotification from './components/audio_notification';

// Stores
import PeopleStore from './stores/people_store';
import TimerStore from './stores/timer_store';

const App = React.createClass({
  componentWillMount() {
    PeopleStore.listen(this.onPeopleChange);
    TimerStore.listen(this.onTimerChange);
  },

  getInitialState() {
    return {
      people: PeopleStore.getPeople(),
      currentDriver: PeopleStore.getCurrentDriver(),
      currentDriverIndex: PeopleStore.getCurrentDriverIndex(),
      timer: TimerStore.getTimer()
    };
  },

  onPeopleChange() {
    this.setState({ people: PeopleStore.getPeople(),
                    currentDriver: PeopleStore.getCurrentDriver(),
                    currentDriverIndex: PeopleStore.getCurrentDriverIndex()
    });
  },

  onTimerChange() {
    this.setState({ timer: TimerStore.getTimer() });
  },

  render() {
    return (
      <div>
        <h1>mob timer</h1>
        <Message timerState={this.state.timer.state} currentDriver={this.state.currentDriver} />
        <Timer msLeft={this.state.timer.msLeft} state={this.state.timer.state} />
        <Interval minutes={this.state.timer.minutes} state={this.state.timer.state} />
        <People people={this.state.people} currentDriverIndex={this.state.currentDriverIndex} />
        <a href="https://github.com/zoeesilcock/mobtimer-react" target="blank" className="github"><img src="images/github_mark.png" />github</a>
        <AudioNotification playNotification={this.state.timer.playNotification} />
      </div>
    );
  }
});

React.render(<App />, document.body);
