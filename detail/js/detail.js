$(function(){
	$.ajax({
		type:"get",
		url:"detail/json/detail.json",
		async:true,
		success:function(data){
			var str = location.search;
			var xx = str.split("=");
			var proID = xx[1];
			var html = "";
			for(var i in data){
				if(proID==data[i].id){
					$(".title").find(".itemDisplayName").html(data[i].title);
					$(".title").find(".promotionDesc").html(data[i].title1);
					$(".price .pp").find(".bb").html(data[i].price);
					
					for(var j in data[i].src) {
						html += "<img src=' " + data[i].src[j] + "'/>";						
					}
					$(".middle-img, .big-img,.small-img").append(html);
				}	
				
				
				
				}
			
			
			$(".small-img img").click(function() {
				
				$(this).addClass("active").siblings().removeClass("active");
				$(".middle-img img").eq($(this).index()).show().siblings().hide();
				$(".big-img img").eq($(this).index()).show().siblings().hide();
			})
			
			
			
			$(".include-img").mousemove(function(evt) {
				//1)显示
				$(".big-img,.zoom").show();
				var cx = evt.pageX - $(".include-img").offset().left - $(".zoom").outerWidth() / 2;
				var cy = evt.pageY - $(".include-img").offset().top - $(".zoom").outerHeight() / 2;
				//2)边界判断
				if(cx < 0) {
					cx = 0;
				} else if(cx >= $(".include-img").outerWidth() - $(".zoom").outerWidth()) {
					cx = $(".include-img").outerWidth() - $(".zoom").outerWidth();
				}
				if(cy < 0) {
					cy = 0;
				} else if(cy >= $(".include-img").outerHeight() - $(".zoom").outerHeight()) {
					cy = $(".include-img").outerHeight() - $(".zoom").outerHeight();
				}
				//3)进行拖动
				$(".middle-img .zoom").css("left", cx);
				$(".middle-img .zoom").css("top", cy);
				//4)让大图动起
			var bcx = -($(".zoom").position().left / $(".middle-img").outerWidth() * $(".big-img img").outerWidth());
			var bcy = -($(".zoom").position().top / $(".middle-img").outerHeight() * $(".big-img img").outerHeight());
				$(".big-img img").css("left", bcx);
				$(".big-img img").css("top", bcy);
				//5)鼠标移出
				$(".include-img").mouseout(function() {
					$(".big-img,.zoom").hide();
				})
			})
			
			var num = $(".go-cart input").val();
			$(".go-cart .reduce").click(function(){
				num--;
				if(num<=0){
					num = 0;
				}
				$(".go-cart input").val(num);		
			})
			
			$(".go-cart .plus").click(function(){
				num++;
				if(num>0){
					$(".go-cart input").val(num);
				}
						
			});
		
		
		
		}
		
	});
	
	
})
