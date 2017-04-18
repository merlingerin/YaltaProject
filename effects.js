$(document).ready(function() {
    $('#menu-item-107 > a').click(function() {
        return false;
    });
    $("#fancybox1 a").click(function() {
        $.fancybox.open({
            href : '#form1'
        });
        return false;
    });
    $("#fancybox2 a").click(function() {
        $.fancybox.open({
            href : '#form2'
        });
        return false;
    });
    $("#fancybox3 a").click(function() {
        $.fancybox.open({
            href : '#form3'
        });
        return false;
    });
    $("#fancybox31 a").click(function() {
        $.fancybox.open({
            href : '#form31'
        });
        return false;
    });
    $("#fancybox32 a").click(function() {
        $.fancybox.open({
            href : '#form32'
        });
        return false;
    });
    $("#fancybox33 a").click(function() {
        $.fancybox.open({
            href : '#form33'
        });
        return false;
    });
    $("#fancybox34 a").click(function() {
        $.fancybox.open({
            href : '#form34'
        });
        return false;
    });
    $("#fancybox35 a").click(function() {
        $.fancybox.open({
            href : '#form35'
        });
        return false;
    });
    $(".home-slider .et_pb_slides .et_pb_container .et_pb_slide_description .et_pb_button").click(function() {
        $.fancybox.open({
            href : '#form3'
        });
        return false;
    });
    $(".home-slider-else .et_pb_slides .et_pb_container .et_pb_slide_description .et_pb_button").click(function() {
        $.fancybox.open({
            href : '#spec-form'
        });
        return false;
    });
    $("#fancybox4 a").click(function() {
        $.fancybox.open({
            href : '#map'
        });
        return false;
    });
    $("#fancybox5 a").click(function() {
        $.fancybox.open({
            href : '#form5'
        });
        return false;
    });
    $("#fancybox6 a").click(function() {
        $.fancybox.open({
            href : '#form6'
        });
        return false;
    });
    $("#fancybox7 a").click(function() {
        $.fancybox.open({
            href : '#form7'
        });
        return false;
    });
    $("#fancybox8 a").click(function() {
        $.fancybox.open({
            href : '#form8'
        });
        return false;
    });
    $("#fancybox9 a").click(function() {
        $.fancybox.open({
            href : '#form9'
        });
        return false;
    });
    $("#fancybox10 a").click(function() {
        $.fancybox.open({
            href : '#form10'
        });
        return false;
    });
    $("#fancybox11 a").click(function() {
        $.fancybox.open({
            href : '#form11'
        });
        return false;
    });
    $("#fancybox12 a").click(function() {
        $.fancybox.open({
            href : '#form12'
        });
        return false;
    });
    $("#fancybox13 a").click(function() {
        $.fancybox.open({
            href : '#form13'
        });
        return false;
    });
    $("#fancybox14 a").click(function() {
        $.fancybox.open({
            href : '#form14'
        });
        return false;
    });
    $("#fancybox15 a").click(function() {
        $.fancybox.open({
            href : '#form15'
        });
        return false;
    });
    $("#fancybox16 a").click(function() {
        $.fancybox.open({
            href : '#form16'
        });
        return false;
    });
    $("#for-review1").click(function() {
        $.fancybox.open({
            href : '#review1'
        });
        return false;
    });
    $("#for-review2").click(function() {
        $.fancybox.open({
            href : '#review2'
        });
        return false;
    });
    $("#for-review3").click(function() {
        $.fancybox.open({
            href : '#review3'
        });
        return false;
    });
    $("#for-review4").click(function() {
        $.fancybox.open({
            href : '#review4'
        });
        return false;
    });
    $("#for-review5").click(function() {
        $.fancybox.open({
            href : '#review5'
        });
        return false;
    });
    $("#for-review6").click(function() {
        $.fancybox.open({
            href : '#review6'
        });
        return false;
    });
    $("#for-review7").click(function() {
        $.fancybox.open({
            href : '#review7'
        });
        return false;
    });
    $("#for-review8").click(function() {
        $.fancybox.open({
            href : '#review8'
        });
        return false;
    });
    $("#for-review9").click(function() {
        $.fancybox.open({
            href : '#review9'
        });
        return false;
    });
    $("#for-review10").click(function() {
        $.fancybox.open({
            href : '#review10'
        });
        return false;
    });
    $("#for-review11").click(function() {
        $.fancybox.open({
            href : '#review11'
        });
        return false;
    });
    $("#for-review12").click(function() {
        $.fancybox.open({
            href : '#review12'
        });
        return false;
    });
    $(".what-you-pay .et_pb_column .pay-block.out li.links a.now-more").click(function() {
        $.fancybox.open({
            href : '#now-more'
        });
        return false;
    });

    $('.smart-blogs article.post').addClass('et_pb_module et-waypoint et_pb_animation_top');
});
$(document).ready(function() {
    $('.tabs2 .et_pb_tabs_controls').before('<p class="tabs-title">Уровень:</p>');
    $('.tabs3 .et_pb_tabs_controls').before('<p class="tabs-title">Уровень:</p>');
    $('#for-sl1').addClass('active');
    $('#for-sl1').click( function() {
        if ($('#sl1').css('display') == 'none') {
            $('.for-special-slider1').removeClass('active');
            $(this).addClass('active');
            $('.special-slider1 .slide').hide('drop');
            $('#sl1').show('drop', {direction: "right"}, 1000 );
        }        
    });
    $('#for-sl2').click( function() {
        if ($('#sl2').css('display') == 'none') {
            $('.for-special-slider1').removeClass('active');
            $(this).addClass('active');
            $('.special-slider1 .slide').hide('drop');
            $('#sl2').show('drop', {direction: "right"}, 1000 );
        }
    });
    $('#for-sl3').click( function() {
        if ($('#sl3').css('display') == 'none') {
            $('.for-special-slider1').removeClass('active');
            $(this).addClass('active');
            $('.special-slider1 .slide').hide('drop');
            $('#sl3').show('drop', {direction: "right"}, 1000 );
        }
    });
    $('#for-sl4').click( function() {
        if ($('#sl4').css('display') == 'none') {
            $('.for-special-slider1').removeClass('active');
            $(this).addClass('active');
            $('.special-slider1 .slide').hide('drop');
            $('#sl4').show('drop', {direction: "right"}, 1000 );
        }
    });
    $('#for-sl5').click( function() {
        if ($('#sl5').css('display') == 'none') {
            $('.for-special-slider1').removeClass('active');
            $(this).addClass('active');
            $('.special-slider1 .slide').hide('drop');
            $('#sl5').show('drop', {direction: "right"}, 1000 );
        }
    });
    $('#for-sl6').click( function() {
        if ($('#sl6').css('display') == 'none') {
            $('.for-special-slider1').removeClass('active');
            $(this).addClass('active');
            $('.special-slider1 .slide').hide('drop');
            $('#sl6').show('drop', {direction: "right"}, 1000 );
        }
    });
    $('.nav-tabs li:first-child').addClass('active');
    $('.nav-tabs #for-tabs2').click( function() {
        $('.nav-tabs li:first-child').removeClass('active');
        $('.nav-tabs li:last-child').addClass('active');
        $('.tabs1').hide('blind', {direction: "up"}, 1000 );
        $('.tabs2').show('blind', {direction: "up"}, 1000 );
        return false;
    });
    $('.nav-tabs #for-tabs1').click( function() {
        $('.nav-tabs li:last-child').removeClass('active');
        $('.nav-tabs li:first-child').addClass('active');
        $('.tabs2').hide('blind', {direction: "up"}, 1000 );
        $('.tabs1').show('blind', {direction: "up"}, 1000 );
        return false;
    });
    $('.evkos a').tooltip();

    $('#top-menu-nav #menu-item-1875 > a').click(function(){
        return false;
    });


    $('#bx_slider_testi').bxSlider({
          minSlides: 1,
          maxSlides: 4,
          slideWidth: 300,
          slideMargin: 50,
          auto: true,
          responsive: true
    });    
    $('#bx_slider_galler').bxSlider({
          minSlides: 1,
          maxSlides: 3,
          slideWidth: 350,
          slideMargin: 60,
          auto: true,
          responsive: true
    });

    $('.fancybox_img').fancybox();

});