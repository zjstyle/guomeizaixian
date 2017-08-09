function getCookie(name) {
	var str = document.cookie; //定义一个str 获取cookie
	//console.log(str);
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var arr1 = arr[i].split("=");
		if(arr1[0] == name) {
			return arr1[1];
		}
	}

}

function setCookie(name, value, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + value + ";expires=" + oDate+"; path=/";
}

function removeCookie(name) {
	//删除cookie，把生命期设为过期时间
	setCookie(name, 1, -1);
}

