import React from 'react';
import Reflux from 'reflux';

// Components
import Message from './components/message';
import Timer from './components/timer';
import Interval from './components/interval';
import People from './components/people';

const App = React.createClass({
  mixins: [
  ],

  getInitialState() {
    return {
    };
  },

  render() {
    return (
      <div>
        <h1>Mob Timer</h1>
        <Message />
        <Timer />
        <Interval />
        <People />
      </div>
    );
  }
});

React.render(<App />, document.body);
