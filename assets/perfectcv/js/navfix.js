(function($){

	"use strict";

	//var site_nav = $('#site_nav');

	$('#site_nav').find('a[href="#about_me"]').click( function(e) { redrcNonhome('', e); return false; } );
	$('#site_nav').find('a[href="#my_expertise"]').click( function(e) { redrcNonhome('/#my_expertise_sec', e); return false; } );
	$('#site_nav').find('a[href="#experience"]').click( function(e) { redrcNonhome('/#experience_sec', e); return false; } );
	$('#site_nav').find('a[href="#education"]').click( function(e) { redrcNonhome('/#education_sec', e); return false; } );
	$('#site_nav').find('a[href="#portfolio"]').click( function(e) { redrcNonhome('/#portfolio_sec', e); return false; } );
	$('#site_nav').find('a[href="#blog"]').click( function(e) { redrcNonhome('/#blog_sec', e); return false; } );
	$('#site_nav').find('a[href|="#post"]').click( function(e) { redrcNonhome('', e); return false; } );

function redrcNonhome(url, e) {

	if (e.ctrlKey) {
		window.open(  pcvData.SITE_URL + url , '_blank' );
	} else {

		switch (e.which) {
			case 1:
				window.location.href = pcvData.SITE_URL + url;
				// left click
				break;

			case 2:
				window.open(  pcvData.SITE_URL + url , '_blank' );
				// right click
				break;

			default:
				window.open(  pcvData.SITE_URL + url , '_blank' );
		}

	}

}

})(jQuery);