!(function($) {
    // Menu list isotope and filter
    $(window).on('load', function() {
        var menuIsotope = $('.menu-container').isotope({
            itemSelector: '.menu-item',
            layoutMode: 'fitRows'
        });

        $('#menu-flters li').on('click', function() {
            $("#menu-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            menuIsotope.isotope({
                filter: $(this).data('filter')
            });

        });
    });
})(jQuery);

function myFunction() {
    var input, filter, menus, menuContainer, h4, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    menuContainer = document.getElementById("myItems");
    menus = menuContainer.getElementsByClassName("menu-item");
    for (i = 0; i < menus.length; i++) {
        title = menus[i].querySelector(".card-body h4.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            menus[i].style.display = "";
        } else {
            menus[i].style.display = "none";
        }
    }
}