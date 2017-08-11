$(function(){
	$("#partNav ul").on("mouseenter","li",function(){
		console.log("aa");
		$(".navCon").show();
		var index = $(this).index();
		$.get("home/nav_data.json",function(data){
			var html = template("navCon",data[index]);
			$("#partNav .navCon").html(html);
		})
	})
	$("#partNav").on("mouseleave",function(){
		$(".navCon").hide();
	})
	
	$.get("home/nav.json",function(data){
		var html = template("nav",data);
		$("#partNav ul").html(html);
	})
	
	
})
