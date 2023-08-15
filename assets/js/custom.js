 


// online-reputation slider 
$('#online-reputation').owlCarousel({
	margin:10,
	loop: false,
	autoplay: false,
	autoplayHoverPause: false,
	mouseDrag : false,
	dots: true,
	nav:false,
  // navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive: {
  	0: {
  		items:1
  	},
  	600: {
  		items: 1
  	},
  	700: {
  		items: 1
  	},
  	750: {
  		items: 1
  	},
  	800: {
  		items:2
  	},
  	900: {
  		items: 2
  	},
  	1000: {
  		items: 2
  	},
  	1200: {
  		items: 3
  	},
  	1400: {
  		items: 3
  	}
  }

});

$('#clinet-slider').owlCarousel({
   margin:10,
  loop: true,
  autoplay: true,
  autoplayHoverPause: false,
   mouseDrag : false,
   dots: false,
   nav:true,
  navText: ["<img src='assets/images/chevron-left.png'>","<img src='assets/images/chevron-right.png'>"],
  responsive: {
    0: {
      items:1
    },
    600: {
      items: 1
    },
    700: {
      items: 1
    },
     750: {
      items: 1
    },
    800: {
      items:2
    },
    900: {
      items: 2
    },
    1000: {
      items: 2
    },
     1200: {
      items: 2
    },
     1400: {
      items: 2
    }
  }

});
$('#two').owlCarousel({
   margin:30,
  loop: true,
  autoplay: true,
  autoplayHoverPause: false,
   mouseDrag : false, 
  navText: ["<img src='assets/images/chevron-left.png'>","<img src='assets/images/chevron-right.png'>"],
  responsive: {
    0: {
      items:2
    },
    600: {
      items: 3
    },
    700: {
      items: 3
    },
     750: {
      items: 3
    },
    800: {
      items:4
    },
    900: {
      items: 4
    },
    1000: {
      items: 5
    },
     1200: {
      items: 6
    },
     1400: {
      items: 6
    }
  }

});