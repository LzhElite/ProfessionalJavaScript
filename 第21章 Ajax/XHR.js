/**
 * Created by Elite on 2015/9/1.
 */
    /*����ģʽ*/
var myxhr={};
/* @ ���崴��XMLHttpRequest ����ĺ���*/
myxhr.createXHR=function(){
    if(typeof XMLHttpRequest !="undefined"){
        createXHR=function(){
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject !="undefined"){
        createXHR=function(){
            if(typeof arguments.callee.activeXString != "string"){//����ǰ���к������Զ�������activeXString
                var versions=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"], i,len;
                for(i=0,len=versions.length;i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);//����ɹ�����break����ѭ�������ʧ�ܣ���ִ��catch���ٽ�����һ��ѭ��
                        arguments.callee.activeXString=versions[i]; //ͬʱ���Զ�������activeXString��ֵ
                        break;
                    }catch(ex){

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);//���غ��ʵ�ActiveXOject
        }

    }else{
        createXHR=function(){
            throw new Error("No XHR object available");
        }
    }
};

/* @ ������ URL ��ĩβ��Ӳ�ѯ�ַ�������*/
myxhr.addURLParam=function(url,name,value){
    url+=(url.indexOf("?")== -1 ?"?":"&")//�ж�Ŀǰ��url�ַ����Ƿ� û�У���-1��
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);//��ѯ�ַ�����ÿ�����������ƺ�ֵ������ʹ�� encodeURIComponent()���б��룬Ȼ����ܷŵ� URL ��ĩβ��
    return url;
};