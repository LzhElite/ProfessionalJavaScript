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
                            optValue=""//������û�����ֵı��ֶ�;
                            if(option.hasAttribute){//Internet Explorer 8 �Լ�����İ汾��֧�ָ÷���
                                optValue=option.hasAttribute("value")?option.value:option.text;
                            }else{
                                optValue=option.attributes["value"].specified?option.value:option.text;//�� Internet Explorer 8 �Լ�����İ汾�У�attributes ���Ի᷵��Ԫ�����п������Եļ��ϡ�
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
                if(field.name.length){//������û�����ֵı��ֶ�
                    parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.value));
                }
        }
    }
    return parts.join("&");
}