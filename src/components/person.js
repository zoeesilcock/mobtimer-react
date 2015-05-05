import React from 'react';
import PeopleActions from '../actions/people_actions';

class Person extends React.Component {
  handleClick() {
    PeopleActions.remove(this.props.index);
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.handleClick.bind(this)}>x</a>
        <span>{this.props.name}</span>
      </li>
    );
  }
};

export default Person;
