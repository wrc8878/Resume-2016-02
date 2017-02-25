/*
* @Author: ruochen
* @Date:   2017-02-23 22:00:16
* @Last Modified by:   ruochen
* @Last Modified time: 2017-02-24 11:50:47
*/

'use strict';
var runPage;
            runPage = new FullPage({
                id:'pageContain',
                slideTime:800,
                continuous:false,
                effect:{
                transform:{
                    translate:'Y',
                    scale:[.1, 1],
                    rotate:[0, 0]
                },
                opacity:[0, 1]
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