export function initialize(applicationInstance) {
  const applicationRoute = applicationInstance.lookup('route:application');
  const session = applicationInstance.lookup('service:session');

  session.on('authenticationSucceeded', function() {
    applicationRoute.transitionTo('admin.index');
  });
  session.on('invalidationSucceeded', function() {
    applicationRoute.transitionTo('admin.sign-in');
  });
}

export default {
  initialize,
  name: 'session-events',
  after: 'ember-simple-auth'
};
