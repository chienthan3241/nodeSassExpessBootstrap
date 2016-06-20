(function(angular) {
    'use strict';
    var app = angular.module('app', []);
    app.controller('AlertDemoCtrl', ['$scope', function ($scope) {
        $scope.alerts = [
            { type: 'alert-danger', msg: 'and try submitting again.', strong: 'Oh snap! ',  col: '3' },
            { type: 'alert-success', msg: 'You successfully read ', href2: 'this important alert message. ', strong: 'Well done! ', col: '4' },
            { type: 'alert-warning', href1: 'This alert needs your attention, ', msg: 'but it is not super important.', strong: 'Warning! ', col: '4' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({type: 'alert-info', msg: 'Another alert!', strong: 'Heads up! ', col: '5'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }]);
    app.controller('footerController', ['$scope', function ($scope) {
        $scope.liElements = [
            {txt: 'Lorem ipsum'},
            {txt: 'Lorem ipsum dolor'},
            {txt: 'Lorem ipsum dolor dosis'},
            {txt: 'Lorem ipsum'},
            {txt: 'Lorem ipsum atmet'},
            {txt: 'Lorem ipsum'},
            {txt: 'Lorem ipsum'}
        ];
        $scope.liAdressElements = [
            {class: 'location', txt: 'Bauernfeldstr. 8 76532 Baden-Baden'},
            {class: 'telephoneNumber', txt: '+49 176 88 1111 66'},
            {class: 'emailContact', txt: 'tmchut@yahoo.com'}
        ];
    }]);
    app.controller('usersManagement', ['$scope', function ($scope) {
        $scope.userDefault = {name: '', email: ''};
        $scope.delete = function (id) {
            console.log(id);
        };
    }]);
    app.controller('iTunesApi', ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {
        $scope.type = 'search';
        $scope.request = 'https://itunes.apple.com/' + $scope.type + '?';
        $scope.country = 'US';
        $scope.mediaTypes = ['all', 'movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook'];
        $scope.media = '----';
        $scope.mediaEntities = {
            movie: ['movieArtist', 'movie'],
            podcast: ['podcastAuthor', 'podcast'],
            music: ['musicArtist', 'musicTrack', 'album', 'musicVideo', 'mix', 'song'],
            musicVideo: ['musicArtist', 'musicVideo'],
            audiobook: ['audiobookAuthor', 'audiobook'],
            shortFilm: ['shortFilmArtist', 'shortFilm'],
            tvShow: ['tvEpisode', 'tvSeason'],
            software: ['software', 'iPadSoftware', 'macSoftware'],
            ebook: ['ebook'],
            all: ['movie', 'album', 'allArtist', 'podcast', 'musicVideo', 'mix', 'audiobook', 'tvSeason', 'allTrack']
        };
        $scope.entities = [];
        $scope.entity = '----';
        $scope.mediaAttributes = {
            movie: ['actorTerm', 'genreIndex', 'artistTerm', 'shortFilmTerm', 'producerTerm',
                    'ratingTerm', 'directorTerm', 'releaseYearTerm', 'featureFilmTerm', 'movieArtistTerm',
                    'movieTerm', 'ratingIndex', 'descriptionTerm'],
            podcast: ['titleTerm', 'languageTerm', 'authorTerm', 'genreIndex', 'artistTerm',
                    'ratingIndex', 'keywordsTerm', 'descriptionTerm'],
            music: ['mixTerm', 'genreIndex', 'artistTerm', 'composerTerm', 'albumTerm', 'ratingIndex', 'songTerm'],
            musicVideo: ['genreIndex', 'artistTerm', 'albumTerm', 'ratingIndex', 'songTerm'],
            audiobook: ['titleTerm', 'authorTerm', 'genreIndex', 'ratingIndex'],
            shortFilm: ['genreIndex', 'artistTerm', 'shortFilmTerm', 'ratingIndex', 'descriptionTerm'],
            tvShow: ['genreIndex', 'tvEpisodeTerm', 'showTerm', 'tvSeasonTerm', 'ratingIndex', 'descriptionTerm'],
            software: ['softwareDeveloper'],
            all: ['actorTerm', 'languageTerm', 'allArtistTerm', 'tvEpisodeTerm', 'shortFilmTerm', 'directorTerm',
                'releaseYearTerm', 'titleTerm', 'featureFilmTerm', 'ratingIndex', 'keywordsTerm', 'descriptionTerm',
                'authorTerm', 'genreIndex', 'mixTerm', 'allTrackTerm', 'artistTerm', 'composerTerm', 'tvSeasonTerm',
                'producerTerm', 'ratingTerm', 'songTerm', 'movieArtistTerm', 'showTerm', 'movieTerm', 'albumTerm']
        };
        $scope.attributes = [];
        $scope.attribute = '----';
        $scope.limit = 50;
        $scope.langArray = ['en_us', 'ja_jp'];
        $scope.lang = 'en_us';
        $scope.version = '2';
        $scope.explicit = 'Yes';

        $scope.submitDisabled = true;
        $scope.submit = function() {
            $scope.code = null;
            $scope.response = null;
            $http({method: 'JSONP', url: $scope.request + '&callback=JSON_CALLBACK', cache: $templateCache}).
            then(function(response) {
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
        };
        $scope.changeMedia = function() {
            if ($scope.media == '----') {
                $scope.entities = [];
                $scope.entity = '----';
            } else {
                $scope.entities = $scope.mediaEntities[$scope.media];
                $scope.entity = '----';
                $scope.attributes = $scope.mediaAttributes[$scope.media];
                $scope.attribute = '----';
            }
        };

        $scope.change = function() {
            if ($scope.type == 'search') {
                $scope.request = 'https://itunes.apple.com/' + $scope.type + '?';
                $scope.request += ($scope.term) ? 'term=' + $scope.term : '';
                $scope.request += ($scope.country && $scope.country !== 'US') ? '&country=' + $scope.country : '';
                $scope.request += ($scope.media !== '----') ? '&media=' + $scope.media : '';
                $scope.request += ($scope.entity !== '----') ? '&entity=' + $scope.entity : '';
                $scope.request += ($scope.attribute !== '----') ? '&attribute=' + $scope.attribute : '';
                $scope.request += ($scope.limit && $scope.limit != 50) ? '&limit=' + $scope.limit : '';
                $scope.request += ($scope.lang !== 'en_us') ? '&lang=' + $scope.lang : '';
                $scope.request += ($scope.version !== '2') ? '&version=' + $scope.version : '';
                $scope.request += ($scope.explicit !== 'Yes') ? '&explicit=' + $scope.explicit : '';
                $scope.submitDisabled = !($scope.term && !isNaN($scope.limit)) ;
            } else {
                $scope.request = 'https://itunes.apple.com/' + $scope.type + '?' + (($scope.id) ? 'id=' + $scope.id : '');
                $scope.request += (($scope.upc) ? 'upc=' + $scope.upc : '');
                $scope.request += (($scope.amgArtistId) ? 'amgArtistId=' + $scope.amgArtistId : '');
                $scope.request += (($scope.amgAlbumId) ? 'amgAlbumId=' + $scope.amgAlbumId : '');
                $scope.request += (($scope.amgVideoId) ? 'amgVideoId=' + $scope.amgVideoId : '');
                $scope.request += (($scope.isbn) ? 'isbn=' + $scope.isbn : '');
                $scope.submitDisabled = !($scope.upc || $scope.id || $scope.amgArtistId || $scope.amgAlbumId || $scope.isbn || $scope.amgVideoId);
            }

        };
    }]);
})(window.angular);