'use strict';

angular.module('demoAppApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
