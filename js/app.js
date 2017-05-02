(function () {
	
'use strict';


angular.module ('LunchCheck', [])
.controller('LuchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];


function LunchCheckController($scope)  {
	$scope.listOfFood = "noodles  ";

	$scope.message = "";
	$scope.countFood = function () {
		var trimmedArray = [];
		var foodArray = $scope.listOfFood.split(',');
		for (var i = 0; i <  foodArray.length; i++)  {
			if (foodArray[i].trim ()  !== "")  {
				trimmedArray.push(foodArray[i].trim());
			}
		}
		if (trimmedArray.length === 0) {
			$scope.message = "Please enter food items first.";
		}
		else if (trimmedArray.length <=3)   {
			$scope.message ="Enjoy!";
		}
		else {
			$scope.message = "Too Much!!!";
		}
	}
}

}());










