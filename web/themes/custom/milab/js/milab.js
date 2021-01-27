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
		  nav: false,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		      nav:false
		    },
		    600:{
		      nav:false
		    }
		  }
		});
		$(".home-slider-retos").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 3,
		  center: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		    	items: 1,
		    },
		    600:{
		    	nav:false
		    }
		  }
		});
		$(".home-slider-convocatorias").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 3,
		  center: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
				items: 1,
		    },
		    600:{
		    	nav:false
		    }
		  }
		});
		$(".detalle-nosotros-slider").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 1,
		  center: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		      nav:false
		    },
		    600:{
		      nav:false
		    }
		  }
		});
		$(".carousel-imagenes .owl-carousel").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 1,
		  center: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		      nav:false
		    },
		    600:{
		      nav:false
		    }
		  }
		});
		$(".detalle-mapeo-govtech-slider").owlCarousel({
		  loop: true,
		  margin: 0,
		  dots: true,
		  items: 1,
		  center: true,
		  autoplay: true,
		  autoHeight:true,
		  responsive:{
		    0:{
		      nav:false
		    },
		    600:{
		      nav:false
		    }
		  }
		});
		$(".equipo-slider").owlCarousel({
			loop: true,
			margin: 0,
			items: 4,
			autoplay: true,
			autoHeight:true,
			responsive:{
				0:{
					nav:false
				},
				600:{
					nav:false
				}
			}
		});
		if ($('#block-views-block-detalle-mapeo-govtech-block-3 .views-row .title').length == 0) {
			$('#block-views-block-detalle-mapeo-govtech-block-3').hide();
		}
    }
  };
})(jQuery, Drupal);