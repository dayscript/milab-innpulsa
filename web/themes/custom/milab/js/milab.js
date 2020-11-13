/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      //alert("I'm alive!");
		$(".home-slider").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 1,
		  center: true,
		  nav: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		      nav:false
		    },
		    600:{
		      nav:true
		    }
		  }
		});
		$(".home-slider-retos").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 3,
		  center: true,
		  nav: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		      nav:false
		    },
		    600:{
		      nav:true
		    }
		  }
		});
		$(".home-slider-convocatorias").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 3,
		  center: true,
		  nav: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		      nav:false
		    },
		    600:{
		      nav:true
		    }
		  }
		});
    }
  };

})(jQuery, Drupal);