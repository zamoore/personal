import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'https://zamoore-blog.herokuapp.com',
  namespace: 'api',
  authorizer: 'authorizer:token'
});
