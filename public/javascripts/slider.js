var pgBar = $("#pgBar"),
    sliderWindow = $(".slider-window")
    ;

//Slider1 Objects
var Ipad1 = $("#slide1-object1"),
    IpadBg1 = $("#slide1-object2"),
    IpadBgRefl1 = $("#slide1-object3"),
    LogoBg1 = $("#slide1-object4"),
    Logo1 = $("#slide1-object5"),
    logoBgReflect = $("#slide1-object6"),
    hand1 = $("#slide1-object7"),
    icon1 = $("#slider1-icon-front-icon1"),
    icon2 = $("#slider1-icon-front-icon2"),
    icon3 = $("#slider1-icon-front-icon3"),
    icon4 = $("#slider1-icon-back-icon4"),
    icon5 = $("#slider1-icon-front-icon5"),
    icon6 = $("#slider1-icon-back-icon6"),
    icon7 = $("#slider1-icon-front-icon7"),
    icon8 = $("#slider1-icon-back-icon8"),
    icon9 = $("#slider1-icon-front-icon9"),
    icon10 = $("#slider1-icon-front-icon10"),
    icon11 = $("#slider1-icon-front-icon11"),
    icon12 = $("#slider1-icon-front-icon12"),
    icon13 = $("#slider1-icon-front-icon13"),
    icon14 = $("#slider1-icon-back-icon14"),
    icon15 = $("#slider1-icon-back-icon15"),
    icon16 = $("#slider1-icon-back-icon16"),
    text1 = $("#slider1-text1"),
    text2 = $("#slider1-text2")
    ;
//Slider2 Objects
var imac    = $("#slider2-object2"),
    macbook = $("#slider2-object3"),
    ipad    = $("#slider2-object4"),
    iphone2 = $("#slider2-object5"),
    hand2   = $("#slider2-object6"),
    text3   = $("#slider2-text1"),
    text4   = $("#slider2-text2")
    ;
//Slider3 Objects
var boy    = $("#slider3-object2"),
    snow1  = $("#slider3-object3"),
    snow2  = $("#slider3-object4"),
    snow3  = $("#slider3-object5"),
    point1   = $("#slider3-object6"),
    point2   = $("#slider3-object7"),
    point3   = $("#slider3-object8"),
    sl3Txt1 = $("#slider3-text1"),
    sl3Txt2 = $("#slider3-text2"),
    sl3Txt3 = $("#slider3-text3"),
    sl3Txt4 = $("#slider3-text4")
    ;
//Slider4 Objects
var plane1 = $("#slider4-object1"),
    plane2 = $("#slider4-object2"),
    plane3 = $("#slider4-object3"),
    layer1 = $("#slider4-object4"),
    layer2 = $("#slider4-object5"),
    layer3 = $("#slider4-object6"),
    layer4 = $("#slider4-object7"),
    layer5 = $("#slider4-object8"),
    layer6 = $("#slider4-object9"),
    layerShadow = $("#slider4-object10"),
    infiniti = $("#slider4-object11"),
    sl4Txt1 = $("#slider4-text1"),
    sl4Txt2 = $("#slider4-text2"),
    sl4Txt3 = $("#slider4-text3")
    ;
//Slider5 Objects
var vimeoThumb = $("#slider5-object1"),
    vimeoShadow = $("#slider5-object2"),
    vimeoPlayButton = $("#slider5-object3"),
    vimeoIframe = $('#vimeoFrame')[0],
    vimeoPlayer = $f(vimeoIframe),
    sl5Txt1 = $("#slider5-text1"),
    sl5Txt2 = $("#slider5-text2"),
    sl5Txt3 = $("#slider5-text3")
    ;

var tl = new TimelineMax();

tl.addLabel("1")//begin slider1 at 0 sec.
    .call(setBulletGoto)
    .set([Ipad1, IpadBgRefl1], {opacity: 1})
    .from([Ipad1, IpadBgRefl1], 2, {yPercent: 300, opacity: 0, ease: Power2.easeOut})
    .to(IpadBg1, 0.5, {autoAlpha: 1, ease: Power2.easeOut})
    .set(LogoBg1, {autoAlpha: 1, delay: 0.1})
    .to(LogoBg1, 0.4, {scale: 3.6, ease: Power0.easeNone})
    .to(Logo1,   0.5, {scale: 3, autoAlpha: 1, ease: Power0.easeNone}, 2.7)
    .set(hand1, {opacity: 1})
    .from(hand1, 1, {y: 500, ease: Power2.easeOut, repeat: 1, yoyo: true, repeatDelay: 5.2})
    .fromTo(text1, 2, {yPercent: 500, autoAlpha: 0, ease: Power2.easeOut}, {yPercent:0, autoAlpha: 1, ease: Power2.easeOut}, 4.2)
    .fromTo(text2, 1.7, {yPercent: 500, autoAlpha: 0, ease: Power2.easeOut, delay:0.3}, {yPercent: 0, autoAlpha: 1, ease: Power2.easeOut, delay:0.3}, 4.2)
    .set(logoBgReflect, {opacity: 0.8}, 3.5)
    .from(logoBgReflect, 1, {scale: 0.4, ease: Power0.easeNone, repeat: 1, yoyo: true, repeatDelay : 4}, 4.5)
    .set(icon1, {autoAlpha: 1}, 5.2)
    .to(icon1, 3, {xPercent: 1300, yPercent: -150, ease: Power2.easeOut, scale: 1.5}, 5.2)
    .set(icon2, {autoAlpha: 1}, 5.2)
    .to(icon2, 3, {xPercent: 1100, yPercent: 150, ease: Power2.easeOut, delay: 0.2}, 5.2)
    .set(icon3, {autoAlpha: 1}, 5.2)
    .to(icon3, 3, {xPercent: -1200, yPercent: -300, ease: Power2.easeOut, delay: 0.1}, 5.2)
    .set(icon4, {autoAlpha: 1, webkitFilter:"blur(2px)", scale: 0.7}, 5.2)
    .to(icon4, 3, {xPercent: -700, yPercent: 100, ease: Power2.easeOut }, 5.2)
    .set(icon5, {autoAlpha: 1, scale: 1.5}, 5.2)
    .to(icon5, 3, {xPercent: -1200, yPercent: 300, ease: Power2.easeOut, delay: 0.4}, 5.2)
    .set(icon6, {autoAlpha:1,webkitFilter:"blur(2px)", scale: 1.1}, 5.2)
    .to(icon6, 3, {xPercent: -1500, yPercent: 0, ease: Power2.easeOut, delay: 0.1}, 5.2)
    .set(icon7, {autoAlpha: 1, scale: 1.6}, 5.2)
    .to(icon7, 3, {xPercent: -700, yPercent: -100, ease: Power2.easeOut, delay: 0.6}, 5.2)
    .set(icon8, {autoAlpha:1,webkitFilter:"blur(2px)", scale: 0.9}, 5.2)
    .to(icon8, 3, {xPercent: 600, yPercent: 300, ease: Power2.easeOut, delay: 0.6}, 5.2)
    .set(icon9, {autoAlpha: 1, scale: 1.6}, 5.2)
    .to(icon9, 3, {xPercent: 800, yPercent: -400, ease: Power2.easeOut, delay: 0}, 5.2)
    .set(icon10, {autoAlpha: 1, scale: 1.4}, 5.2)
    .to(icon10, 3, {xPercent: 460, yPercent: -180, ease: Power2.easeOut, delay: 0.5}, 5.2)
    .set(icon11, {autoAlpha: 1, scale: 1.4}, 5.2)
    .to(icon11, 3, {xPercent: -460, yPercent: 200, ease: Power2.easeOut}, 5.2)
    .set(icon12, {autoAlpha: 1, scale: 1.5}, 5.2)
    .to(icon12, 3, {xPercent: -1000, yPercent: 50, ease: Power2.easeOut, delay: 0.7}, 5.2)
    .set(icon13, {autoAlpha: 1, scale: 1.4}, 5.2)
    .to(icon13, 3, {xPercent: 850, yPercent: 80, ease: Power2.easeOut, delay: 0.3}, 5.2)
    .set(icon14, {autoAlpha:1,webkitFilter:"blur(2px)", scale: 0.8}, 5.2)
    .to(icon14, 3, {xPercent: 800, yPercent: -200, ease: Power2.easeOut, delay: 0.1}, 5.2)
    .set(icon15, {autoAlpha:1,webkitFilter:"blur(2px)"}, 5.2)
    .to(icon15, 3, {xPercent: 450, yPercent: 100, ease: Power2.easeOut}, 5.2)
    .set(icon16, {autoAlpha:1,webkitFilter:"blur(2px)", scale: 0.9}, 5.2)
    .to(icon16, 3, {xPercent: -460, yPercent: -300, ease: Power2.easeOut}, 5.2)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone, delay: 3}, 4.2)
    .set(pgBar, {width:"0", delay: 0.1})
    .call(sliderForward, null, null, 12.2)//sliderWindow one step to right
    .addLabel("2")//begin slider2 at 12.2 sec.
    .call(setBulletGoto)
    .from(imac, 2, {autoAlpha:0, xPercent: 10}, 13)
    .from(macbook, 2, {autoAlpha:0, xPercent: -20}, 13.2)
    .from(ipad, 2.5, {autoAlpha:0, yPercent: 20}, 13)
    .from(text3, 1.5, {autoAlpha: 0, xPercent: -200, skewX: 50, ease: Power2.easeOut}, 14.5)
    .from(text4, 1.5, {autoAlpha: 0, xPercent: -200, skewX: 50, ease: Power2.easeOut}, 14.7)
    .from(iphone2, 3, {yPercent: 200})
    .from(hand2, 2, {yPercent: 200})
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone}, 19.4)
    .set(pgBar, {width:"0", delay: 0.1})
    .call(sliderForward, null, null, 24.4)//sliderWindow one step to right
    .addLabel("3")//begin slider3 at 24.4 sec.
    .call(setBulletGoto)
    .from(boy, 2, {xPercent: 200, yPercent: 200, scale: 0.5}, 25)
    .from(snow1, 3.5 , {xPercent: 200, yPercent: 200}, 25)
    .from(snow2, 3 , {xPercent: 200, yPercent: 200}, 25)
    .from(snow3, 2.5 , {xPercent: 200, yPercent: 200}, 25)
    .from(sl3Txt1, 1 , {xPercent: 50, rotation:45, autoAlpha: 0}, 27)
    .from(sl3Txt2, 3 , {autoAlpha: 0, ease: Power2.easeIn}, 27)
    .from(sl3Txt3, 1 , {xPercent: 50, yPercent: 200, rotation:75, autoAlpha: 0, delay: 1}, 27)
    .from(sl3Txt4, 1 , {xPercent: 50, yPercent: 200, rotation:75, autoAlpha: 0, delay: 1.3}, 27)
    .to(point1, 2, {autoAlpha: 1, ease: Power2.easeOut, delay: 3}, 27)
    .to(point2, 2, {autoAlpha: 1, ease: Power2.easeOut, delay: 4}, 27)
    .to(point3, 1.5, {autoAlpha: 1, ease: Power2.easeOut, delay: 3.5}, 27)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone, delay: 2}, 29.6)
    .set(pgBar, {width:"0", delay: 0.1})
    .call(sliderForward, null, null, 36.6)//sliderWindow one step to right
    .addLabel("4")
    .call(setBulletGoto)
    .from([plane1, plane2, plane3], 3, {autoAlpha: 0, xPercent: 5}, 37.5)
    .staggerFrom([layer6, layer5, layer4, layer3, layer2, layer1], 1, {yPercent: -200, ease: Power2.easeOut}, 0.2, 40)
    .from(layerShadow, 0.5, {autoAlpha: 0}, 40)
    .set(infiniti, {opacity: 1, rotation: -90})
    .from(infiniti, 1, {rotation: 90})
    .staggerFrom([sl4Txt1, sl4Txt2], 1, {xPercent: -100, yPercent: 500, rotation:-75, autoAlpha: 0}, 0.5, 43)
    .from(sl4Txt3, 1, {xPercent: -50, yPercent: 500, rotation:-45, autoAlpha: 0, scale: 2})
    .staggerTo([layer6, layer5, layer4, layer3, layer2, layer1], 2, {yPercent: -200, ease: SlowMo.ease.config(0.5, 0.5, false)}, 1.5, 45)
    .to(layerShadow, 0.5, {autoAlpha: 0}, 52.5)
    .to(plane3, 2, {yPercent: -16}, 46.5)
    .to(plane2, 2, {yPercent: -8}, 47)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone, delay: 2}, 49)
    .set(pgBar, {width:"0", delay: 0.1})
    .call(sliderForward, null, null, 56)//sliderWindow one step to right
    .addLabel("5")
    .call(setBulletGoto)
    .from([vimeoThumb, vimeoPlayButton], 2, {autoAlpha: 0, yPercent: -20}, 58)
    .from(vimeoShadow, 1, {autoAlpha: 0}, 58)
    .fromTo(sl5Txt1, 1, {autoAlpha: 0, yPercent: 300, xPercent: 50, scale: 2}, {autoAlpha: 1, yPercent: 0, xPercent: 50, scale: 1,ease: Power2.easeOut}, 60)
    .to(sl5Txt1, 1.5, {xPercent: 0, ease: Power2.easeOut}, 62)
    .from(sl5Txt2, 1.5, {autoAlpha: 0, xPercent: 200, ease: Power2.easeOut, delay: 0.5}, 62)
    .from(sl5Txt3, 1.5, {autoAlpha: 0, xPercent: 350, ease: Power2.easeOut, delay: 1}, 62)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone, delay: 3})
    .call(goTo, [1])
;

//initial tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip({animation: true})
})
//hover on slider
$(".header-box-container").mouseover(function() {
    $('.bullet-container').fadeTo("fast", 1);
    $('.next-button').fadeTo("fast", 1);
    $('.previous-button').fadeTo("fast", 1);
});
//mouseout of slider
$(".header-box-container").mouseleave(function() {
    $(".bullet-container").fadeOut("slow");
    $(".next-button").fadeOut("slow");
    $(".previous-button").fadeOut("slow");
});
//slider window swipe to right
function sliderForward(){
    resetFrames();
    TweenMax.to(sliderWindow, 2, {xPercent: (tl.currentLabel())*(-100), ease: Power2.easeOut});
}
//set style for bullets
function setBulletGoto(){
    $('[id^="bullet"]').removeClass('ms-bullet-selected');
    $('#bullet' + tl.currentLabel()).addClass('ms-bullet-selected');
}
//go to one slider
function goTo(sliderNr){
    resetFrames();
    TweenMax.to(sliderWindow, 2, {xPercent: (sliderNr-1)*(-100), ease: Power2.easeOut});
    tl.resume(sliderNr.toString());
}
//side button click
function next(direction){
    if((tl.currentLabel() == '5' && direction == 1) || (tl.currentLabel() == '1' && direction == -1)) {
        return;
    } else {
        goTo(Number(tl.currentLabel()) + direction);
    }
}
/*=======Vimeo events=======*/
//click to play vimeo video
vimeoPlayButton.bind('click', function() {
    vimeoPlayButton.fadeOut(0);
    $("#vimeoFrame").fadeTo(0, 1).css("pointer-events", "auto");
    vimeoPlayer.api("seekTo", "0").api('play');
    if (tl.time() >= 65) {
        tl.pause();
    } else {
        tl.addPause(65);
    }
});

vimeoPlayer.addEvent('ready', function(){
    vimeoPlayer.addEvent('finish', VimeoOnFinish);
});

function VimeoOnFinish() {
    vimeoPlayButton.fadeIn(0);
    $("#vimeoFrame").fadeTo(0, 0).css("pointer-events", "none");
    tl.removePause(65);
    tl.play();
}

function resetFrames() {
    vimeoPlayButton.fadeIn(0);
    $("#vimeoFrame").fadeTo(0, 0).css("pointer-events", "none");
    vimeoPlayer.api("seekTo", "0");
    tl.removePause(65);
}
/*=======END Vimeo events=======*/

/*=======swipe events=======*/
var hammer = new Hammer.Manager(sliderWindow[0]);
var swipe     = new Hammer.Swipe();
hammer.add(swipe);
hammer.on('swipeleft', function (ev) {
    ev.preventDefault();
    next(1);
});
hammer.on('swiperight', function (ev) {
    ev.preventDefault();
    next(-1);
});
/*=======END swipe events=======*/
