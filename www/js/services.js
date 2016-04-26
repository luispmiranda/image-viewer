angular.module('imageViewer').factory('AlbumsService', [
  'DATABASE',
	function (DATABASE) {
		return {
			all: function () {
				return DATABASE.albums;
			},
			get: function (albumId) {
				return DATABASE.albums[albumId];
			}
		};
	}
]);