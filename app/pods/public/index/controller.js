import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['page', 'perPage'],
  page: 1,
  perPage: 10,

  actions: {
    changePage(page) {
      this.set('page', page);
    }
  }
});
