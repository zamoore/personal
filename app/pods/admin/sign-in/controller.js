import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  // Services
  session: inject.service(),

  // Controller properties
  identification: null,
  password: null,

  // Controller actions
  actions: {
    authenticate() {
      let credentials = this.getProperties('identification', 'password');
      let notifications = this.get('notifications');

      this.get('session').authenticate('authenticator:jwt', credentials).then(() => {
        notifications.clearAll();
        notifications.success('Signed in successfully!', { autoClear: true });
      }).catch(() => {
        notifications.error('Invalid email adress or password.', { autoClear: true });
      });
    }
  }
});
