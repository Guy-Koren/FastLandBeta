/**
 * Created by tomer on 1/29/16.
 */
app.directive('bar', function () {
    return {
        templateUrl: 'directives/bar/bar.html'
    };
});
app.controller('BarController', function ($location, $scope, $mdDialog, $mdBottomSheet, $log, $rootScope) {
    $scope.scrollTo = function (id) {
        document.getElementsByClassName(id)[0].scrollIntoView();
    };
    $scope.location = $location;
    $scope.tabs = [
        {
            title: "אודות",
            id: "about"
        },
        {
            title: "סניפים",
            id: "branches"
        },
        {
            title: "צור קשר"
        },
        {
            title: "חומרי למידה",
            id: "stuff"
        },
        {
            title: "דרושים"
        },
        {
            icon: true,
            href: "main"
        },
        /*   {
         title: "השלמת בגרויות"
         },*/
        {
            title: "שיעורים פרטיים וקבוצות"
        },
        {
            title: "Junior Academy"
        },
        {
            title: "Study center"
        },
        {
            title: "תוכניות ייחודיות"
        },
        {
            title: "דברים מגניבים"
        }
    ];
    var origSize = $scope.tabs.length;
    $scope.tabs.reverse();
    $scope.tabs2 = new Array();
    var half = 100;
    for (var i = 0; true; i++) {
        if (i >= half) {
            if ($scope.tabs[half] != null) {
                $scope.tabs2.push($scope.tabs[half]);
                $scope.tabs.splice(half, 1)
                console.log(i);
            }
        }
        else {
            console.log(i)
        }
        if ($scope.tabs[i] != null) {
            if ($scope.tabs[i].icon && half == 100) {
                half = i;
                console.log("half = " + i)
                $scope.tabs.splice(i, 1)
            }
        }
        if (i == origSize) {
            break
        }
    }
    console.log($scope.tabs, $scope.tabs2);
    setTimeout(function () {
        $scope.$apply();
    }, 150);
    $scope.followClick = function (tab) {
        if (tab.href == null) {
            if(tab.id != null) $scope.scrollTo(tab.id);
        }
        else {
            $location.path(tab.href);
        }
    }
})
;
