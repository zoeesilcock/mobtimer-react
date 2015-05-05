import React from 'react';
import Reflux from 'reflux';

// Components
import Message from './components/message';
import Timer from './components/timer';
import Interval from './components/interval';
import People from './components/people';

// Stores
import PeopleStore from './stores/people_store';

const App = React.createClass({
  mixins: [
    Reflux.listenTo(PeopleStore, 'onPeopleChange')
  ],

  getInitialState() {
    return {
      people: PeopleStore.getPeople()
    };
  },

  onPeopleChange() {
    this.setState({ people: PeopleStore.getPeople() });
  },

  render() {
    return (
      <div>
        <h1>Mob Timer</h1>
        <Message />
        <Timer />
        <Interval />
        <People people={this.state.people} />
      </div>
    );
  }
});

React.render(<App />, document.body);
