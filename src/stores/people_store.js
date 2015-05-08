import Reflux from 'reflux';
import Actions from '../actions/people_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.people = [];
    this.currentDriverIndex = 0;
  },

  getPeople() {
    return this.people;
  },

  getCurrentDriver() {
    return this.people[this.currentDriverIndex];
  },

  getCurrentDriverIndex() {
    return this.currentDriverIndex;
  },

  onAdd(name) {
    if (name.length > 0) {
      this.people.push(name);
      this.trigger();
    }
  },

  onRemove(index) {
    this.people.splice(index, 1);
    this.trigger();
  },

  onShuffle() {
    this.people.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    this.trigger();
  },

  onNextDriver() {
    this.currentDriverIndex += 1;
    if (this.currentDriverIndex >= this.people.length) {
      this.currentDriverIndex = 0;
    }
    this.trigger();
  }
});

export default Store;
