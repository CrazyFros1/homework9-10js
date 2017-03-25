/**
 * Created by Chif on 16.03.2017.
 */

$(function () {

    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();
});

$(function select() {
    $(".jquery-selectbox").selectbox();
});


$(function(){
    $('.niceCheck').mousedown(
    function() {
        changeCheck($(this));
    });
    $('.niceCheck').each(
    function() {
        changeCheckStart($(this));
    });
});
function changeCheck(el)
{
    var el = el,
        input = el.find("input").eq(0);
    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    }
    return true;
}
function changeCheckStart(el)
{
    var el = el,
    input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px");
    }
    return true;
}

$(function () {
    $('.drop').on('mouseenter', function () {
        $(this).children('.submenu').show().animate({'height': '+=80px'}, 'fast')
            .children('li').animate({'backgroundColor': '#00f'}, 'fast');
    });
    $('.drop').on('mouseleave', function () {
        $(this).children('.submenu').animate({'height': '-=80px'}, 'fast', function () {
            $(this).hide();
        }).children('li').animate({'backgroundColor': '#B22222'}, 'fast');
    });
});
