"use strict";
$(document).ready(function() {
    $(".pushpin-nav").pushpin({
        top: 0
    }), $(".scrollspy").scrollSpy({
        scrollOffset: 0
    }), $("#close").click(function() {
        $("#announcement").fadeOut(100)
    }), $(".button-collapse").sideNav({
        menuWidth: 240
    }), $(window).scroll(function() {
        $(this).scrollTop() > 250 ? $("#scrollup").fadeIn(100) : $("#scrollup").fadeOut(300)
    }), $("#scrollup").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    }), $(document).scroll(function () {    
        var $nav = $(".transparent-navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 436);
    })
});