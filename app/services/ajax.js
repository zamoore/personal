import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

const { computed, inject } = Ember;

export default AjaxService.extend({
  session: inject.service(),
  trustedHosts: ['zamoore-blog.herokuapp.com'],
  headers: computed('session.data.authenticated.token', function() {
    let token = this.get('session.data.authenticated.token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  })
});
