$(document).ready(function () {
    //window and slide element
    var first_element = $('.first-slide-element');
    var second_element = $('.second-slide-element');
    var next_btn = $('.next-btn-left');
    var prev_btn = $('.prev-btn-right');
    var web_window = $(window);


    $(window).on('resize',function () {
        if (web_window.width() < 768){
            second_element.hide();
        }else{
            first_element.show();
            second_element.show();
        }
    });


    function slide_on_click() {
        if (location_tag){
            first_element.fadeOut(1000);
            first_element.hide();
            second_element.fadeIn(1000);
            second_element.show();

            location_tag = false;
        }
        else{
            second_element.fadeOut(1000);
            second_element.hide();
            first_element.fadeIn(1000);
            first_element.show();


            location_tag = true;
        }
    }

    
    //set location
    var location_tag = true; // at first elememt
    next_btn.on('click',function () {
        slide_on_click();
    });

    prev_btn.on('click',function () {
        slide_on_click();
    });

});