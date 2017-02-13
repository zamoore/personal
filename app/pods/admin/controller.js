import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  // Services
  session: inject.service(),
  currentUser: inject.service(),

  // Controller actions
  actions: {
    signOut() {
      let session = this.get('session');
      let token = session.get('data.authenticated.token');

      let newInvalidToken = this.get('store').createRecord('invalid-token', { token });
      newInvalidToken.save().then(() => {
        session.invalidate().then(() => {
          this.get('notifications').success('Signed out successfully.', { autoClear: true });
        });
      }).catch(() => {
        this.get('notifications').success('Unable to sign out. Check your connection and try again.', { autoClear: true });
      });
    }
  }
});
