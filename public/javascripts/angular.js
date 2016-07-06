(function(angular) {
    'use strict';
    var app = angular.module('app', []);
    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);
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
        $scope.lookupCountry = 'US';
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
                $scope.status = null;
                $scope.data = null;
            } else {
                $scope.request = 'https://itunes.apple.com/' + $scope.type + '?' + (($scope.id) ? 'id=' + $scope.id : '');
                $scope.request += (($scope.upc) ? 'upc=' + $scope.upc : '');
                $scope.request += (($scope.amgArtistId) ? 'amgArtistId=' + $scope.amgArtistId : '');
                $scope.request += (($scope.amgAlbumId) ? 'amgAlbumId=' + $scope.amgAlbumId : '');
                $scope.request += (($scope.amgVideoId) ? 'amgVideoId=' + $scope.amgVideoId : '');
                $scope.request += (($scope.isbn) ? 'isbn=' + $scope.isbn : '');
                $scope.request += ($scope.lookupCountry && $scope.lookupCountry !== 'US') ? '&country=' + $scope.lookupCountry : '';
                $scope.submitDisabled = !($scope.upc || $scope.id || $scope.amgArtistId || $scope.amgAlbumId || $scope.isbn || $scope.amgVideoId);
                $scope.status = null;
                $scope.data = null;
            }

        };
    }]);
    app.controller('spotifyApi', ['$scope', '$http', '$templateCache', '$location', function ($scope, $http, $templateCache, $location) {
        var jsonRoot = ['tracks', 'albums', 'artists', 'playlists'];
        $scope.qtype = 'search';
        $scope.type = 'album';
        $scope.market = '';
        $scope.limit = 20;
        $scope.offset = 0;
        $scope.request = 'https://api.spotify.com/v1/search?';
        $scope.submitDisabled = true;
        $scope.multiArtist = false;
        $scope.artistAlbum = false;
        $scope.artistAlbumType = '----';
        $scope.artistMarket = '';
        $scope.artistlimit = 20;
        $scope.artistoffset = 0;
        $scope.artistTopTracks = false;
        $scope.multiAlbum = false;
        $scope.albumTracks = false;
        $scope.albumTracksMarket = '';
        $scope.multiAlbumTracksMarket = '';
        $scope.albumTrackslimit = 20;
        $scope.albumTracksOffset = 0;
        $scope.token = '';
        // parse token and reset url
        var location = $location.path().replace('/', '').split('&');
        var params = {}, temp;
        _(location).forEach (function (value) {
            temp = value.split('=');
            params[temp[0]] = temp[1];
        });

        if (_.has(params, 'access_token') && _.has(params, 'token_type')) {
            $scope.qtype = 'playlist';
            $scope.playlistsAccessToken = _.get(params, 'access_token', '');
            $location.path('');
        }
        $scope.playlistTracks = false;
        $scope.playlistTrackLimit = 100;
        $scope.playlistTracksOffset = 0;
        //reaction when user make some change on UI + built Request form
        $scope.change = function() {
            switch ($scope.qtype) {
                case 'search':
                    $scope.request = 'https://api.spotify.com/v1/' + $scope.qtype + '?';
                    $scope.request += ($scope.q) ? 'q=' + $scope.q : '';
                    $scope.request += '&type=' + $scope.type;
                    $scope.request += ($scope.market) ? '&market=' + $scope.market : '';
                    $scope.request += ($scope.limit && $scope.limit != 20) ? '&limit=' + $scope.limit : '';
                    $scope.request += ($scope.offset && $scope.offset != 0) ? '&offset=' + $scope.offset : '';
                    $scope.submitDisabled = !($scope.q && !isNaN($scope.limit) && !isNaN($scope.offset)) ;
                    $scope.status = null;
                    $scope.data = null;
                    break;
                case 'track':
                    $scope.request = 'https://api.spotify.com/v1/tracks';
                    $scope.request += ($scope.trackIds) ? '?ids=' + $scope.trackIds : '';
                    $scope.request += ($scope.trackMarket) ? '&market=' + $scope.trackMarket : '';
                    $scope.submitDisabled = !$scope.trackIds ;
                    $scope.status = null;
                    $scope.data = null;
                    break;
                case 'artist':
                    $scope.request = 'https://api.spotify.com/v1/artists';
                    $scope.request += ($scope.multiArtist && $scope.artistIds) ? '?ids=' + $scope.artistIds : '';
                    $scope.request += (!$scope.multiArtist && $scope.artistId) ? '/' + $scope.artistId : '';
                    //artist album
                    $scope.request += (!$scope.multiArtist && $scope.artistAlbum) ? '/albums?' : '';
                    $scope.request += (!$scope.multiArtist && $scope.artistAlbum && $scope.artistAlbumType != '----') ? 'album_type=' + $scope.artistAlbumType + '&' : '';
                    $scope.request += (!$scope.multiArtist && $scope.artistAlbum && $scope.artistMarket) ? 'market=' + $scope.artistMarket + '&' : '';
                    $scope.request += (!$scope.multiArtist && $scope.artistlimit && $scope.artistlimit != 20) ? 'limit=' + $scope.artistlimit + '&' : '';
                    $scope.request += (!$scope.multiArtist && $scope.artistoffset && $scope.artistoffset != 0) ? 'offset=' + $scope.artistoffset + '&' : '';
                    $scope.request = _.trimEnd($scope.request, '&');
                    $scope.request = _.trimEnd($scope.request, '?');
                    //artist top tracks
                    $scope.request += (!$scope.multiArtist && $scope.artistTopTracks) ? '/top-tracks' : '';
                    $scope.request += (!$scope.multiArtist && $scope.artistTopTracks && $scope.artistTopTracksCountry) ? '?country=' + $scope.artistTopTracksCountry : '';
                    //artist related artist
                    $scope.request += (!$scope.multiArtist && $scope.artistRelatedArtists) ? '/related-artists' : '';

                    $scope.submitDisabled = !(
                        ($scope.multiArtist && $scope.artistIds) ||
                        (!$scope.multiArtist && $scope.artistId &&
                            (
                                ($scope.artistAlbum && !isNaN($scope.artistlimit) && !isNaN($scope.artistoffset)) ||
                                ($scope.artistTopTracks && $scope.artistTopTracksCountry != null) ||
                                ($scope.artistRelatedArtists) ||
                                (!$scope.artistAlbum && !$scope.artistTopTracks && !$scope.artistRelatedArtists)
                            )
                        )
                    ) ;
                    $scope.status = null;
                    $scope.data = null;
                    break;
                case 'album':
                    $scope.request = 'https://api.spotify.com/v1/albums';
                    $scope.request += ($scope.multiAlbum && $scope.albumsIds) ? '?ids=' + $scope.albumsIds : '';
                    $scope.request += ($scope.multiAlbum && $scope.albumsIds && $scope.multiAlbumTracksMarket) ? '&market=' + $scope.multiAlbumTracksMarket : '';
                    $scope.request += (!$scope.multiAlbum && $scope.albumsId) ? '/' + $scope.albumsId : '';
                    //album tracks
                    $scope.request += (!$scope.multiAlbum && $scope.albumTracks) ? '/tracks?' : '';
                    $scope.request += (!$scope.multiAlbum && $scope.albumTracks && $scope.albumTrackslimit != 20) ? 'limit=' + $scope.albumTrackslimit + '&' : '';
                    $scope.request += (!$scope.multiAlbum && $scope.albumTracks && $scope.albumTracksOffset != 0) ? 'offset=' + $scope.albumTracksOffset + '&' : '';
                    $scope.request += (!$scope.multiAlbum && $scope.albumTracks && $scope.albumTracksMarket) ? 'market=' + $scope.albumTracksMarket : '';
                    $scope.request = _.trimEnd($scope.request, '&');
                    $scope.request = _.trimEnd($scope.request, '?');
                    $scope.submitDisabled = !(
                        ($scope.multiAlbum && $scope.albumsIds) ||
                        (!$scope.multiAlbum && $scope.albumsId &&
                            (
                                (!$scope.albumTracks) ||
                                ($scope.albumTracks && !isNaN($scope.albumTrackslimit) && !isNaN($scope.albumTracksOffset))
                            )
                        )
                    );
                    $scope.status = null;
                    $scope.data = null;
                    break;
                case 'playlist':
                    //$scope.request = '/corsproxy/';
                    //redirect to proxy to prevent cors pre-flight request
                    $scope.request = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/corsproxyspotify?';
                    $scope.request += 'token=' + $scope.playlistsAccessToken + '&';
                        //'https://api.spotify.com/v1';cors_server_proxy
                    $scope.request += ($scope.playlistUserId) ? 'users=' + $scope.playlistUserId + '&' : '';
                    $scope.request += ($scope.playlistId) ? 'playlists=' + $scope.playlistId + '&' : '';
                    $scope.request += (!$scope.playlistTracks && $scope.playlistMarket) ? 'market=' + $scope.playlistMarket + '&' : '';
                    $scope.request += ($scope.playlistTracks) ? 'playlisttracks=y&' : '';
                    $scope.request += ($scope.playlistTracks && $scope.playlistTrackLimit && $scope.playlistTrackLimit != 100) ? 'limit=' + $scope.playlistTrackLimit + '&' : '';
                    $scope.request += ($scope.playlistTracks && $scope.playlistTracksOffset && $scope.playlistTracksOffset != 0) ? 'offset=' + $scope.playlistTracksOffset + '&' : '';
                    $scope.request += ($scope.playlistTracks && $scope.playlistTrackMarket) ? 'market=' + $scope.playlistTrackMarket + '&' : '';
                    $scope.request = _.trimEnd($scope.request, '&');
                    $scope.request = _.trimEnd($scope.request, '?');
                    $scope.submitDisabled = !($scope.playlistsAccessToken && $scope.playlistUserId && $scope.playlistId &&
                        ((!$scope.playlistTracks) || ($scope.playlistTracks && !isNaN($scope.playlistTrackLimit) && !isNaN($scope.playlistTracksOffset)))
                    );
                    $scope.status = null;
                    $scope.data = null;
                    break;
            }

        };
        //send request to Spotify WEB API , receive response and manipulate it
        $scope.submit = function() {
            $scope.code = null;
            $scope.response = null;
            $http({method: 'GET', url: $scope.request, cache: $templateCache}).
            then(
                function (response) {
                    $scope.status = response.status;
                    $scope.data = response.data;
                    //manipulation data cause the variation of result format
                    var flag = true;
                    var temp = [];
                    _(jsonRoot).forEach(function (val) {
                        if (_.has($scope.data, val) && flag && _.size($scope.data) === 1) {
                            $scope.data = $scope.data[val];
                            flag = false;
                        }
                    });
                    if (_.has($scope.data, 'items')) {
                        $scope.data = $scope.data.items;
                        flag = false;
                        if ($scope.qtype == 'playlist' && $scope.playlistTracks) {
                            _($scope.data).forEach(function (val) {
                                temp.push(val.track);
                            });
                            $scope.data = temp;
                        }
                    }
                    if (flag) {
                        $scope.data = [$scope.data];
                    }

                }, function (response) {
                    $scope.data = response.data || "Request failed";
                    $scope.status = response.status;
                }
            );
        };

        // results display
        $scope.albumResultHeaders   = ['album_type', 'external_urls', 'href', 'album id', 'images', 'album name', 'type'];
        $scope.albumResultfield     = ['album_type', 'external_urls', 'href', 'id', 'images', 'name', 'type'];
        $scope.trackResultHeaders   = ['album name', 'album id', 'images', 'artist name', 'artist id', 'track id', 'track name', 'external_urls', 'popularity'];
        $scope.trackResultfield     = ['album_name', 'album_id', 'album_images', 'artists_name', 'artists_id', 'id', 'name', 'external_urls', 'popularity'];
        $scope.artistResultHeaders  = ['artist name', 'artist id', 'external_urls', 'href', 'images', 'popularity', 'type'];
        $scope.artistResultfield    = ['name', 'id', 'external_urls', 'href', 'images', 'popularity', 'type'];
        $scope.playlistResultHeaders  = ['external_urls', 'playlist id', 'images', 'playlist name', 'total tracks', 'owner id', 'type'];
        $scope.playlistResultfield    = ['external_urls', 'id', 'images', 'name', 'track_total', 'owner_id', 'type'];
    }]);
    //result display directive
    app.directive('spotifyResultTable', function() {
        return {
            restrict: 'E',
            scope: {
                directiveData: "=result",
                directiveHeaders: "=headers",
                directiveFields: "=fields"
            },
            templateUrl: 'spotifyResultTable'
        };
    });
    app.controller('deezerApi', ['$scope', '$http', '$templateCache', '$location', function ($scope, $http, $templateCache, $location) {
        $scope.orderArray = ['RANKING', 'TRACK_ASC', 'TRACK_DESC', 'ARTIST_ASC',
            'ARTIST_DESC', 'ALBUM_ASC', 'ALBUM_DESC', 'RATING_ASC', 'RATING_DESC', 'DURATION_ASC', 'DURATION_DESC'];
        $scope.qtype = 'search';
        $scope.ctype = 'tracks';
        $scope.type = 'track';
        $scope.fuzzy = false;
        $scope.getTracks = false;
        $scope.order = '----';
        $scope.status = null;
        $scope.data = null;
        $scope.index = 0;
        $scope.limit = null;
        $scope.submitDisabled = true;
        $scope.corsrequest = '';

        $scope.change = function() {

            $scope.request = 'https://api.deezer.com/' + $scope.qtype;
            if ($scope.qtype != 'chart') {
                if ($scope.qtype == 'search') {
                    $scope.request += '/' + $scope.type;
                    $scope.request += '?q=' + $scope.q + '&';
                    $scope.request += ($scope.fuzzy) ? 'strict=on&' : '';
                    $scope.request += ($scope.order !== '----') ? 'order=' + $scope.order + '&' : ''
                } else {
                    $scope.request += '/' + $scope.q;
                    if (($scope.qtype == 'album' || $scope.qtype == 'playlist') && $scope.getTracks) {

                    }
                    $scope.request += '/tracks' + '?';
                }
            } else {
                $scope.request += '?';
            }

            if ($scope.index && $scope.index != null && $scope.index != 0) {
                $scope.request += 'index=' + $scope.index + '&';
            }
            if ($scope.limit && $scope.limit != null) {
                $scope.request += 'limit=' + $scope.limit + '&';
            }

            $scope.request += 'output=json';
            //proxy request
            //redirect to proxy to prevent cors request
            $scope.corsrequest  =  $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/corsproxydeezer?qtype=' + $scope.qtype + '&';
            if ($scope.qtype != 'chart') {
                $scope.corsrequest += 'q=' + $scope.q + '&';
                if ($scope.qtype == 'search') {
                    $scope.corsrequest += 'type=' + $scope.type + '&';
                    $scope.corsrequest += ($scope.fuzzy) ? 'fuzzy=on&' : '';
                    $scope.corsrequest += ($scope.order !== '----') ? 'order=' + $scope.order + '&' : ''
                }
            }
            if ($scope.index && $scope.index != null && $scope.index != 0 ) {
                $scope.corsrequest += 'index=' + $scope.index + '&';
            }
            if ($scope.limit && $scope.limit != null) {
                $scope.corsrequest += 'limit=' + $scope.limit + '&';
            }
            $scope.corsrequest = _.trimEnd(_.trimEnd($scope.corsrequest, '&'), '?');

            $scope.submitDisabled = !(($scope.q && !isNaN($scope.index) && !isNaN($scope.limit)) || $scope.qtype === 'chart');
            $scope.status = null;
            $scope.data = null;
        };

        $scope.submit = function () {
            $scope.code = null;
            $scope.response = null;
            $http({method: 'GET', url: $scope.corsrequest, cache: $templateCache}).
            then(function(response) {
                $scope.status = response.status;
                $scope.data = response.data;
                //manipulation data cause the variation of result format
                if ($scope.qtype == 'chart') {
                    $scope.data = response.data;
                } else if ($scope.qtype == 'search') {
                    $scope.data = _.get($scope.data, 'data');
                } else if (($scope.qtype == 'album' || $scope.qtype == 'playlist') && $scope.getTracks) {
                    $scope.data = _.get($scope.data, 'tracks.data');
                } else {
                    $scope.data = [$scope.data];
                }
            }, function(response) {
                $scope.data = response.data || "Request failed";
                $scope.status = response.status;
            });
        };

        $scope.albumResultfield     = ['type', 'id', 'title', 'link', 'cover', 'artist_id', 'artist_name', 'artist_picture'];
        $scope.trackResultfield     = ['type', 'id', 'title', 'link', 'album_id', 'album_title', 'album_cover', 'artist_id', 'artist_name', 'artist_picture'];
        $scope.artistResultfield    = ['type', 'id', 'name', 'link', 'picture'];
        $scope.playlistResultfield    = ['type', 'id', 'title', 'link', 'picture', 'user_id', 'user_name'];
        $scope.chartTracksResultfield = ['position', 'type', 'id', 'title', 'link', 'album_id', 'album_title', 'album_cover', 'artist_id', 'artist_name', 'artist_picture'];
        $scope.chartAlbumsResultfield     = ['position', 'type', 'id', 'title', 'link', 'cover', 'artist_id', 'artist_name', 'artist_picture'];
        $scope.chartArtistsResultfield    = ['position', 'type', 'id', 'name', 'link', 'picture'];
        $scope.chartPlaylistsResultfield    = ['position', 'type', 'id', 'title', 'link', 'picture', 'user_id', 'user_name'];
    }]);
    //deezer result display directive
    app.directive('deezerResultTable', function() {
        return {
            restrict: 'E',
            scope: {
                directiveData: "=result",
                directiveFields: "=fields"
            },
            templateUrl: 'deezerResultTable'
        };
    });
    app.directive('bootstrapSwitch', [
        function() {
            return {
                restrict: 'A',
                require: '?ngModel',
                link: function(scope, element, attrs, ngModel) {
                    element.bootstrapSwitch();

                    element.on('switchChange.bootstrapSwitch', function(event, state) {
                        if (ngModel) {
                            scope.$apply(function() {
                                ngModel.$setViewValue(state);
                            });
                        }
                    });

                    scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                        if (newValue) {
                            element.bootstrapSwitch('state', true, true);
                        } else {
                            element.bootstrapSwitch('state', false, true);
                        }
                    });
                }
            };
        }
    ]);
})(window.angular);