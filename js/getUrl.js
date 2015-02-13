
var goodsData=[undefined,
{"mainimgsrc":"2.jpg","mycimgsrc":"goodspage/02.jpg","price":"￥29","weight":"750g","per":"2枚装","category":"双个彩盒装(爱情果)"},
{"mainimgsrc":"9_85.jpg","mycimgsrc":"goodspage/03.jpg","price":"￥128","weight":"2500g","per":"9枚*85#装","category":"9枚*85#环保牛皮纸礼盒装"},
{"mainimgsrc":"9_95.jpg","mycimgsrc":"goodspage/04.jpg","price":"￥198","weight":"2500g","per":"9枚*95#装","category":"9枚*95#豪华礼盒装"},
undefined,
{"mainimgsrc":"75-80.jpg","mycimgsrc":"goodspage/06.jpg","price":"￥68","weight":"2400g","per":"8+1装","category":"9枚75-80便携装"},
{"mainimgsrc":"16_80.jpg","mycimgsrc":"goodspage/07.jpg","price":"￥168","weight":"3600g","per":"16枚*80#","category":"16枚*80#经济礼盒装"},
{"mainimgsrc":"24_75.jpg","mycimgsrc":"goodspage/08.jpg","price":"￥158","weight":"5000g","per":"24枚*75#","category":"24枚*75#经济礼盒装"}];
function getUrlParam(name){
              var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
              var r=window.location.search.substr(1).match(reg);
              if(r!=null){
                return unescape(r[2]);
              }
              return null;
            }