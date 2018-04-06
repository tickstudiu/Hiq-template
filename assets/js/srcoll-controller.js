$(document).ready(function () {
    //window and animation items
    var animation_elements = $.find('.animation-element');
    var button_action_to_scroll = $('.scroll-on-click');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the element information
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height + 10);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('animation-fade-in');
            }
        });

    }

    //when buttn action will scroll to target element
    function go_to_target_scroll() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //get target scroll information
        var target_scroll = $('.target-scroll');
        var target_scroll_height = $(target_scroll).outerHeight();
        var target_scroll_top_position = $(target_scroll).offset().top;
        var target_scroll_bottom_position = (target_scroll_top_position + target_scroll_height);

        //get top of document
        var top_document = $('html, body');

        //set animation run time
        var speed_scroll_animation = 800;

        top_document.animate({
            scrollTop: target_scroll_top_position
        }, speed_scroll_animation);
    }

    button_action_to_scroll.on('click', function () {
        go_to_target_scroll();
    });

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view();
    });
    //trigger our scroll event on initial load
    $(window).trigger('scroll');

});