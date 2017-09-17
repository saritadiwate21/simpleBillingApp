var app=angular.module('app',[]);
app.run(function($rootScope){
  $rootScope.myTitle = "Angular App";
});

app.controller('ctr',function($scope,$http){
	var arr;
	
	 $http({
        method : "GET",
        url : "data/item.json"
    }).then(function mySuccess(response) {
         arr = response.data["Items"];
        $scope.items=arr;

    }, function myError(response) {
        console.log(response.statusText);
    });





    
	var res=[];
	var cnt=0;
    $scope.option=[0,1,2,3,4,5];
	$scope.add = function(name,x){
		var flag=0;
		for(var j=0;j<res.length;j++){
    		if(res[j].item_name==name ){
    			flag=1;
    		}
    	}


    	if(res.length==0){
    		for(var i=0;i<arr.length;i++){
    			if(arr[i].item_name==name){
    				var amount=arr[i].item_rate*Number(x);
    				var obj={
    				sr_no:++cnt,
    				item_name:name,
    				item_rate:arr[i].item_rate,
    				item_qty:x,
    				item_amount:amount
    				};
			   res.push(obj);
			    i=arr.length;
    		}
   		}
    }
    else{
    		if(flag==1){
    			for(var k=0;k<res.length;k++){
    				if(res[k].item_name==name){
						var amount=res[k].item_rate*Number(x);
		    			var obj={
		    				sr_no:res[k].sr_no,
		    				item_name:name,
		    				item_rate:res[k].item_rate,
		    				item_qty:x,
		    				item_amount:amount
		    			};
		    			res.splice(k,1,obj);
		    			k=res.length;	
		    			}
    			}
    		}
    		else{
				for(var i=0;i<arr.length;i++){
  					if(arr[i].item_name==name){
  						var amount=arr[i].item_rate*Number(x);
  						var obj={
  							sr_no:++cnt,
    						item_name:name,
    						item_rate:arr[i].item_rate,
    						item_qty:x,
    						item_amount:amount
    					};
    					res.push(obj);
    					i=arr.length;
    					   }
    				}
    			}
    		}
    		
    console.log(res);
    var tq=0,subt=0;
	for(var k=0;k<res.length;k++){
		tq=tq+Number(res[k].item_qty);
		 subt=subt+res[k].item_amount;
		}
	$scope.totalqty=tq;
	$scope.subtotal=subt;
	$scope.subtotal1=subt*0.18;
	$scope.bill1=subt+($scope.subtotal1*2);
	$scope.bill2=Math.round($scope.bill1);
    $scope.res=res;	
  
};

$scope.showForm = false;
    $scope.item_name = "";
    $scope.item_rate = "";
    $scope.item_image = "";
    $scope.submitForm = function() {
    	$scope.item_name = "";
    	$scope.item_rate = "";
    	$scope.item_image = "";
        $scope.showForm = false;
    };

 $scope.addItem=function(x,y,z){
 	var obj={
		    "item_name": x,
		    "item_image": y,
            "item_rate": z
                };
                arr.push(obj);
                $scope.items=arr;
 	};
    
});