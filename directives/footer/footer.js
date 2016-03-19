/**
 * Created by tomer on 1/29/16.
 */
app.directive('footer', function () {
    return {
        templateUrl: 'directives/footer/footer.html'
    };
});
app.controller('FooterController', function ($scope, $mdDialog, $mdBottomSheet, $log) {
    $scope.map = [
        {
            title: "תיכון",
            options: [
                {
                    text: "קבוצות למידה",
                    href: ""
                },
                {
                    text: "שיעורים פרטיים",
                    href: ""
                },
                {
                    text: "חומרי לימוד",
                    href: ""
                }
                ,
                {
                    text: "Fasttest",
                    href: ""
                },
                {
                    text: "מרתונים",
                    href: ""
                }
            ]
        },
        {
            title: "חטיבה",
            options: [
                {
                    text: "קבוצות למידה",
                    href: ""
                },
                {
                    text: "שיעורים פרטיים",
                    href: ""
                },
                {
                    text: "חומרי לימוד",
                    href: ""
                }
                ,
                {
                    text: "Fasttest",
                    href: ""
                },
                {
                    text: "חוגים",
                    href: ""
                }
            ]
        },
        {
            title: "יסודי",
            options: [
                {
                    text: "קבוצות למידה",
                    href: ""
                },
                {
                    text: "שיעורים פרטיים",
                    href: ""
                },
                {
                    text: "חומרי לימוד",
                    href: ""
                },
                {
                    text: "חוגים",
                    href: ""
                },
                {
                    text: "פסח סקול",
                    href: ""
                },
                {
                    text: "קיץ",
                    href: ""
                }
            ]
        },
        {
            title: "קטנטנים",
            options: [
                {
                    text: "מוזיכיף",
                    href: ""
                },
                {
                    text: "מוזיכף באנגלית",
                    href: ""
                }
            ]
        }
    ];
    $scope.map.reverse();
});
