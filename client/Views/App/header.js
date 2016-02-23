Template.home.onRendered(function(){
	var $ = $.noConflict();
			
	$('#slider').flexslider({
		animation: "slide",
		directionNav: true,
		animationLoop: true,
		controlNav: false,
		slideToStart: 1,
		slideshow: true,
		animationDuration: 300,
		start: function(){
			 $('#slider').animate({opacity: 1}, 750);
		},
	});
	$(function() {
    	$("body").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
		evthandlerswipe('right','left');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
		evthandlerswipe('left','right');
        },
        excludedElements: $.fn.swipe.defaults.excludedElements + ", .slides, .toggle"
		});
	});
});

Template.home.events({
	"click #makeup":function(){
		$("#panel_makeup").slideToggle("slow");
	},
	"click #panel_makeup":function(){
		$(".sub_dropdown").slideToggle("slow");
	},
	"click #price_range":function(){
		$(".panel_price_range").slideToggle("slow");
	},
	"click #brands":function(){
		$(".panel_brands").slideToggle("slow");
	},
	"click #advanced":function(){
		$(".panel_advanced").slideToggle("slow");
	},
	"click #skin_type":function(){
		$(".panel_skin_type").slideToggle("slow");
	}

});

Template.slider.onRendered(function(){
	var $ = $.noConflict();
	$('#trendy').flexslider({
		animation: "trendy",
		directionNav: true,
		animationLoop: true,
		controlNav: false,
		slideToStart: 1,
		slideshow: true,
		animationDuration: 300,
		start: function(){
			 $('#trendy').animate({opacity: 1}, 750);
		},
	});
	$('#best_selling').flexslider({
		animation: "best_selling",
		directionNav: true,
		animationLoop: true,
		controlNav: false,
		slideToStart: 1,
		slideshow: true,
		animationDuration: 300,
		start: function(){
			 $('#best_selling').animate({opacity: 1}, 750);
		},
	});
	$('#season').flexslider({
		animation: "slide",
		directionNav: true,
		animationLoop: true,
		controlNav: false,
		slideToStart: 1,
		slideshow: true,
		animationDuration: 300,
		start: function(){
			 $('#season').animate({opacity: 1}, 750);
		},
	});
});
Template.mainLayout.events({
	"click #a-sidebar":function(){
	   var events = ("ontouchstart" in document.documentElement) ? 'touchstart touchon' : 'click';
	   $('#a-sidebar').bind(events, {direction:'left'},evthandler);
	   function evthandler (event) {
		var direction = event.data.direction;
		var class_selector = 'moved-'+direction;
		if ($('#content-wrapper').is("."+class_selector)) {
	                $('#content-wrapper').removeClass(class_selector);
	            } else {
	                $('#sidebar-wrapper').css("z-index", "-2");
	                if(class_selector == "moved-right") $('#sidebar-wrapper').css("z-index", "-2");
	                if(class_selector == "moved-left") $('#sidebar-wrapper').css("z-index", "0");
	                $('#content-wrapper').addClass(class_selector);
	            }
		}
	},
	"click #a-menu":function(){
		var events = ("ontouchstart" in document.documentElement) ? 'touchstart touchon' : 'click';
	   $('#a-menu').bind(events, {direction:'right'},evthandler);
	   function evthandler (event) {
		var direction = event.data.direction;
		var class_selector = 'moved-'+direction;
		if ($('#content-wrapper').is("."+class_selector)) {
	                $('#content-wrapper').removeClass(class_selector);
	            } else {
	                $('#sidebar-wrapper').css("z-index", "-2");
	                if(class_selector == "moved-right") $('#sidebar-wrapper').css("z-index", "-2");
	                if(class_selector == "moved-left") $('#sidebar-wrapper').css("z-index", "0");
	                $('#content-wrapper').addClass(class_selector);
	            }
		}

	}

});
