$(document).ready(function() {

    $('.sidebar-menu .sidebar-menu-item-title').on('click', function () {
       $(this).parent('.sidebar-menu-item-block').toggleClass('open');
    });
});