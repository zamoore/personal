import Ember from 'ember';
import { jwt_decode } from 'ember-cli-jwt-decode';

const { Service, inject, computed } = Ember;

export default Service.extend({
  // Services
  session: inject.service(),

  user: computed('session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return jwt_decode(this.get('session.data.authenticated.token'));
    }
  })
});
