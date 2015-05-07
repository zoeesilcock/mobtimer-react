import React from 'react';
import PeopleActions from '../actions/people_actions';
import ClassNames from 'classnames';

class Person extends React.Component {
  handleClick() {
    PeopleActions.remove(this.props.index);
  }

  render() {
    var classes = ClassNames({
      active: this.props.isCurrent
    });

    return (
      <li className={classes}>
        <a href="#" onClick={this.handleClick.bind(this)}>x</a>
        <span>{this.props.name}</span>
      </li>
    );
  }
};

export default Person;
