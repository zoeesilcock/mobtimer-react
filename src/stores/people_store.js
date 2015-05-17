import Reflux from 'reflux';
import Actions from '../actions/people_actions';
var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.people = this.loadPeople();
    this.currentDriverIndex = this.loadCurrentDriver();
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

  // Actions

  onAdd(name) {
    if (name.length > 0) {
      this.people.push(name);
      this.commitPeople();
      this.trigger();
    }
  },

  onRemove(index) {
    this.people.splice(index, 1);
    this.commitPeople();
    this.trigger();
  },

  onShuffle() {
    var previousPeople = this.people.toString();

    while (this.people.toString() == previousPeople) {
      this.people.sort(function(a, b) {
        return 0.5 - Math.random();
      });
    }

    this.commitPeople();
    this.trigger();
  },

  onNextDriver() {
    this.currentDriverIndex += 1;
    if (this.currentDriverIndex >= this.people.length) {
      this.currentDriverIndex = 0;
    }
    this.commitCurrentDriver();
    this.trigger();
  },

  // Internal
  loadPeople() {
    var people = JSON.parse(Storage.getItem('people'));
    return people == null ? [] : people;
  },

  commitPeople() {
    Storage.setItem('people', JSON.stringify(this.people));
  },

  loadCurrentDriver() {
    var index = Storage.getItem('currentDriverIndex');
    return index == null ? 0 : index;
  },

  commitCurrentDriver() {
    Storage.setItem('currentDriverIndex', this.currentDriverIndex);
  }
});

export default Store;
