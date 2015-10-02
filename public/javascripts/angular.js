(function(angular) {
    'use strict';
    var app = angular.module('app', []);
    app.controller('AlertDemoCtrl', ['$scope', function ($scope) {
        $scope.alerts = [
            { type: 'alert-danger', msg: 'and try submitting again.', strong: 'Oh snap! ',  col: '3' },
            { type: 'alert-success', msg: 'You successfully read ', href2: 'this important alert message. ', strong: 'Well done! ', col: '4' },
            { type: 'alert-warning', href1: 'This alert needs your attention, ', msg: 'but it is not super important.', strong: 'Warning! ', col: '4' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({type: 'alert-info', msg: 'Another alert!', strong: 'Heads up! ', col: '5'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }]);
    app.controller('footerController', ['$scope', function ($scope) {
        $scope.liElements = [
            {txt: 'Explainer Video'},
            {txt: 'Infographics Videos'},
            {txt: 'Whiteboard Videos'},
            {txt: 'How-To Videos'},
            {txt: 'Videography'},
            {txt: 'Photography'},
            {txt: 'Voice-Over'}
        ];
        $scope.liAdressElements = [
            {class: 'location', txt: 'Bauernfeldstr. 8 76532 Baden-Baden'},
            {class: 'telephoneNumber', txt: '+49 176 88 1111 66'},
            {class: 'emailContact', txt: 'tmchut@yahoo.com'}
        ];
    }]);
    app.controller('usersManagement', ['$scope', function ($scope) {
        $scope.userDefault = {name: '', email: ''};
        $scope.delete = function (id) {
            console.log(id);
        };
    }]);
})(window.angular);