angular.module('imageViewer').controller('AlbumsController', function ($scope, AlbumsService) {
	$scope.albums = AlbumsService.all();
	$scope.remove = function (album) {
		AlbumsService.remove(album);
	};
})
