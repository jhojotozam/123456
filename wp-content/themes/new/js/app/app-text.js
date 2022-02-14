var text = {

    init:function(){


        this.logo = jQuery('.logo-big');

        jQuery(window).on( "scroll",text.logoScroll);

        //blasting headinga
        jQuery("h1,h2").blast({
            delimiter: "character",
            tag: "span"
        })

        var pageText = jQuery('.js-page-text');

        var a = 0;

        pageText.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });


        setTimeout(function(){

            pageText.find(".blast").removeClass('animated bounceIn');
            pageText.find(".blast").css('opacity',1);

            pageText.find(".blast").mouseenter(function (){

                var el = jQuery(this);

                jQuery(this).addClass('animated rubberBand');
                jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);




    },
    logoScroll:function() {

        if (jQuery(window).scrollTop() > 350) {
            text.logo.fadeIn();
        } else {
            text.logo.fadeOut();
        }
        clearTimeout(jQuery.data(this, 'scrollTimer'));
        jQuery.data(this, 'scrollTimer', setTimeout(function () {

            var scrollTop = jQuery(window).scrollTop();
            text.logo.css('margin-top', scrollTop);


        }, 150));

    },
    destroy:function(){

        jQuery(window).off( "scroll",text.logoScroll);

    },

}
module.exports = text;