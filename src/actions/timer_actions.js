import Reflux from 'reflux';

var Actions = Reflux.createActions([
  'start',
  'pause',
  'reset',
  'minutesChanged',
  'notificationPlayed'
]);

export default Actions;
