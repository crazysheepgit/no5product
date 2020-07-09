let indexCur = 0;
let timer = null;
$(function(){
    $("#row-left").click(function(){   
        indexCur --;
        if(indexCur < 0){
            indexCur = 4;
        }
        $(".pic>a>img").css("z-index",-1);
        $(".point>li").css("opacity",0.4);
        $($(".pic>a>img")[indexCur]).css("z-index",1);
        $($(".point>li")[indexCur]).css("opacity",1);
    });
    $("#row-right").click(function(){
        indexCur ++;
        if(indexCur > 4){
            indexCur = 0;
        }
        $(".pic>a>img").css("z-index",-1);
        $(".point>li").css("opacity",0.4);
        $($(".pic>a>img")[indexCur]).css("z-index",1);
        $($(".point>li")[indexCur]).css("opacity",1);

    })

    $(".slide>.box").hover(function(){
        $("#row-left").css("opacity",0.9);
        $("#row-right").css("opacity",0.9);
        clearInterval(timer);
    },function(){
        $("#row-left").css("opacity",0.5);
        $("#row-right").css("opacity",0.5);
        loop();
    })


})

    loop();
    function loop(){
        timer = setInterval(function(){
            indexCur ++;
            if(indexCur > 4){
                indexCur = 0;
            }
            $(".pic>a>img").css("z-index",-1);
            $(".point>li").css("opacity",0.4);
            $($(".pic>a>img")[indexCur]).css("z-index",1);
            $($(".point>li")[indexCur]).css("opacity",1);
        },2000)
    }




