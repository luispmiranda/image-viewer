angular.module('starter.controllers').controller('AlbumController', function($scope, $stateParams, AlbumsService) {
	$scope.album = AlbumsService.get($stateParams.albumId);
});