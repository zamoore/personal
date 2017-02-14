import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('index', { path: '/' }, function() {
      this.route('invalidated-tokens');
    });
    this.route('sign-in');
    this.route('create-post');
  });
  this.route('public', { path: '/' }, function() {
    this.route('about');
    this.route('contact');
    this.route('post', { path: 'posts/:post_slug' });
  });
});

export default Router;
