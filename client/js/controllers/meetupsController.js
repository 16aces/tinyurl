app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Meetup = $resource('/api/meetups');

  Meetup.query(function(results){
  	$scope.meetups = results;

  }
)

	$scope.meetups = [
		
	]

	
  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
   console.log(meetup);
    meetup.$save(function (result) {

      $scope.meetups.push(result);
      $scope.meetupName = '';
    });
  }
}]);
/*

app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Meetup = $resource('/api/meetups');

  

  $scope.meetups = []

  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result) {
      $scope.meetups.push(result);
      $scope.meetupName = '';
    });
  }
}]);*/