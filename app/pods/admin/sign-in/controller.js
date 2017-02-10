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

      this.get('session').authenticate('authenticator:jwt', credentials).then(() => {
        this.get('notifications').success('Signed in successfully!')
      });
    }
  }
});
