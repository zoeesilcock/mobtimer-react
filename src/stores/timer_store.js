import Reflux from 'reflux';
import Moment from 'moment';
import Actions from '../actions/timer_actions';
import PeopleActions from '../actions/people_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.data = {
      minutes: 0.1,
      msLeft: 0,
      end: 0,
      state: 'idle' // idle -> running -> paused
    };
  },

  getTimer() {
    return this.data;
  },

  // Actions

  onStart() {
    if (this.data.state == 'idle') {
      this.data.end = Moment().add(this.data.minutes, 'minutes');
    } else {
      this.data.end = Moment().add(this.data.msLeft, 'milliseconds');
    }

    this.data.state = 'running';
    this.updateTimeLeft();
    this.trigger();
  },

  onPause() {
    this.data.state = 'paused';
    this.stopSchedule();
    this.trigger();
  },

  onReset() {
    this.data.state = 'idle';
    this.data.end = Moment().add(this.data.minutes, 'minutes');
    this.updateTimeLeft();
    this.trigger();
  },

  // Internal

  scheduleUpdate() {
    this.timeout = window.setTimeout(this.updateTimeLeft, 1000);
  },

  stopSchedule() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  },

  updateTimeLeft() {
    this.data.msLeft = this.data.end.diff(Moment(), 'milliseconds');
    this.trigger();

    if (this.data.msLeft <= 0) {
      this.timerEnded();
    }

    if (this.data.state == 'running') {
      this.scheduleUpdate();
    }
  },

  timerEnded() {
    this.onReset();
    PeopleActions.nextDriver();
  }
});

export default Store;
