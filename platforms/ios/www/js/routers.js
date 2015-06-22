angular.module('Cameracadabra', [])
    .config(function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: TestCtrl,
                templateUrl: 'partials/main.html'
            })
            .when('/view', {
                controller: ViewCtrl,
                templateUrl: 'partials/view.html'
            });
    });
