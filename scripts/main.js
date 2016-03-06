/**
 * Created by tomer on 1/29/16.
 */
var app = angular.module('GuyKoren', ['ngMaterial']).config(function ($mdThemingProvider) {
    // Extend the red theme with a few different colors
    //create yr own palette

});

app.controller('AppController', function ($scope, $mdDialog, $mdBottomSheet, $mdMedia) {
    $scope.$watch(function () {
        return $mdMedia('gt-sm');
    }, function (big) {
        $scope.bigScreen = big;
    });
    $scope.extra_about = false;
    $scope.toggleAboutExtra = function () {
        console.log("click")
        $scope.extra_about = !$scope.extra_about;
    };
    $scope.braunches = [
        {
            text: "ראשון לציון",
            title: true

        },
        {
            text: "מרכז כרמים: היקב 13"
        },
        {
            text: "מרכז הנחלה: העצמאות 45"
        },
        {
            text: "מרכז התדר: הרצל 136"
        },
        {
            text: "תל אביב",
            title: true
        },
        {
            text: "סניף המשתלה אלי תבין 8"
        },
        {
            text: "עירוני יד - בקרוב"
        },
        {
            text: "חולון",
            title: true
        },
        {
            text: "בית ספר הישגים: חזית חמש 2"
        },
        {
            text: "בית ספר הישגים: מלחמת ששת הימים 23"
        }
    ];
    $scope.books = [1, 2, 3, 4, 5, 8, 9, 10];

    $scope.plans = [
        {
            text: "סדרת לדעת לילדים סקרנים",
            icon: "science"
        },
        {
            text: "Junior Academy",
            icon: "group"
        },
        {
            text: "שיעורים פרטיים ובקבוצות קטנות",
            icon: "people-1"
        },
        {
            text: "קורס השלמת פערים",
            icon: "book"
        },
        {
            text: "קורס בנות מנהיגות",
            icon: "social"
        },
        {
            text: "קורס הכנה לחטיבת הביניים",
            icon: "people"
        }
    ];
    $scope.plans2 = [
        {
            text: "שיעורים פרטיים",
            icon: "oneonone"
        },
        {
            text: "שיעורים בקבוצות",
            icon: "business"
        },
        {
            text: "הכנה לבגרויות",
            icon: "document"
        },
        {
            text: "מרתונים",
            icon: "man"
        }
    ]
});
