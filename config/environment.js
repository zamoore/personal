/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'personal',
    podModulePrefix: 'personal/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    authenticationRoute: 'admin.sign-in',
    routeIfAlreadyAuthenticated: 'admin.index'
  };
  ENV['ember-simple-auth-token'] = {
    identificationField: 'email',
    serverTokenEndpoint: 'https://zamoore-blog.herokuapp.com/api/auth'
  };
  ENV['ember-cli-notifications'] = {};

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-91896817-1'
    };
  }

  return ENV;
};
