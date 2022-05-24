import React from 'react';
import PeopleActions from '../actions/people_actions';
import ClassNames from 'classnames';

class Person extends React.Component {
  remove() {
    PeopleActions.remove(this.props.index);
  }

  select() {
    PeopleActions.selectDriver(this.props.index);
  }

  render() {
    var classes = ClassNames({
      active: this.props.isCurrent
    });

    return (
      <li className={classes}>
        <a href="#" className="remove" onClick={this.remove.bind(this)}>x</a>
        <span onClick={this.select.bind(this)}>{this.props.name}</span>
      </li>
    );
  }
}

Person.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Person;
