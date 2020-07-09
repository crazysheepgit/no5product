
function clearinput(){
    $('#search').val('');
}

function addinput(){
    $('#search').val(function(){
        if($(this).val()==""){
            $(this).val("口红");
        }
        return this.value;
    });
}

function clearval(){
    $('.ding input').val('');
}

function addval(){
    $('.ding input').val(function(){
        if($(this).val()==""){
            $(this).val("请输入您的Email地址");
        }
        return this.value;
    });
}


function convertStrToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}
