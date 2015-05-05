import Reflux from 'reflux';
import Actions from '../actions/people_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.people = [];
  },

  getPeople() {
    return this.people;
  },

  onAdd(name) {
    this.people.push(name);
    this.trigger();
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
  }
});

export default Store;
