import React from 'react';
import Person from './person';
import PersonForm from './person_form';
import PeopleActions from '../actions/people_actions';
import TimerActions from '../actions/timer_actions';

class People extends React.Component {
  propTypes: {
    people: React.PropTypes.array.isRequired,
    currentDriverIndex: React.PropTypes.number.isRequired
  }

  handleClick() {
    PeopleActions.shuffle();
  }

  handleSkip() {
    PeopleActions.nextDriver();
    TimerActions.pause();
    TimerActions.reset();
  }

  shuffleButton() {
      return <button onClick={this.handleClick.bind(this)}>Shuffle</button>;
  }

  skipButton() {
      return <button onClick={this.handleSkip.bind(this)}>Skip</button>;
  }

  render() {
    var people = [];
    var shuffleButton = '';
    var skipButton = '';

    this.props.people.map(function(name, index) {
      var isCurrent = index == this.props.currentDriverIndex;

      people.push(<Person key={index} index={index} name={name} isCurrent={isCurrent} />);
    }.bind(this));

    if (this.props.people.length > 1) {
      shuffleButton = this.shuffleButton();
      skipButton = this.skipButton();
    }

    return (
      <div>
        <h2>people</h2>
        <ul className="people">
          {people}
        </ul>
        <div className="people-buttons">
          {shuffleButton} {skipButton}
        </div>
        <PersonForm />
      </div>
    );
  }
};

export default People;
