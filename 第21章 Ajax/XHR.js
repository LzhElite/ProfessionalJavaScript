/**
 * Created by Elite on 2015/9/1.
 */
    /*单例模式*/
var myxhr={};
/* @ 定义创建XMLHttpRequest 对象的函数*/
myxhr.createXHR=function(){
    if(typeof XMLHttpRequest !="undefined"){
        createXHR=function(){
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject !="undefined"){
        createXHR=function(){
            if(typeof arguments.callee.activeXString != "string"){//给当前运行函数，自定义属性activeXString
                var versions=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"], i,len;
                for(i=0,len=versions.length;i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);//如果成功，则break跳出循环；如果失败，则执行catch。再进入下一个循环
                        arguments.callee.activeXString=versions[i]; //同时给自定义属性activeXString赋值
                        break;
                    }catch(ex){

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);//返回合适的ActiveXOject
        }

    }else{
        createXHR=function(){
            throw new Error("No XHR object available");
        }
    }
};

/* @ 向现有 URL 的末尾添加查询字符串参数*/
myxhr.addURLParam=function(url,name,value){
    url+=(url.indexOf("?")== -1 ?"?":"&")//判断目前的url字符串是否 没有？（-1）
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);//查询字符串中每个参数的名称和值都必须使用 encodeURIComponent()进行编码，然后才能放到 URL 的末尾；
    return url;
};