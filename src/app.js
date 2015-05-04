import React from 'react';
import Reflux from 'reflux';

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
        <h1>Hello World</h1>
      </div>
    );
  }
});

React.render(<App />, document.body);
