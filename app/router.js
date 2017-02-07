import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('public', { path: '/' }, function() {
    this.route('about');
    this.route('contact');
    this.route('post', { path: 'posts/:post_id' })
  });
});

export default Router;
