angular.module('flapperNews', []).controller('MainCtrl',[
    '$scope', function($scope){
      $scope.test = 'Hello world!';
      $scope.posts = [
        { title: 'post 1', upvotes: 5},
        { title: 'post 1', upvotes: 3},
        { title: 'post 2', upvotes: 5},
        { title: 'post 1', upvotes: 5},
        { title: 'post 1', upvotes: 4}
      ];
    }]);
