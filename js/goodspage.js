$(document).ready(function(){   
    var goodsid;
    goodsid=getUrlParam("id");
    // alert(goodsid);
    var str = "id="+escape(goodsid);
    document.cookie = str;
 //   goodsid=getCookie("id");
    console.log(getCookie("id"));

    var gooddt=goodsData[goodsid-1];

    var imgsrc="../image/"+gooddt.mycimgsrc;
     $("#myc").attr("src",imgsrc);
     $(".per").text(gooddt.per);
     $(".weight").text(gooddt.weight);
     $("#category").text(gooddt.category);
     $("#price").text(gooddt.price);

     $('#perchase').click(function(event) {
         perchase(goodsid);
     });
});

function perchase(goodsid){
    location.href="orderpage.html?id="+goodsid;
}

/*function addCookie(name,value,expireHours){ 
    var cookieString=name+"="+escape(value); 
    //判断是否设置过期时间

   if(expireHours>0){ 
        var date=new Date(); 
        date.setTime(date.getTime+expireHours*3600*1000); 
        cookieString=cookieString+"; expire="+date.toGMTString(); 
    } 
    document.cookie=cookieString; 
} */
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