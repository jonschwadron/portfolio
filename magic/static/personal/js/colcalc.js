var app = angular.module('myApp', ['ui.slider']);

app.controller('myController',
function DemoController($scope) {

	$scope.sortDir = false;

	// Start as not visible but when button is tapped it will show as true
	$scope.visible = false;

	$scope.$watch('items', function(nval, oval) {
		console.log(nval);
	});

	$scope.items = [];
	$scope.items.push({name:"Rent",cost:1000});
	$scope.items.push({name:"Groceries",cost:250});
	$scope.items.push({name:"Eating out",cost:150});
	$scope.items.push({name:"Electric",cost:150});
	$scope.items.push({name:"Internet",cost:50});
	$scope.items.push({name:"Transportation",cost:120});
	$scope.items.push({name:"Laundry",cost:50});
	$scope.items.push({name:"Insurance",cost:150});

	$scope.lists = $scope.lists || [];
	$scope.setSort = function() {
    $scope.sortDir = !$scope.sortDir;
	};


	// function to return the total of the items
	$scope.total = function() {
		var total = 0;
		// angularjs has its own forloop function
		angular.forEach($scope.items, function(item){
			total += item.cost;
		});
		return total;
	};

	// add expense item
	$scope.addExpense = function(){
		// adds the expense item after add button is clicked
		if($scope.newName && $scope.newCost) {
			$scope.items.push({
				name: $scope.newName,
				cost: parseFloat($scope.newCost) ? parseFloat($scope.newCost) : 0
			});

			// resets the new expense item entry
			$scope.newName = "";
			$scope.newCost = 0;
		}
		$scope.addingrow = false;
	};

	// remove expense item
	$scope.removeExpense = function(index){
		$scope.items.splice(index, 1);
	};

	$scope.saveExpense = function(){
		//var unicorn = $.extend({}, $scope.items);
		var unicorn = $.extend(true, {}, $scope.items);
		unicorn.timestamp = Date.now();
		$scope.lists.push(unicorn);
	}
});

app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
	$interpolateProvider.endSymbol('$}');
});
