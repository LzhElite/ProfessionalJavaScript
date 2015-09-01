/**
 * Created by Elite on 2015/8/29.
 */
/*使用下列代码可以跨浏览器取得窗口左边和上边的位置*/
var leftPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;
var topPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;


/*取得视口（viewport）*/
var pageWidth=window.innerWidth,
    pageHeight=window.innerHeight;
if(typeof pageWidth!="number"){
    if(document.compatMode=="CSS1Compat"){ /*是否是标准模式*/
        pageWidth=document.documentElement.clientWidth;
        pageHeight=document.documentElement.clientHeight;
    }else{
        pageWidth=document.body.clientWidth;
        pageHeight=document.body.clientHeight;
    }
}
