import React from 'react';
import Person from './person';
import PersonForm from './person_form';
import PeopleActions from '../actions/people_actions';

class People extends React.Component {
  propTypes: {
    people: React.PropTypes.array.isRequired,
    currentDriverIndex: React.PropTypes.number.isRequired
  }

  handleClick() {
    PeopleActions.shuffle();
  }

  render() {
    var people = [];
    this.props.people.map(function(name, index) {
      var isCurrent = index == this.props.currentDriverIndex;

      people.push(<Person key={index} index={index} name={name} isCurrent={isCurrent} />);
    }.bind(this));

    return (
      <div>
        <h2>people</h2>
        <ul className="people">
          {people}
        </ul>
        <button onClick={this.handleClick.bind(this)}>Shuffle</button>
        <PersonForm />
      </div>
    );
  }
};

export default People;
