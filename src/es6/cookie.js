function $cookie(key,value,json){
    json = json || {};
    let cookie_str = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    if(!isNaN(json.expires)){
        let date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookie_str += ';expires=' + date;
    }
    if(json.path){
        cookie_str += ';path=' + json.path;
    }
    document.cookie = cookie_str;
}

function $getCookie(key){
    let cookie = document.cookie;
    let arr = cookie.split('; ');
    for(let i = 0,len = arr.length;i < len;i ++){
        let list = arr[i].split('=');
        if(list[0] === encodeURIComponent(key)){
            return decodeURIComponent(list[1]);
        }
    }
}