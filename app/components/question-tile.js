import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  actions: {
    showNotes() {
      this.set('areNotesShowing', true);
    },
    hideNotes() {
      this.set('areNotesShowing', false);
    }
  }
});
