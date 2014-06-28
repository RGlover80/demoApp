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
		});
		$scope.open = function(name,picture){
			$scope.modalName = name;
			$scope.modalPicture = picture;
			var modalInstance = $modal.open({
				templateUrl: '../../views/partials/imageModal.html',
				controller: 'ImageModalCtrl',
				resolve: {
					name: function(){
						return $scope.modalName;
					},
					picture: function(){
						return $scope.modalPicture;
					}
				}
			});
		};
	})
	.controller('ImageModalCtrl', function ($scope, $modalInstance, name, picture){
		$scope.name = name;
		$scope.picture = picture;
	});
