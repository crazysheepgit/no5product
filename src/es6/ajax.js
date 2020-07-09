function ajax(url,fnWin,fnFaild){
    var xhr = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                if(fnWin instanceof Function){
                    fnWin(xhr.responseText);
                }
            }else{
                if(fnFaild instanceof Function){
                    fnFaild();
                }
            }
        }
    }
}