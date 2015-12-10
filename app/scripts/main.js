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
            view: "views/about"
        },
        {
            name: "התוכנית",
            view: "views/about"
        },
        {
            name: "כלים ומבחנים",
            view: "views/about"
        },
        {
            name: "השלמת בגרויות",
            view: "views/about"
        },
        {
            name: "כתבות וטיפים",
            view: "views/about"
        },
        {
            name: "חידות",
            view: "views/about"
        },
        {
            name: "צור קשר",
            view: "views/about"
        }
    ];
    $scope.views.reverse();
    $scope.showSimpleToast = function (text) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(text)
                .hideDelay(3000)
        );
    };
});