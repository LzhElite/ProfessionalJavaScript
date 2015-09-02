/**
 * Created by Elite on 2015/9/2.
 */
var EventUtil={
    //绑定事件 参数：要操作的元素、事件的名称、事件处理程序函数
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type]=handler;
        }
    },
    //移除事件 参数：要操作的元素、事件的名称、事件处理程序函数
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type]=null;
        }
    },
    //取得当前事件对象
    getEvent:function(event){
        return event?event:window.event;
    },
    //去当当前事件源
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    //阻止事件默认行为
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    //阻止事件传播
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
};