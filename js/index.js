var search = angular.module("searchApp", []);

search.controller('searchCtrl', function($scope, $http){  
  
  
  $scope.searchWiki = function(){
    if(($scope.title === '') || ($scope.title === undefined)){
      return;
    }
    else {
    
var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
  var cb = "&callback=JSON_CALLBACK";
  
  $http.jsonp(api + $scope.title + cb)
  .success(function(response){         $scope.results = response.query.pages; 
                     });
    }
}
  });


  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );