'use strict';

angular.module('demoAppApp')
	.controller('StartCtrl', function ($scope,$http,$modal) {
		$scope.list = [
			{number: 'one', digit: 1 },
			{number: 'two', digit: 2 },
			{number: 'three', digit: 3}
		];
		$http.get('/api/awesomeThings').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
		console.log(awesomeThings);
		});
		$scope.open = function(name,picture){
			console.log(name);
			$scope.modalName = name;
			$scope.modalPicture = picture;
			var modalInstance = $modal.open({
				templateUrl: '../../views/partials/imageModal.html',
				controller: 'StartCtrl',
				resolve: {
					name: function(){
						return $scope.modalName;
					}
				}
			});
		};
	});
