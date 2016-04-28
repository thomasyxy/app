window.onload = function(){
    jQuery.extend(jQuery.easing, {
        easeOutBounce: function(x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        }
    });

    function mybone() {
        var ele = $("#bone").stop(true, false);
        ele.css({
            "left": "0",
            "top": "0",
            "transform": "rotateZ(0deg)"
        });
        $({
            top: 0,
            tran: 0
        }).animate({
            top: 180,
            tran: 90
        }, {
            duration: 1500,
            specialEasing: {
                left: 'easeOutCubic',
                top: 'easeOutBounce'
            },
            step: function() {
                ele.css({
                    "top": this.top + "px",
                    "transform": "rotateZ(" + this.tran + "deg)"
                });
                ele.addClass('boneshow')
            },
            complete: function() {
                ele.css({
                    "top": "180px",
                    "transform": "rotateZ(90deg)"
                });
            }
        });
    }

    $(document).bind('scroll', function(e) {
        var scrollValue = $(this).scrollTop();
        if (scrollValue > 700) {
            if ($('#bone').hasClass('boneshow')) {
                return;
            } else {
                $('#bone').css('display', 'block');
                mybone();
            }
        } else {
            $('.boneshow').fadeOut();
            $('#bone').removeClass('boneshow');
        }
    })
    $('#bone').click(function(e) {
        $("html,body").animate({
            scrollTop: 0
        }, 200);
    });







    function overtext(){
        var text = $('#blog-contenter .text');
        for(i=0;i<text.length;i++){
            if(text.eq(i).css('height') === '280px'){
                text.addClass('textover');
            }
        }

    }
    overtext();
}
