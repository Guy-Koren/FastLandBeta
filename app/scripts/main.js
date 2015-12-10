/**
 * Created by tomer on 12/9/15.
 */

var app = angular.module('GuyLanding', ['ngMaterial']).config(function ($mdThemingProvider) {
    // Extend the red theme with a few different colors
    var primary = $mdThemingProvider.extendPalette('indigo', {
        '500': '173042'
    });
    var accent = $mdThemingProvider.extendPalette('red', {
        '500': '87182B'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('primary', primary);
    $mdThemingProvider.definePalette('accent', accent);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('primary')
        .accentPalette('accent')
});

app.controller('MainController', function ($mdSidenav, $scope, $mdToast) {
    $scope.views = [
        {
            name: "אודות",
            id: "gray",
            view: "views/about"
        },
        {
            name: "סניפים",
            id: "pink",
            view: "views/branches"
        },
        {
            name: "התוכנית",
            id: "blue",
            view: "views/plan"
        },
        {
            name: "כלים ומבחנים",
            id: "red",
            view: "views/testsandtools"
        },
        {
            name: "כתבות וטיפים",
            id: "teal",
            view: "views/articles"
        },
        {
            name: "חידות",
            id: "yellow",
            view: "views/fun"
        },
        {
            name: "צור קשר",
            id: "green",
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
    $scope.goToByScroll = function (id) {
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
                scrollTop: $("." + id).offset().top
            },
            'slow');
    }

});