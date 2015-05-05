import React from 'react';
import Person from './person';
import PersonForm from './person_form';

class People extends React.Component {
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
        <button>shuffle</button>
        <PersonForm />
      </div>
    );
  }
};

export default People;
