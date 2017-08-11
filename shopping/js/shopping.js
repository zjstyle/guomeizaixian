$(function(){
	
	//console.log(str);
//	console.log(obj);
//	console.log( obj[0].soure,obj[0].ID);
	
	$.ajax({
		type:"get",
		url:"shopping/json/detail.json",
		async:true,
		success:function(data){
			var str = getCookie("user");
			var arr = JSON.parse(str);
			
			var	html = "";

			for(var i =0;i< arr.length;i++) {	
				
			     var item = getData(arr[i].ID,data);
			     console.log(item);
			   
			      html = "<li><a><img src='" +item.src +"' /></a><p>"+item.title+"</p><b>"+item.price+"</b></li>";
			     $("#content ul").append(html);
			     
			    
			     
			}
			
			
		}	
	})
	
	function getData(ID,data){
		console.log("aaa");
		for(var i=0;i<data.length;i++){
			if(data[i].id==ID){
				return data[i];
			}
		}
	}
	
})
