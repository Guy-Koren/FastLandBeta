/**
 * Created by tomer on 12/9/15.
 */

var app = angular.module('GuyLanding', ['ngMaterial']);

app.controller('MainController', function ($mdSidenav, $scope, $mdToast) {
    $scope.views = [
        {
            name: "אודות",
            view: "views/about"
        },
        {
            name: "סניפים",
            view: "views/branches"
        },
        {
            name: "התוכנית",
            view: "views/plan"
        },
        {
            name: "כלים ומבחנים",
            view: "views/testsandtools"
        },
        {
            name: "כתבות וטיפים",
            view: "views/articles"
        },
        {
            name: "חידות",
            view: "views/fun"
        },
        {
            name: "צור קשר",
            view: "views/contact"
        }
    ];
    $scope.views.reverse();
    $scope.tabs = jQuery.extend({}, $scope.views);
    $scope.views.reverse();
    $scope.showSimpleToast = function (text) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(text)
                .hideDelay(3000)
        );
    };
});