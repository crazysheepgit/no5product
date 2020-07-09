
class List{
    constructor(){
        this.url = "../libs/data/page.json";
        this.$goods = $(".brand-list .b-l-right .cplist");
        this.$i = $("#listnumber");
        this.load();
    }
    load(){
        var that = this;
        $.get(this.url,function(data){
            that.display(data);
            that.$i.last().html(data.length);
        })
    }
    display(data){
        let str = "";
        for(var i=0;i<data.length;i++){
            str += `<dl data-good-id="${data[i].goodId}">
                        <dt>
                            <a href="details.html" target="_blank">
                                <img src="${data[i].src}" width="200" height="200" />
                            </a>
                        </dt>
                        <dd class="pro-name">
                            <a href="details.html" target="_blank">${data[i].title}</a>
                        </dd>
                        <dd class="pro-price">￥<span><span>${data[i].price}</span></span><span class="zhekou">${data[i].discount}</span>
                        </dd>
                        <dd class="buybtn">
                            <a href="javascript:;" class="add">加入购物车</a>
                            <a href="javascript:;" class="shouc">收藏</a>
                        </dd>
                    </dl>`
        }
        $(".cplist").append(str)
    }
}
$(function(){
    new List();
})



