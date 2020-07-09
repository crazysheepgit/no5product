
class Product{
    constructor(){
       
        //购物车按钮
        this.buy = $('.trigger')[0];
        //购买按钮
        this.addToCart = document.querySelectorAll('.add');
        //初始化页面
        this.init();
        //添加事件
        this.addEvent();
    }
    init(){
        //创建storage对象
        let storage = window.localStorage;
        //获取storage记录
        let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
        //转成对象
        let storage_obj = convertStrToObj(storage_str);
        let sum = 0;
        for(let key in storage_obj){
            sum += storage_obj[key].num;
        }
        this.buy.firstElementChild.innerHTML = `${sum}`;
    }
    addEvent(){
        let that = this;
        //购物车事件
        this.buy.onclick = function(){
            location.href = 'cart.html';
        }
        //购买按钮
        for(let i = 0,len = this.addToCart.length;i < len;i ++){
            this.addToCart[i].onclick = function(){
               
                //获取商品ID
                let goodId = this.parentNode.parentNode.getAttribute('data-good-id');
                //获取商品名称
                let goodName = this.parentNode.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
                //获取价格
                let goodPrice = parseInt(this.parentNode.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
                //获取缩略图
                let goodSrc = this.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.src;

                //创建storage对象
                let storage = window.localStorage;
                //获取storage记录
                let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
                //转成对象
                let storage_obj = convertStrToObj(storage_str);
                //判断当前购买商品是否在购物车中存在 
                if(goodId in storage_obj){
                    //存在:找到当前商品的数量 + 1
                    storage_obj[goodId].num ++;
                }else{
                    storage_obj[goodId] = {
                        "id" : goodId,
                        "name" : goodName,
                        "price" : goodPrice,
                        "src" : goodSrc,
                        "num" : 1
                    }
                }
                //重新存入storage
                storage.setItem('carts',JSON.stringify(storage_obj));

                //获取购物车按钮上的值
                let str = that.buy.firstElementChild.innerHTML;
                let re = /(\d+)/;
                let num = Number(re.exec(str)[1]);
                num ++;
                that.buy.firstElementChild.innerHTML = `${num}`;
            }
        }
    }
}
window.onload = function(){
    new Product();
}

// function $(selector){
//     return document.querySelector(selector);
// }