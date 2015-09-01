/**
 * Created by Elite on 2015/9/1.
 */
/* @-1 ��ȫ�����ͼ��
 *  typeof  ����������typeof REG
 *  instanceof ���ܼ��ԭ���������Զ������
 *  Object.prototype.toString.call(value)
 * */
function isArray(value){
    return Object.prototype.toString.call(value)=="[object Array]"
}

function isFunction(value){
    return Object.prototype.toString.call(value)=="[object Function]"
}

function isRegExp(value){
    return Object.prototype.toString.call(value)=="[object RegExp]"
}


/*
 * @-2������ȫ�Ĺ��캯���������˿��Ե��õĹ��캯���Ļ���������ʹ�ù��캯����ȡģʽ�̳С�
 * */
//����һ��������ȫ�Ĺ��캯��Polygon
function Polygon(sides){
    if(this instanceof Polygon){
        this.sides=sides;
        this.getArea=function(){
            return 0;
        }
    }else{
        return new Polygon(sides);
    }
}

/*
* ��ʼ��һ��XMLHttpRequest������
* @-3�������뷽ʽ������������ʱ��ָ���ʵ��ĺ������������״μ��ص�ʱ�����ʧһ������
* һ�㷽ʽ��ÿ�ε���createXHR��)����������Ҫ�������֧�ֵ������Լ���飬ÿ�ζ�Ҫ��ʧ����
* */
var createXHR =(function(){
    if(typeof XMLHttpRequest !="undefined"){
        return function(){
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject !="undefined"){
        return function(){
            if(typeof arguments.callee.activestring !="string"){
                var versions=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"], i,len;           for(i=0,len=versions.length;i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);//������new�ؼ��ֳ�ʼ��һ��ActiveXObject��versions[i]����������ɹ���������汾�ַ��������浽��ǰ���к������Զ�������activestring��
                        arguments.callee.activestring=versions[i];
                        break;//ֻҪ���Գɹ���������ѭ��

                    }catch(ex){
                        //������new�ؼ��ֳ�ʼ��һ��ActiveXObject��versions[i]������ʧ�ܣ���ִ���κβ���
                    }
                }

            }
            return new ActiveXObject(arguments.callee.activestring);
        }
    }
})();

/*
 * @-4 ������
 * ������Ҫ����һ���������������ض���this��������ָ������������һ��������
 * �ü��ɳ����ͻص��������¼�����һ��ʹ�ã��Ա㽫������Ϊ�������ݵ�ͬʱ��������ִ�л���
 * */
function bind(fn,context){
    return function(){
        return fn.apply(context,arguments);
    }
}
/*
 * ���󶨺�������ͨ��������и���Ŀ�����������Ҫ�����ڴ棬ͬʱҲ��Ϊ���غ���������΢��һ�㣬�������ֻ�ڱ�Ҫʱʹ�á�
 * */

