/**
 * Created by Elite on 2015/8/28.
 */

/*NodeList 转换为数组*/
function convertToArray(nodes){
    var array=null;
    try{
        array=Array.prototype.slice.call(nodes,0); /*针对非IE浏览器*/
    }catch(ex){
        array=new Array();
        for(var i= 0,len=nodes.length;i<len;i++){/*针对IE8及以下（IE8及以下更早版本，将NodeList实现为一个COM对象）*/
            array.push(nodes[i]);
        }
    }
}


