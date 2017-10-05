app.factory('FriendService',function($http)
		{
	var  friendService={}
	
	friendService.listOfSuggestedUsers=function()
	{
		 return  $http.get("http://localhost:8090/sribackend/getsuggestedusers")
		 
	}
	friendService.friendRequest=function(toId)
	{
		 return  $http.post("http://localhost:8090/sribackend/friendrequest/"+toId)
		 
	}
	friendService.listOfPendingRequests=function()
	{
		 return  $http.get("http://localhost:8090/sribackend/getpendingrequests")
		 
	}
	friendService.getUserDetails=function(fromId)
	{
		 return  $http.get("http://localhost:8090/sribackend/getuserdetails/"+fromId)
		 
	}
	friendService.updatePendingRequest=function(pendingRequest)
	{
		return  $http.put("http://localhost:8090/sribackend/updatependingrequest",pendingRequest)
	}
	friendService.listOfFriends=function()
	{
		return  $http.get("http://localhost:8090/sribackend/listoffriends")
	}
	return friendService;
	})