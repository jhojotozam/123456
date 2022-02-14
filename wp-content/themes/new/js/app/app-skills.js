var skills = {

    init:function(){


        //blasting headinga
        jQuery("h1,h2").blast({
            delimiter: "character",
            tag: "span"
        })

        var sectionSkills = jQuery('.js-page-skills');

        var b = 300;
        sectionSkills.find(".chart footer div").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.css('width',el.attr('data-width'));

            },b);

            b = b + 200;
        });

        var a = 0;

        sectionSkills.addClass('loaded');

        sectionSkills.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });


        setTimeout(function(){

            sectionSkills.find(".blast").removeClass('animated bounceIn');
            sectionSkills.find(".blast").css('opacity',1);

            sectionSkills.find(".blast").mouseenter(function (){

                var el = jQuery(this);

                jQuery(this).addClass('animated rubberBand');
                jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);




    },
    destroy:function(){

        //removes convas
        jQuery('script#tagcanvas').remove();

    },

}
module.exports = skills;