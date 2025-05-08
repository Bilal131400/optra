$(document).ready(function(){
    $("#openSidebar").click(function(){
        $("#sidebar").addClass("show");
        $("#backdrop").addClass("show");
    });

    function closeSidebar() {
        $("#sidebar").removeClass("show");
        $("#backdrop").removeClass("show");
    }

    $("#closeSidebar, #backdrop").click(function(){
        closeSidebar();
    });

    $('#openSearch').click(function(){
        $('.search-main').toggleClass('show');
    })
    $('#closeSearch').click(function(){
        $('.search-main').removeClass('show');
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.bottom-header').addClass('fixed');
        }else{
            $('.bottom-header').removeClass('fixed');
        }
    })
});