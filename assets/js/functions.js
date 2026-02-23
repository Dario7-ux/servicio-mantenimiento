(function () {
    
    "use strict";
    

    jQuery(document).ready( function( $ ){
        //show popup video
        $("a[rel^='prettyPhoto[videos]']").prettyPhoto({
            animation_speed:'normal',
            theme:'light_rounded',
            social_tools: false,
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            default_width: 800,
            default_height: 450,
        });


    /**********************************************************************
    * Login Ajax
    **********************************************************************/
        $('#pbrlostpasswordform').hide();
        $('#modalLoginForm form .btn-cancel').on('click', function(){  
            $('#modalLoginForm').modal( 'hide' ); 
        } );



        // sign in proccess
        $('form.login-form').on('submit', function(){
                var $this= $(this);
                $('.alert', this).remove(); 
                $.ajax({
                  url: strollikAjax.ajaxurl,
                  type:'POST',
                  dataType: 'json',
                  data:  $(this).serialize()+"&action=pbrajaxlogin"
                }).done(function(data) {
                    if( data.loggedin ){
                        $this.prepend( '<div class="alert alert-info">'+data.message+'</div>' );
                        location.reload(); 
                    }else {
                        $this.prepend( '<div class="alert alert-warning">'+data.message+'</div>' );
                    }
                });
                return false; 
         } );
        $('form .toggle-links').on('click', function(){
            $('.form-wrapper').hide();
            $($(this).attr('href')).show(); 
            return false;
        } );

         // sign in proccess
        $('form.lostpassword-form').on('submit', function(){
                var $this= $(this);
                $('.alert', this).remove(); 
                $.ajax({
                  url: strollikAjax.ajaxurl,
                  type:'POST',
                  dataType: 'json',
                  data:  $(this).serialize()+"&action=pbrajaxlostpass"
                }).done(function(data) {
                    if( data.loggedin ){
                        $this.prepend( '<div class="alert alert-info">'+data.message+'</div>' );
                        location.reload(); 
                    }else {
                        $this.prepend( '<div class="alert alert-warning">'+data.message+'</div>' );
                    }
                });
                return false; 
        } );


        //Sticky menu header
        var nav = jQuery('.has-sticky');
        if( nav ){
            jQuery(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    nav.addClass("keeptop");
                } else {
                    nav.removeClass("keeptop");
                }
            });
        }   
    


         //Offcanvas Menu
        $('[data-toggle="offcanvas"], .btn-offcanvas').on('click', function () { 
            $('.row-offcanvas').toggleClass('active');
            $('#pbr-off-canvas').toggleClass('active');           
        });



        //mobile click
        $('#main-menu-offcanvas .caret').on('click', function () {
            if( jQuery(this).parent().children().hasClass('show') ){
                jQuery(this).parent().children().removeClass('show');
            }else
                jQuery(this).parent().children().addClass('show');
        });

        $('.showright').on('click', function(){
             $('.offcanvas-showright').toggleClass('active');   
        } );
        
	
        /*---------------------------------------------- 
         *    Apply Filter        
         *----------------------------------------------*/
        jQuery('.isotope-filter li a').on('click', function(){
           
            var parentul = jQuery(this).parents('ul.isotope-filter').data('related-grid');
            jQuery(this).parents('ul.isotope-filter').find('li a').removeClass('active');
            jQuery(this).addClass('active');
            var selector = jQuery(this).attr('data-option-value'); 
            jQuery('#'+parentul).isotope({ filter: selector }, function(){ });
            
            return(false);
        });

        /**
         *
         */
        $(".dropdown-toggle-overlay").on('click', function(){ 
               $($(this).data( 'target' )).addClass("active"); 
        } ); 

         $(".dropdown-toggle-button").on('click', function(){ 
               $($(this).data( 'target' )).removeClass("active"); 
               return false;
        }); 
        /**
         *
         */
        $(".wpb_wrapper .widget-title .subtitle").each( function(){
           //  $(this).append( '<em class="icon-bg">'+$(this).html()+'</em>' )

        } );
	    /** 
         * 
         * Automatic apply  OWL carousel
         */
        $(".owl-carousel-play .owl-carousel").each( function(){
            var config = {
                navigation : false, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                pagination : $(this).data( 'pagination' ),
                autoHeight: true
                //afterAction: afterAction
             }; 
        
            var owl = $(this);
            if( $(this).data('slide') == 1 ){
                config.singleItem = true;
            }else {
                config.items = $(this).data( 'slide' );
            }
            if ($(this).data('desktop')) {
                config.itemsDesktop = $(this).data('desktop');
            }
            if ($(this).data('desktopsmall')) {
                config.itemsDesktopSmall = $(this).data('desktopsmall');
            }
            if ($(this).data('desktopsmall')) {
                config.itemsTablet = $(this).data('tablet');
            }
            if ($(this).data('tabletsmall')) {
                config.itemsTabletSmall = $(this).data('tabletsmall');
            }
            if ($(this).data('mobile')) {
                config.itemsMobile = $(this).data('mobile');
            }
            if ( $('.pbr-owl-thumbs li', $(this).parent()).length > 0) {
                config.afterAction = function() {
                    $('.pbr-owl-thumbs li').removeClass('active');
                    $('.pbr-owl-thumbs li').eq(this.owl.currentItem).addClass('active');
                };
            }
            $(this).owlCarousel( config );
            $('.left',$(this).parent()).on('click', function(){
                  owl.trigger('owl.prev');
                  return false; 
            });
            $('.right',$(this).parent()).on('click', function(){
                owl.trigger('owl.next');
                return false; 
            });
            $('.thumbs li', $(this)).on('click', function(){
                owl.trigger('owl.next');
                return false; 
            });
            $('.pbr-owl-thumbs li', $(this).parent()).on('click', function(){
                var index = $(this).index();
                owl.trigger('owl.goTo', index);
                $('.pbr-owl-thumbs li').removeClass('active');
                $(this).addClass('active');
                return false; 
            });
            //owl.config.afterAction = 
            
        } );
        

        /**
         *
         */
        if( $('.page-static-left') ){
            $('.page-static-left .button-action').on('click', function(){
                $('.page-static-left').toggleClass('active');
            } );
        }

        //fix map
        if( $('.wpb_map_wraper').length>0 ){
             $('.wpb_map_wraper').on('click', function () {
                $('.wpb_map_wraper iframe').css("pointer-events", "auto");
            });

            $( ".wpb_map_wraper" ).mouseleave(function() {
              $('.wpb_map_wraper iframe').css("pointer-events", "none"); 
            });
        }
         //counter up
        if($('.counterUp').length > 0){
            $('.counterUp').counterUp({
                delay: 10,
                time: 1500
            });
        }

        
    if( $('html').attr('dir') === 'rtl' ){
            $('[data-vc-full-width="true"]').each( function(i,v){
                $(this).css('right' , - $(this).offset().left ).css( 'left' , 'auto');
            });
        }

    } );
} )( jQuery );
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 