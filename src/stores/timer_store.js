import Reflux from 'reflux';
import Moment from 'moment';
import Actions from '../actions/timer_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.data = {
      minutes: 30,
      msLeft: 0,
      end: 0,
      state: 'idle' // idle -> running -> paused
    };
  },

  getTimer() {
    return this.data;
  },

  onStart() {
    this.data.state = 'running';
    this.data.end = Moment().add(this.data.minutes, 'minutes');
    this.updateTimeLeft();
    this.trigger();
  },

  onPause() {
    this.data.state = 'paused';
    this.trigger();
  },

  onReset() {
    this.data.state = 'idle';
    this.trigger();
  },

  scheduleUpdate() {
    window.setTimeout(this.updateTimeLeft, 1000);
  },

  updateTimeLeft() {
    if (this.data.state == 'running') {
      this.data.msLeft = this.data.end.diff(Moment(), 'milliseconds');
      this.trigger();
      this.scheduleUpdate();
    }
  }
});

export default Store;
