$(document).ready(function(){
	$( function() {
	    var icons = {
		    header: "ui-icon-accordion-passive",
		    activeHeader: "ui-icon-accordion"
	    };
	    $( "#accordion" ).accordion({
		    icons: icons
	    });
  	});

    // $(".bba").click(function() {
    //     $.fancybox.open({
    //         href : '#wpcf7-f4-p41-o1'
    //     });
    //     return false;
    // });

    $('#bba').fancybox();

    // $("#bba").click(function() {
    //     $.fancybox.open({
    //         href : '#modal_booking'
    //     });
    //     return false;
    // });


});