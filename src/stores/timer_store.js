import Reflux from 'reflux';
import Actions from '../actions/timer_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.data = {
      minutes: 30,
      msLeft: 0,
      state: 'idle' // idle -> running -> paused
    };
  },

  getTimer() {
    return this.data;
  },

  onStart() {
    this.data.msLeft = this.data.minutes * 1000;
    this.data.state = 'running';
    this.trigger();
  },

  onPause() {
    this.data.state = 'paused';
    this.trigger();
  },

  onReset() {
    this.data.state = 'idle';
    this.trigger();
  }
});

export default Store;
