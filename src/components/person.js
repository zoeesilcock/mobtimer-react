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
      <li className={classes} onClick={this.select.bind(this)}>
        <a href="#" className="remove" onClick={event => {
          event.stopPropagation()
          this.remove()
        }}>x</a>
        <span>{this.props.name}</span>
      </li>
    );
  }
}

Person.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Person;
