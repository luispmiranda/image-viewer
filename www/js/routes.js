angular.module('imageViewer').config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
	.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	// Each tab has its own nav history stack:

	.state('tab.about', {
		url: '/about',
		views: {
			'tab-about': {
				templateUrl: 'templates/about.html',
				controller: 'AboutController'
			}
		}
	})

	.state('tab.albums', {
		url: '/albums',
		views: {
			'tab-albums': {
				templateUrl: 'templates/tab-albums.html',
				controller: 'AlbumsController'
			}
		}
	})
	.state('tab.album', {
		url: '/albums/:albumId',
		views: {
			'tab-albums': {
				templateUrl: 'templates/album.html',
				controller: 'AlbumController'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/about');

});
