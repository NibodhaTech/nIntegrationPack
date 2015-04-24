'use strict';

angular.module('vripApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
