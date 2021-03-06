import Ember from 'ember';

export default Ember.Component.extend({
  isUserAsking: false,
  actions: {
    ask() {
      this.set('isUserAsking', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : '',
        content: this.get('content') ? this.get('content') : '',
        notes: this.get('notes') ? this.get('notes') : '',
      };
      this.set('isUserAsking', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
