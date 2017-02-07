import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    }
  },
  model(params) {
    let { page: number, perPage: size } = params;

    return this.get('store').query('post', {
      page: { number, size }
    });
  }
});
