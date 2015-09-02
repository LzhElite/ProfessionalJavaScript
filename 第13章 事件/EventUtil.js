/**
 * Created by Elite on 2015/9/2.
 */
var EventUtil={
    //���¼� ������Ҫ������Ԫ�ء��¼������ơ��¼����������
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type]=handler;
        }
    },
    //�Ƴ��¼� ������Ҫ������Ԫ�ء��¼������ơ��¼����������
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type]=null;
        }
    },
    //ȡ�õ�ǰ�¼�����
    getEvent:function(event){
        return event?event:window.event;
    },
    //ȥ����ǰ�¼�Դ
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    //��ֹ�¼�Ĭ����Ϊ
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    //��ֹ�¼�����
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
};