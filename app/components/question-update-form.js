import Ember from 'ember';

export default Ember.Component.extend({
  userIsUpdating: false,
  actions: {
    edit() {
      this.set('userIsUpdating', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('userIsUpdating', false);
      debugger;
      this.sendAction('updateQuestion', question, params);
    }
  }
});
