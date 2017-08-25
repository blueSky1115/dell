$(function(){
    var pageH = 504;
    var pageW = 320;
    var winH = $(window).height()||504;
    var winW = $(window).width()||320;
    var scale = 1;
    var parm = 0;
    if((winH/winW)>(pageH/pageW)){
        scale=winW/pageW;
        parm="scale("+scale+")";
        $(".page-container").css("webkitTransform",parm);
        var mt = 0;
        mt=-(pageH/2)*scale;
        $(".page-container").css("marginTop", mt).css("left", 0).css("top", "50%");
    }else if((winH/winW)<(pageH/pageW)){
        scale=winH/pageH;
        parm="scale("+scale+")";
        $(".page-container").css("webkitTransform", parm);
        var ml = 0;
        ml=-(pageW/2)*scale;
        $(".page-container").css("marginLeft", ml).css("top", 0).css("left", "50%");
    }else{
        scale = winH / pageH;
        parm = "scale(" + scale + ")";
        $(".page-container").css("webkitTransform", parm);
        var ml = 0;
        ml = -(pageW/2) * scale;
        $(".page-container").css("marginLeft", ml).css("top",0).css("left", "50%");
    }
});