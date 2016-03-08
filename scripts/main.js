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
    $scope.bagrut_extra = false;
    $scope.toggleBagrutExtra = function () {
        $scope.bagrut_extra = !$scope.bagrut_extra
    };
    $scope.toggleAboutExtra = function () {
        console.log("click")
        $scope.extra_about = !$scope.extra_about;
    };
    $scope.braunches = [
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
            text: "חולון",
            title: true
        },
        {
            text: "בית ספר הישגים: חזית חמש 2"
        },
        {
            text: "בית ספר הישגים: ששת הימים 23"
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
            text: "הכנה לבגרויות/מרתונים",
            icon: "document"
        }
    ];

    $scope.stuff = [
        /*  {
         grade: "ז",
         material: [
         {
         title: "משוואות – כיתה ז' מבחן מפמר לכיתה ז' תשעב – מופת – טור א",
         link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%A9%D7%95%D7%95%D7%90%D7%95%D7%AA-%D7%9B%D7%99%D7%AA%D7%94-%D7%96.pdf"
         }
         ]
         },*/
        {
            grade: "כיתה ח",
            material: [
                {
                    title: "מבחן כיתה ח' נחלה 4.12.14",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%91%D7%97%D7%9F-%D7%9B%D7%99%D7%AA%D7%94-%D7%97-%D7%A0%D7%97%D7%9C%D7%94-4.12.14.pdf"
                },
                {
                    title: "פונקציה קווית – תרגילים",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%94-%D7%A7%D7%95%D7%95%D7%99%D7%AA-%D7%AA%D7%A8%D7%92%D7%99%D7%9C%D7%99%D7%9D2.pdf"
                },
                {
                    title: "פונקציה קווית – מתקדם",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%94-%D7%A7%D7%95%D7%95%D7%99%D7%AA-%D7%9E%D7%AA%D7%A7%D7%93%D7%9D1.pdf"
                },
                {
                    title: "חפיפת משולשים + קווים מקבילים – כיתה ח'",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%97%D7%A4%D7%99%D7%A4%D7%AA-%D7%9E%D7%A9%D7%95%D7%9C%D7%A9%D7%99%D7%9D-+-%D7%A7%D7%95%D7%95%D7%99%D7%9D-%D7%9E%D7%A7%D7%91%D7%99%D7%9C%D7%99%D7%9D-%D7%9B%D7%99%D7%AA%D7%94-%D7%97.pdf"
                },
                {
                    title: "חפיפת משולשים וקטעים מיוחדים במשולש – כיתה ח",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%97%D7%A4%D7%99%D7%A4%D7%AA-%D7%9E%D7%A9%D7%95%D7%9C%D7%A9%D7%99%D7%A4-%D7%95%D7%A7%D7%98%D7%A2%D7%99%D7%9D-%D7%9E%D7%99%D7%95%D7%97%D7%93%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%95%D7%9C%D7%A9-%D7%9B%D7%99%D7%AA%D7%94-%D7%97.pdf"
                },
                {
                    title: "משולש שווה שוקים – כיתה ח'",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%A9%D7%95%D7%9C%D7%A9-%D7%A9%D7%95%D7%95%D7%94-%D7%A9%D7%95%D7%A7%D7%99%D7%9D-%D7%9B%D7%99%D7%AA%D7%94-%D7%97.pdf"
                }
            ]
        },
        {
            grade: "כיתה ט",
            material: [
                {
                    title: "חזקות – צימצום שברים",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%97%D7%96%D7%A7%D7%95%D7%AA-%D7%A6%D7%99%D7%9E%D7%A6%D7%95%D7%9D-%D7%A9%D7%91%D7%A8%D7%99%D7%9D.pdf"
                },
                {
                    title: "פירוק לגורמים",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%97%D7%96%D7%A7%D7%95%D7%AA-%D7%A6%D7%99%D7%9E%D7%A6%D7%95%D7%9D-%D7%A9%D7%91%D7%A8%D7%99%D7%9D.pdf"
                },
                {
                    title: "צימצום שברים אלגברים",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%A6%D7%99%D7%9E%D7%A6%D7%95%D7%9D-%D7%A9%D7%91%D7%A8%D7%99%D7%9D-%D7%90%D7%9C%D7%92%D7%91%D7%A8%D7%99%D7%9D3.pdf"
                },
                {
                    title: "פרבולה – תרגילים",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%A4%D7%A8%D7%91%D7%95%D7%9C%D7%94-%D7%AA%D7%A8%D7%92%D7%99%D7%9C%D7%99%D7%9D.pdf"
                },
                {
                    title: "תרגילי פרבולה – כיתה ט' – רמה קושי גבוה",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%AA%D7%A8%D7%92%D7%99%D7%9C%D7%99-%D7%A4%D7%A8%D7%91%D7%95%D7%9C%D7%94-%D7%9B%D7%99%D7%AA%D7%94-%D7%98-%D7%A8%D7%9E%D7%94-%D7%A7%D7%95%D7%A9%D7%99-%D7%92%D7%91%D7%95%D7%94-%D7%92%D7%99%D7%90-%D7%A7%D7%95%D7%A8%D7%9F1.pdf"
                },
                {
                    title: "פרבולה – מעבר הצגות",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%A4%D7%A8%D7%91%D7%95%D7%9C%D7%94-%D7%9E%D7%A2%D7%91%D7%A8-%D7%94%D7%A6%D7%92%D7%95%D7%AA1.pdf"
                }
            ]
        },
        {
            grade: "כיתה י",
            material: [
                {
                    title: "טריגו וגיאומטריה",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%98%D7%A8%D7%99%D7%92%D7%95-%D7%95%D7%92%D7%99%D7%90%D7%95%D7%9E%D7%98%D7%A8%D7%99%D7%94.pdf"
                },
                {
                    title: "חשבון דיפרנציאלי – הנגזרת של הפונקציה – גיא קורן",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%97%D7%A9%D7%91%D7%95%D7%9F-%D7%93%D7%99%D7%A4%D7%A8%D7%A0%D7%A6%D7%99%D7%90%D7%9C%D7%99-%D7%94%D7%A0%D7%92%D7%96%D7%A8%D7%AA-%D7%A9%D7%9C-%D7%94%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%94-%D7%92%D7%99%D7%90-%D7%A7%D7%95%D7%A8%D7%9F.pdf"
                },
                {
                    title: "סיכום שיעור גיאומטריה – מתמטיקה מוגבר",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%A1%D7%99%D7%9B%D7%95%D7%9D-%D7%A9%D7%99%D7%A2%D7%95%D7%A8-%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94-%D7%9E%D7%95%D7%92%D7%91%D7%A8.pdf"
                }
            ]
        },
        {
            grade: "3 יחידות",
            material: [
                {
                    title: "טריגונומטריה – תרגילי בסיס",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%98%D7%A8%D7%99%D7%92%D7%95%D7%A0%D7%95%D7%9E%D7%98%D7%A8%D7%99%D7%94-%D7%AA%D7%A8%D7%92%D7%99%D7%9C%D7%99-%D7%91%D7%A1%D7%99%D7%A1.pdf"
                },
                {
                    title: "מבחן מס 1 801",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%91%D7%97%D7%9F-%D7%9E%D7%A1-1-801.pdf"
                },
                {
                    title: "מבחן לדוגמא 1 802",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%91%D7%97%D7%9F-%D7%9C%D7%93%D7%95%D7%92%D7%9E%D7%90-1-8021.pdf"
                },
                {
                    title: "ח' דיפרנצאלי – פונקציית שורש 803",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%97-%D7%93%D7%99%D7%A4%D7%A8%D7%A0%D7%A6%D7%90%D7%9C%D7%99-%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%99%D7%AA-%D7%A9%D7%95%D7%A8%D7%A9-803.pdf"
                },
                {
                    title: " תרגילי בגרות 803",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%AA%D7%A8%D7%92%D7%99%D7%9C%D7%99-%D7%91%D7%92%D7%A8%D7%95%D7%AA-803.pdf"
                },
                {
                    title: "דף נוסחאות במתמטיקה 3 יח'",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%93%D7%A3-%D7%A0%D7%95%D7%A1%D7%97%D7%90%D7%95%D7%AA-%D7%91%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94-3-%D7%99%D7%971.pdf"
                }

            ]
        },
        {
            grade: "4 יחידות",
            material: [
                {
                    title: "משפטי מעגל",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%A9%D7%A4%D7%98%D7%99-%D7%9E%D7%A2%D7%92%D7%9C.pdf"
                },
                {
                    title: "מבחן 804",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%91%D7%97%D7%9F-%D7%9E%D7%A1-1-26.11.2014.docx"
                },
                {
                    title: "מבחן 805",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%91%D7%97%D7%9F-%D7%9E%D7%A1-2-805-%D7%A0%D7%97%D7%9C%D7%94-21.10.20141.pdf"
                }
            ]
        },
        {
            grade: "5 יחידות",
            material: [
                {
                    title: "דף חזרה למבחן 806 נחלה 13קיץ 2012 ב 35806",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%93%D7%A3-%D7%97%D7%96%D7%A8%D7%94-%D7%9C%D7%9E%D7%91%D7%97%D7%9F-806-%D7%A0%D7%97%D7%9C%D7%94-13.pdf"
                },
                {
                    title: "מבחן 806 דוגמא",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%A7%D7%99%D7%A5-2012-35806.pdf"
                },
                {
                    title: "משפטים בגאומטריה",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%9E%D7%A9%D7%A4%D7%98%D7%99%D7%9D-%D7%91%D7%92%D7%90%D7%95%D7%9E%D7%98%D7%A8%D7%99%D7%94.pdf"
                },
                {
                    title: "Trigonometry formulas",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/Trigonometry-formulas.pdf"
                },
                {
                    title: "דף נוסחאות 5 יחידות",
                    link: "http://korenguy.com/wp-content/uploads/2013/03/%D7%93%D7%A3-%D7%A0%D7%95%D7%A1%D7%97%D7%90%D7%95%D7%AA-5-%D7%99%D7%97%D7%99%D7%93%D7%95%D7%AA.pdf"
                }
            ]
        }
    ];


    $scope.showAdvanced = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
                templateUrl: 'views/dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });


        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

    };
    $scope.showAdvanced(null);
    setTimeout(function () {
        $mdDialog.cancel();
    }, 4000)

    $scope.showListBottomSheet = function () {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'views/bottom-sheet-list-template.html'
        }).then(function (clickedItem) {
            $scope.alert = clickedItem['name'] + ' clicked!';
        });
    };


});
