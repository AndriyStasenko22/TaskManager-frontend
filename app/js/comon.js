$(document).ready(function () {

    $('.sidebar-menu .sidebar-menu-item-title').on('click', function () {
        $(this).parent('.sidebar-menu-item-block').toggleClass('open');
    });
    // var number_item_list = 4;
    //
    // if($('.sidebar-menu-list').length>0){
    //
    //     $('.sidebar-menu-item-list').each(function () {
    //         var item_lenght=$(this).children('li').length;
    //
    //         if(item_lenght>number_item_list) {
    //
    //             var hiden_item = item_lenght - number_item_list;
    //             $(this).children('li:not(:lt(' + number_item_list + '))').hide();
    //             $(this).next('.show-other-item-button').find('.item-number').text(hiden_item);
    //             $(this).next('.show-other-item-button').show();
    //
    //         }
    //     });
    //
    //     $('.sidebar-menu-list').find('.sidebar-menu-item-list').find('li:not(:lt(' + number_item_list + '))').hide();
    //     $(".sidebar-menu-item-list li:not(:lt(4))").hide();
    // }


    // $('.show-button').on('click', function (e) {
    //     e.preventDefault();
    //     // $(this).parent().siblings('.sidebar-menu-item-list').children();
    //     if( $(".sidebar-menu-item-list li:eq("+number_item_list+")").is(":hidden") )
    //     {
    //         // console.log('yes');
    //         $(".sidebar-menu-item-list li:hidden").show();
    //         // $(".archive").html( hidenews );
    //     }
    //     else
    //     {
    //         // console.log('not');
    //         $(".sidebar-menu-item-list li:not(:lt("+number_item_list+"))").hide();
    //         // $(".archive").html( shownews );
    //     }
    //
    // });

    // $('.user-profile-action-button').on('click', function (e) {
    //     e.preventDefault();
    //     if($('.user-profile-options-list').is(":hidden")){
    //         $('.user-profile-options-list').stop(true, true).slideDown();
    //
    //     }
    //     else{
    //         $('.user-profile-options-list').stop(true, true).slideUp();
    //     }
    // });

    if ($('.checkbox-status').length > 0) {
        $('.checkbox-status input[type="checkbox"]').each(function () {
            if ($(this).prop('checked')) {
                var elem_span = $(this).next('span');
                elem_span.css('background-color', elem_span.attr('data-color'));
            }
        });
    }

    $('.checkbox-status input[type="checkbox"]').on('change', function () {
        $('.checkbox-status input[type="checkbox"]').not(this).prop('checked', false);
        $('.checkbox-status input[type="checkbox"]').next('span').css('background-color', 'transparent');
        var elem = $(this),
            elem_span = elem.next('span');

        if (elem.prop('checked')) {
            elem_span.css('background-color', elem_span.attr('data-color'));
        }
    });

    $('.sidebar-menu-item-list>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('li').siblings('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });
});