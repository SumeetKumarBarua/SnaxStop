contact.controller("Controller", function($scope,$route,$http,$routeParams,$rootScope) {
	
		$scope.contactForm = {};
		$scope.contactForm.contactList = null;
		$scope.contactForm.contactList1 = null;
		$scope.contactForm.cId = null;
		$scope.contactForm.otp=null;
		$scope.otp=null;
		$scope.contactForm.msgList = null;
		$scope.contactForm.names = [];		
		
		$scope.init = function(){	
			$scope.contactForm.getAllContacts(); 
			$scope.contactForm.getAllMessages(); 
			
		};
	$scope.randomColor=function(){
	    var colorList=['a','b','c','d','e','f','g','h']
	    var random=Math.floor(Math.random()*10);
		if(random>=8)
		return colorList[10-random-1];
		return colorList[random];
	}
	$scope.contactForm.getAllContacts = function() {		
		var responsePromise = $http.get(URI + "ContactAPI" + "/allContacts");
		responsePromise.then(function(response) {
			
			$scope.contactForm.contactList = response.data;
		}, function(response) {
			$scope.contactForm.contactList = null;
		});
	};