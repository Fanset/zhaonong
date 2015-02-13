function getCookie(name){ 
     var strCookie=document.cookie; 
     // alert(strCookie);
     var arrCookie=strCookie.split("; "); 
     for(var i=0;i<arrCookie.length;i++){ 
       var arr=arrCookie[i].split("="); 
       if(arr[0]==name)return arr[1]; 
     } 
 return ""; 
} 
function addCookie(name,value){
	var str=name+"="+escape(value);
	document.cookie=str;
	console.log(name+"="+value);

}