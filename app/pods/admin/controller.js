import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  // Services
  session: inject.service()
});
