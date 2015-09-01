/**
 * Created by Elite on 2015/9/1.
 */
/* @-1 安全的类型检测
 *  typeof  兼容性问题typeof REG
 *  instanceof 不能检测原生对象还是自定义对象
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
 * @-2作用域安全的构造函数，锁定了可以调用的构造函数的环境，不能使用构造函数窃取模式继承。
 * */
//创建一个作用域安全的构造函数Polygon
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
* 初始化一个XMLHttpRequest对象函数
* @-3惰性载入方式：在声明函数时就指定适当的函数。代码在首次加载的时候回损失一点性能
* 一般方式：每次调用createXHR（)函数，它都要对浏览器支持的能力自己检查，每次都要损失性能
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
                        new ActiveXObject(versions[i]);//尝试用new关键字初始化一个ActiveXObject（versions[i]）对象，如果成功，则将这个版本字符串，保存到当前运行函数的自定义属性activestring中
                        arguments.callee.activestring=versions[i];
                        break;//只要尝试成功，则跳出循环

                    }catch(ex){
                        //尝试用new关键字初始化一个ActiveXObject（versions[i]）对象失败，不执行任何操作
                    }
                }

            }
            return new ActiveXObject(arguments.callee.activestring);
        }
    }
})();

/*
 * @-4 函数绑定
 * 函数绑定要创建一个函数，可以在特定的this环境中以指定参数调用另一个函数。
 * 该技巧常常和回调函数与事件处理一起使用，以便将函数作为变量传递的同时保留代码执行环境
 * */
function bind(fn,context){
    return function(){
        return fn.apply(context,arguments);
    }
}
/*
 * 被绑定函数与普通函数相比有更多的开销，它们需要更多内存，同时也因为多重函数调用稍微慢一点，所以最好只在必要时使用。
 * */

