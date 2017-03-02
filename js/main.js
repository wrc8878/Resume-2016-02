
'use strict';
var runPage;
            runPage = new FullPage({
                id:'pageContain',  //外层包裹id
                slideTime:800,      //每页切换时间
                continuous:true,    //是否循环页面
                effect:{
                transform:{
                    translate:'XY',  
                    scale:[.1, 1],
                    rotate:[0, 0]
                },
                opacity:[0, 1]   //透明度
                },
                mode:'wheel,touch,nav:navBar',
            start:0,
                easing:'ease'
            });
            $(document).ready(function(){
            $(".model1_btn").mouseenter(function(){
            $(".model1_btn").css("background-color","#229BAB");
            });
            $(".model1_btn").click(function(){
            $("#model1").show();
            });
            $(".model1_btn").mouseout(function(){
            $(".model1_btn").css("background-color","#35B5C5");
            });
            $(".model1_close").click(function(){
            $("#model1").hide();
            });
            $("#model1").click(function(){
            $("#model1").hide();
            });
            });
           
            $('#weixin-image').mouseenter(function(){
                 $('#erweima').show();
            });
             $('#weixin-image').mouseout(function(){
                 $('#erweima').hide();
            });