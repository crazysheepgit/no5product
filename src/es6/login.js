class Registor{
    constructor(){
        //属性
        this.uname = this.$('#txtRegUserName');
        this.upwd = this.$('#txtRegPassword');
        this.okwd = this.$('#txtRePassword');
        this.uemail = this.$('#txtEmail');
        this.uyzm = this.$('#txtVerifyCode');
        this.reg = this.$('#btnUserRegSubmit');
        this.addEvent();
    }
    addEvent(){
        this.uname.onblur = ()=>{
            let re = /^[\u4e00-\u9fa5]{3,30}$/;
            let str = this.uname.value;
            if(!re.test(str)){
                alert('用户名的长度应为3～30个字符之间！');
                this.uname.value = '';
            }
        }

        this.upwd.onblur = ()=>{
            let re = /^\w{6,16}$/;
            let str = this.upwd.value;
            if(!re.test(str)){
                alert('密码的长度应该为6～16个字符之间！');
                this.upwd.value = '';
            }
        }

        this.okwd.onblur = ()=>{
            let pwd = this.upwd.value;
            let cpwd = this.okwd.value;
            if(pwd !== cpwd){
                alert('两次密码不一致！');
                this.okwd.value = '';
            }
        }

        this.uemail.onblur = ()=>{
            let re = /^[a-zA-Z0-9_.-]+@(126|163|qq)\.(com|cn)$/;
            let str = this.uemail.value;
            if(!re.test(str)){
                alert('必须是126、163、qq邮箱中的一种，必须是.com或者.cn结尾');
                this.uemail.value = '';
            }
        }

        this.uyzm.onblur = ()=>{
            let re = /^(3536)$/;
            let str = this.uyzm.value;
            if(!re.test(str)){
                alert('验证码错误');
                this.uyzm.value = '';
            }
        }
        this.reg.onclick = ()=>{
            if(!this.uname.value || !this.upwd.value || !this.okwd.value || !this.uemail.value || !this.uyzm.value){
                alert('信息不能为空！');
                return; //退出函数
            }
            //获取用户名、密码
            let uname = this.uname.value;
            let upwd = this.upwd.value;

            //获取cookie
            let cookie_str = $getCookie('registors') ? $getCookie('registors') : '';
            //转对象
            let cookie_obj = convertStrToObj(cookie_str);
            //判断对象中是否有当前注册的用户
            if(uname in cookie_obj){
                //存在
                alert('用户名已存在！');
                return;
            }else{
                //不存在，将用户添加到对象中
                cookie_obj[uname] = upwd;
            }
            //存入cookie
            $cookie('registors',JSON.stringify(cookie_obj),{
                expires : 7,
                path : '/'
            })
            this.uname.value = this.upwd.value = this.okwd.value = this.uemail.value = this.uyzm.value = '';
            alert('注册成功');
        }
    }
    $(selector){
        return document.querySelector(selector);
    }
}

class Login{
    constructor(){
        this.lname = this.$('#lname');
        this.lpwd = this.$('#lpwd');
        this.lyzm = this.$('#lyzm');
        this.login = this.$('#btnLogin');
        this.addEvent();
    }
    addEvent(){
        this.lname.onblur = ()=>{
            let re = /^[\u4e00-\u9fa5]{3,30}$/;
            let str = this.lname.value;
            if(!re.test(str)){
                alert('用户名的长度应为3～30个字符之间！');
                this.lname.value = '';
            }
        }
        this.lpwd.onblur = ()=>{
            let re = /^\w{6,16}$/;
            let str = this.lpwd.value;
            if(!re.test(str)){
                alert('密码的长度应该为6～16个字符之间！');
                this.lpwd.value = '';
            }
        }
        this.lyzm.onblur = ()=>{
            let re = /^(7955)$/;
            let str = this.lyzm.value;
            if(!re.test(str)){
                alert('验证码错误');
                this.lyzm.value = '';
            }
        }

        this.login.onclick = ()=>{
            // 获取用户名密码
            let lname = this.lname.value;
            let lpwd = this.lpwd.value;
            //获取cookie
            let cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
            //转对象
            let cookieObj = convertStrToObj(cookieStr);
            //判断是否存在 
            if(lname in cookieObj){
                //在
                if(lpwd === cookieObj[lname]){
                    alert('登录成功！');
                    location.href = 'http://localhost/no5product/dist/index.html';
                }else{
                    alert('密码错误！');
                }
            }else{
                alert('用户名不存在，去注册！');
                this.lname.value = this.lpwd.value = '';
            }
        }
    }
    $(selector){
        return document.querySelector(selector);
    }
}





window.onload = function(){
    new Registor();
    new Login();
}
