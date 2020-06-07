$(document).ready(function ($) {

    // sticky_menu
    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 75) {
                $('#top-head').addClass('stickytop');
            }
            else {
                $('#top-head').removeClass('stickytop');
            }
        });
    });


    // scroll menu
    var lastId,
        topMenu = $('#sticky-menu'),
        topMenuHeight = topMenu.outerHeight() + 90,
        menuItems = topMenu.find('a'),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr('href'));
            if (item.length) { return item; }
        });


        
    menuItems.click(function(e){
        var href = $(this).attr('href'),
            offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 20;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1200);
        e.preventDefault();
    });

    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : '';

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass('active')
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });




// scroll to down
    $(".logo").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 200;
        $('body,html').animate({scrollTop: top}, 1200);

    });

    // animation

    // var tl1 = new TimelineMax({delay:1}),
    // time = 1;
    // tl1.to('.top-window.colored', time ,{autoAlpha:1})
    // .to('.top-window.no-clr', time ,{autoAlpha:0}, 0)
    //
    // .to('.top-wall.colored', time ,{autoAlpha:1}, '-=.7')
    // .to('.top-wall.no-clr', time ,{autoAlpha:0},'-='+time)
    //
    // .to('.top-brush.colored', time ,{autoAlpha:1}, '-=.7')
    // .to('.top-brush.no-clr', time ,{autoAlpha:0},'-='+time);



    var controller = new ScrollMagic.Controller();



// build tween photo
    var time2 = .5;
    var tween = new TimelineMax({ ease: Power0.easeNone})
        .to('.hand', .7*time2 ,{ transformOrigin:'0% 100%', rotation:'3', x:15})
        .to('.blick', time2 ,{autoAlpha:1})
        .staggerTo('.colored-1' , time2, {autoAlpha:1}, .25, '-=.3')
        .staggerTo('.no-clr-1' , time2, {autoAlpha:0}, .25, '-=1.1');

// build scene2

    var scene = new ScrollMagic.Scene({
        triggerElement: "#photographer",
        triggerHook: 0.55
    })

        .setTween(tween)
        .addTo(controller);

    // build tween screen 2
    var time3 = .5;
    var tween2 = new TimelineMax({ ease: Power0.easeNone})
        .staggerTo('.colored-2' , time3, {autoAlpha:1}, .3)
        .staggerTo('.no-clr-2' , time3, {autoAlpha:0}, .3, 0);

// build scene2

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#triger-two-screen",
        triggerHook: 0.55
    })

        .setTween(tween2)
        .addTo(controller);


    // build tween screen 3
    var time4 = .5;
    var tween3 = new TimelineMax({ ease: Power0.easeNone})

        .staggerTo('.colored-3' , time4, {autoAlpha:1}, .3)
        .staggerTo('.no-clr-3' , time4, {autoAlpha:0}, .3, 0);
    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#triger-three-screen",
        triggerHook: 0.55
    })
    .setTween(tween3)
    .addTo(controller);
// end build scene3







// build tween scene4
    var delay = .3;
    var tween4 = new TimelineMax({ ease: Power0.easeNone})
        .fromTo('#srvs-upgs1 .cls-6', delay, {fill: 'transparent'}, {fill: '#ffbec0'}, '+=.1')
        .fromTo(['#pink-fill, #pink-fill2'], delay, {transformOrigin:'0 0', scale:0}, {scale:1}, 0)
        .fromTo('#orange-path path  ', delay, {fill: '#ebebeb'}, {fill: '#ffbe23'})
        .fromTo('#srvs-upgs2 .cls-4', delay, {fill: '#bdbdbd'}, {fill: '#ff8116'}, '-='+delay)
        .fromTo('.scale-win', delay, {transformOrigin:'100% 50%', scale:0}, {scale:1})
        .fromTo('#srvs-upgs3 .cls-10', delay, {fill: 'transparent'}, {fill: '#00be86'}, '-=.1')
        .fromTo('#green-fill path', delay, {fill: '#ebebeb'}, {fill: '#00d5a4'})
        .fromTo('#srvs-upgs2 .cls-6', delay, {fill: '#bdbdbd'}, {fill: '#00be86'}, '-='+delay);
// end build scene4

    var scene_4 = new ScrollMagic.Scene({
        triggerElement: "#services",
        triggerHook: 0.5
    })
        .setTween(tween4)
        .addTo(controller);

// end build scene i'm here

    var drow = new TimelineMax();
    drow
        .to('#im-here', .5 , {ease: Bounce.easeOut, y: 60, autoAlpha:1})
        .staggerFromTo("#im-here .letter-s", .1, {drawSVG:'0' }, {drawSVG:'100%'}, .1)
        .fromTo("#im-here #last-line", .5, {drawSVG:'0' }, {drawSVG:'100%'});
// end build i'm here

    var scene_5 = new ScrollMagic.Scene({
        triggerElement: "#map-wrap ",
        triggerHook: 0.5
    })
        .setTween(drow)
        .reverse(false)
        .addTo(controller);

// end build scene4


    $(window).on('resize load', function () {
        var width = $(window).width();

        if (width > 768 ) {
            $('#sticky-menu').removeAttr("id");
            // build tween prlx
            var prlx_tween = new TimelineMax({ ease: Power0.easeNone})
                .to('.objkt-prlx-1', 3, {ease: Power0.easeNone, transformOrigin:'50% 50%', y:-150, rotation: 20})
                .to('.objkt-prlx-2', 3, {ease: Power0.easeNone, transformOrigin:'50% 50%', y:130, rotation: -20},0)
                .to('.objkt-prlx-3', 3, {ease: Power0.easeNone, transformOrigin:'50% 50%', x:50, y:50, rotation: -30},0);

// end build scene prlx

            var scene_prlx = new ScrollMagic.Scene({
                triggerElement: "#about",
                triggerHook: 0.75,
                duration: '150%'
            })

                .setTween(prlx_tween)
                .addTo(controller);
// end build prlx
        }
        else {
            $('.nav-menu').attr("id", "sticky-menu");
            $('#sticky-menu').css({
                // 'display':'none'
            });
            $('.wrap-menu').removeClass('slicknav_open');
        }


    });
    $('.slicknav_btn').click(function (evt) {
        evt.preventDefault();
        $('#sticky-menu').slideToggle(250);
        $('.wrap-menu').toggleClass('slicknav_open');
    });

    $('#sticky-menu a').click(function () {
        $('#sticky-menu').slideUp(250);
        $('.wrap-menu').removeClass('slicknav_open');
    });

    $(window).on("load resize",function(){
        var width = $(window).width();

        if (width > 768 ) {
            $('#sticky-menu').css({
                'display': 'flex'
            })
        }
    });

// clrbox

    $(".gallery1").colorbox({rel:'group1',width:"90%", height:"90%"});
    $(".gallery2").colorbox({rel:'group2',width:"90%", height:"90%"});
    $(".gallery3").colorbox({rel:'group3',width:"90%", height:"90%"});
    $(".gallery4").colorbox({rel:'group4',width:"90%", height:"90%"});
    $(".gallery5").colorbox({rel:'group5',width:"90%", height:"90%"});


    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        margin:0,
        loop: true,
        smartSpeed:1700,
        mouseDrag: false,
        touchDrag: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000

    });

});


