(function(){
	'use strict';

	angular.module("MsgApp",[])
	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		$scope.person = "Sir/Madam";
		$scope.buttonColor = "redButton";

		$scope.keyMessage = function() {
			return "Please confirm to initiate spline reticulation."
		};

		$scope.initiateReticulation = function () {
			$scope.buttonColor = "greenButton";
		}
	}
})();
