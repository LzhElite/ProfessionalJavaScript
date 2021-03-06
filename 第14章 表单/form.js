/**
 * Created by Elite on 2015/9/2.
 */
function serialize(form){
    var parts=[],
        field=null,
        i,
        len,
        j,
        optLen,
        option,
        optValue;
    for(i=1,len=form.elements.length;i<len;i++){
        field=form.elements[i];
        switch (field.type){
            case "select-one":
            case "select-multiple":
                if(field.name.length){
                    for(j=0,optLen=field.options.length;j<optLen;j++){
                        option=field.options[j];
                        if(option.selected){
                            optValue=""//不包含没有名字的表单字段;
                            if(option.hasAttribute){//Internet Explorer 8 以及更早的版本不支持该方法
                                optValue=option.hasAttribute("value")?option.value:option.text;
                            }else{
                                optValue=option.attributes["value"].specified?option.value:option.text;//在 Internet Explorer 8 以及更早的版本中，attributes 属性会返回元素所有可能属性的集合。
                            }
                            parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(optValue));
                        }
                    }
                }
                break;
            case "undefined":
            case "file":
            case "submit":
            case "reset":
            case "button":
                break;
            case "radio":
            case "checkbox":
                if(!field.checked){
                    break;
                }
            default :
                if(field.name.length){//不包含没有名字的表单字段
                    parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.value));
                }
        }
    }
    return parts.join("&");
}