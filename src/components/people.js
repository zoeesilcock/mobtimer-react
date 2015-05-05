import React from 'react';
import Person from './person';
import PersonForm from './person_form';
import PeopleActions from '../actions/people_actions';

class People extends React.Component {
  propTypes: {
    people: React.PropTypes.array
  }

  handleClick() {
    PeopleActions.shuffle();
  }

  render() {
    var people = [];
    this.props.people.map(function(name, index) {
      people.push(<Person key={index} index={index} name={name} />);
    });

    return (
      <div>
        <h2>people</h2>
        <ul>
          {people}
        </ul>
        <button onClick={this.handleClick.bind(this)}>shuffle</button>
        <PersonForm />
      </div>
    );
  }
};

export default People;
