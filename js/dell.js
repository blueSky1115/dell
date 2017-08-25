$(function () {
    var time = 6;
    $("#J_btn").click(function () {
        Reload();
    });
    $("#J_againBtn").click(function () {
        Reload();
    });
    $("#J_againBtn2").click(function () {
        Reload();
    });

    $("#J_rule").click(function () {
        $(".zero").addClass("hide");
        rule();
        $(".close1").click(function(){
            close1();
            $(".page").css("backgroundImage", "url(img/bg.png)").css("webkitTransition","all 1s ease");
            $(".zero").removeClass("hide").css("webkitTransition","all 1s ease");
        })

    });
    $("#J_prize").click(function () {
        $(".zero").addClass("hide");
        prize();
        $(".close2").click(function(){
            close2();
            $(".page").css("backgroundImage", "url(img/bg.png)");
            $(".zero").removeClass("hide");
        })
    });

    function pageOne(){
        $(".page").css("backgroundImage", "url(img/newBg.png)").css("webkitTransition","all 1s ease");
        $(".zero,.two").addClass("hide").css("webkitTransition","all 1s ease");
        $(".one").removeClass("hide").css("webkitTransition","all 1s ease");
    }
    function pageTwo(){
        $(".page").css("backgroundImage", "url(img/newBg2.png)").css("webkitTransition","all 1s ease");
        $(".zero,.one").addClass("hide").css("webkitTransition","all 1s ease");
        $(".two").removeClass("hide").css("webkitTransition","all 1s ease");

    }
    function Reload(){
        var num=parseInt(Math.random()*2);
        time --;
        if (num === 0) {
            pageOne();
            $("#J_oneRule").click(function () {
                rule();
                $(".close1").click(function(){
                    close1();
                    $(".page").css("backgroundImage", "url(img/newBg.png)").css("webkitTransition","all 1s ease");
                    $(".one").removeClass("hide").css("webkitTransition","all 1s ease");
                    $(".two,.zero").addClass("hide").css("webkitTransition","all 1s ease");
                })
            });
            $("#J_onePrize").click(function () {
                prize();
                $(".close2").click(function(){
                    close2();
                    $(".page").css("backgroundImage", "url(img/newBg.png)").css("webkitTransition","all 1s ease");
                    $(".one").removeClass("hide").css("webkitTransition","all 1s ease");
                    $(".two,.zero").addClass("hide").css("webkitTransition","all 1s ease");
                })
            });
        } else {
            pageTwo();
            $("#J_twoRule").click(function () {
                rule();
                $(".close1").click(function(){
                    close1();
                    $(".page").css("backgroundImage", "url(img/newBg2.png)").css("webkitTransition","all 1s ease");
                    $(".two").removeClass("hide").css("webkitTransition","all 1s ease");
                    $(".one,.zero").addClass("hide").css("webkitTransition","all 1s ease");
                })

            });
            $("#J_twoPrize").click(function () {
                prize();
                $(".close2").click(function(){
                    close2();
                    $(".page").css("backgroundImage", "url(img/newBg2.png)").css("webkitTransition","all 1s ease");
                    $(".two").removeClass("hide").css("webkitTransition","all 1s ease");
                    $(".one,.zero").addClass("hide").css("webkitTransition","all 1s ease");
                })
            });
        }

        if(time==0){
            $(".share").removeClass("hide");
        }
    }

    function rule(){
        $(".page").css("backgroundImage", "url(img/ruleBg.png)").css("webkitTransition","all 1s ease");
        $(".two,.zero,.one").addClass("hide").css("webkitTransition","all 1s ease");
        $(".myRule").removeClass("hide").css("webkitTransition","all 1s ease");
    }
    function prize(){
        $(".page").css("backgroundImage", "url(img/prizeBg.png)").css("webkitTransition","all 1s ease");
        $(".two,.zero,.one").addClass("hide").css("webkitTransition","all 1s ease");
        $(".myPrize").removeClass("hide").css("webkitTransition","all 1s ease");
    }

    function close1(){
        $(".myRule").addClass("hide").css("webkitTransition","all 1s ease");
    }
    function close2(){
        $(".myPrize").addClass("hide").css("webkitTransition","all 1s ease");
    }

});
