app.controller('JobController',function(JobService,$scope,$location,$rootScope){
	$scope.showJobDetails=false
	
	function getAllJobs(){
		JobService.getAllJobs().then(function(response){
			$scope.jobs=response.data;
		},function(response){
			$location.path('/login')
		})
	}
	
	$scope.saveJob=function(){
		JobService.saveJob($scope.job).then(function(response){
			
			$location.path('/getalljobs')
			
		},	function(response){
			console.log(response.status)
			if(response.status==401){
				$scope.error=response.data
				$location.path('/login')
			}
			if(response.status==500){
				$scope.error=response.data
				$location.path('/savejob')
			}
			$location.path('/home')
		})
	}
	$scope.getJobDetails=function(id){
		$scope.showJobDetails=true
		JobService.getJobDetails(id).then(function(response){
			$scope.job=response.data
			},function(response)
			{
				$scope.error=response.data 
				$location.path('/login')	
			
		})
	}
getAllJobs()	
	
})

