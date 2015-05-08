import React from 'react';
import Reflux from 'reflux';

// Components
import Message from './components/message';
import Timer from './components/timer';
import Interval from './components/interval';
import People from './components/people';

// Stores
import PeopleStore from './stores/people_store';
import TimerStore from './stores/timer_store';

const App = React.createClass({
  mixins: [
    Reflux.listenTo(PeopleStore, 'onPeopleChange'),
    Reflux.listenTo(TimerStore, 'onTimerChange')
  ],

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
      </div>
    );
  }
});

React.render(<App />, document.body);
