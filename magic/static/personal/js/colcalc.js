var app = angular.module('myApp', ['ui.slider']);
app.controller('myController', function DemoController($scope) {

	//this is single object, 8 keys, one value per key
	//this is an object literal
	$scope.items = {
		"rent": 1000,
		"groceries": 250,
		"dining":150,
		"electric":150,
		"internet":50,
		"transportation":120,
		"laundry":50,
		"insurance":150,
		"other":0,
	};

	//$scope.items.push(item1);

	//$scope.sortReverse = false;

	// Start as not visible but when button is tapped it will show as true
	$scope.visible = false;

	$scope.$watch('items', function(nval, oval) {
		console.log(nval);
	});

	$scope.lists = $scope.lists || [];

	$scope.predicate1 = '';
	$scope.predicate2 = '';
	$scope.reverse = true;

	//if null, doesn't show up on console?

	$scope.order = function(predicate) {
		// if predicate1 is not set then set it to predicate1
		// else if predicate2 is not set, then set it to predicate2

		$scope.reverse = ($scope.predicate1 === predicate) ? !$scope.reverse : false;

		//$scope.predicate = predicate;

		if ($scope.predicate1 === null || $scope.predicate1 === '')
		{
			$scope.predicate1 = predicate;
		}
		else if ($scope.predicate1 !== predicate){
			$scope.predicate2 = predicate;
		}
		else {
			$scope.predicate2 = predicate;
		}

		// $scope.predicate1 = $scope.predicate1 !== null ? $scope.predicate1 : predicate;
		// $scope.predicate2 !== null ? $scope.predicate2 : predicate2;
	};

	$scope.resetSort = function(){
		$scope.predicate1 = '';
		$scope.predicate2 = '';
		$scope.reverse = true;
	};

	// $scope.setSort = function() {
  //   $scope.sortReverse = !$scope.sortReverse;
	// };

	// function to return the total of the items
	$scope.total = function() {
		var total = 0;
		// angularjs has its own forloop function
		// use (value, key) for dealing with object literals in a forloop.
		angular.forEach($scope.items, function(value, key){
			total += value;
		});
		return total;
	};


	// $scope.random = function(){
  //   return 0.5 - Math.random();
	// };
	//

	$scope.randomizeExpense = function(){
		//randomize value of each objects
		$scope.items.rent = Math.random(3)*4000;
		$scope.items.groceries = Math.random(3)*1000;
		$scope.items.dining = Math.random(3)*2000;
		$scope.items.electric = Math.random(3)*1000;
		$scope.items.internet = Math.random(3)*1000;
		$scope.items.transportation = Math.random(3)*500;
		$scope.items.laundry = Math.random(3)*100;
		$scope.items.insurance = Math.random(3)*500;
		$scope.items.other = Math.random(3)*5000;

		var expenses = angular.copy($scope.items);
		console.log(JSON.stringify(expenses));

		var total = 0;
		angular.forEach(expenses, function(value, key){
			total += value;
		});

		// timestamp
		expenses.timestamp = Date.now();

		// calculate total before pushing it into the list
		expenses.saveTotal = total;

		//add expenses objects to lists
		$scope.lists.push(expenses);
	};

	$scope.saveExpense = function(){
		//deep copy the object literal
		var expenses = angular.copy($scope.items);

		console.log(JSON.stringify(expenses));

		var total = 0;
		angular.forEach(expenses, function(value, key){
			total += value;
		});

		// timestamp
		expenses.timestamp = Date.now();

		// calculate total before pushing it into the list
		expenses.saveTotal = total;

		//add expenses objects to lists
		$scope.lists.push(expenses);
	}
});

// use {$ angular template tag $}
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
	$interpolateProvider.endSymbol('$}');
});

//comments graveyard

//this is multiple objects, two keys, one value per key
//this is an array
/*$scope.items =
	[{name:"rent",cost:1000},
	{name:"groceries",cost:250},
	{name:"dining",cost:150},
	{name:"electric",cost:150},
	{name:"internet",cost:50},
	{name:"transportation",cost:120},
	{name:"laundry",cost:50},
	{name:"insurance",cost:150}];*/

/* this is equivalient to the following:
if($scope.lists === undefined) {
	$scope.lists = [];
}

OR

if(!$scope.lists){
	$scope.lists = [];
}
something like that. */

// // add expense item
// $scope.addExpense = function(){
// 	// adds the expense item after add button is clicked
// 	if($scope.newName && $scope.newCost) {
// 		$scope.items.push({
// 			name: $scope.newName,
// 			cost: parseFloat($scope.newCost) ? parseFloat($scope.newCost) : 0
// 		});
//
// 		// resets the new expense item entry
// 		$scope.newName = "";
// 		$scope.newCost = 0;
// 	}
// 	$scope.addingrow = false;
// };
//
// // remove expense item
// $scope.removeExpense = function(index){
// 	$scope.items.splice(index, 1);
// };
