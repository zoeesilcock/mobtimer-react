import Reflux from 'reflux';
import Actions from '../actions/people_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.people = [];
  },

  onAdd(name) {
    this.people.push(name);
    this.trigger(this.people);
  },

  onRemove(index) {
    this.people.splice(index, 1);
    this.trigger(this.people);
  }
});

export default Store;
