var app = angular.module("suggestionBox", []);

app.controller("suggestionBoxController", function($scope) {
    $scope.message = "";
    $scope.suggest  = function() {alert("Suggestion Sent!");};
});
