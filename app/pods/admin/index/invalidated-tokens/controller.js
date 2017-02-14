import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  // Services
  ajax: inject.service(),

  actions: {
    deleteExpiredInvalidTokens() {
      this.get('ajax').request('https://zamoore-blog.herokuapp.com/api/invalid-tokens/expired', {
        method: 'DELETE'
      }).then(() => {
        this.get('notifications').success('Successfully deleted all expired tokens.');
      });
    }
  }
});
