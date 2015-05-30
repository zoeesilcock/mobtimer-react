import Reflux from 'reflux';
import Moment from 'moment';
import Actions from '../actions/timer_actions';
import PeopleActions from '../actions/people_actions';
var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.data = {
      minutes: this.loadMinutes(),
      msLeft: 0,
      end: 0,
      playNotification: false,
      state: 'idle' // idle -> running -> paused
    };

    this.onReset();
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
    this.data.msLeft = this.data.minutes * 60 * 1000;
    this.trigger();
  },

  onMinutesChanged(minutes) {
    this.data.minutes = minutes;
    this.commitMinutes();
    this.trigger();
  },

  onNotificationPlayed() {
    this.data.playNotification = false;
    this.trigger();
  },

  // Internal

  scheduleUpdate() {
    this.timeout = window.setTimeout(this.updateTimeLeft, 500);
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
    this.data.playNotification = true;
    this.onReset();
    PeopleActions.nextDriver();
  },

  loadMinutes() {
    var minutes = Storage.getItem('minutes');
    return minutes != null ? minutes : 30;
  },

  commitMinutes() {
    Storage.setItem('minutes', this.data.minutes);
  }
});

export default Store;
