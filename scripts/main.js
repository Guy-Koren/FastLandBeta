/**
 * Created by tomer on 1/29/16.
 */
var app = angular.module('GuyKoren', ['ngMaterial']).config(function($mdThemingProvider) {
    // Extend the red theme with a few different colors
    //create yr own palette


});

app.controller('AppController', function ($scope, $mdDialog, $mdBottomSheet,$mdMedia) {
    $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(big) {
        $scope.bigScreen = big;
    });
});
