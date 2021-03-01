/*Р”Р°РЅРЅС‹Р№ С€Р°Р±Р»РѕРЅ Р±С‹Р» РїСЂРёРѕР±СЂРµС‚С‘РЅ РЅР° СЃР°Р№С‚Рµ Landistore.com*/
/*Landistore - РёРЅС‚РµСЂРЅРµС‚-РјР°РіР°Р·РёРЅ РєР°С‡РµСЃС‚РІРµРЅРЅС‹С… СЃР°Р№С‚РѕРІ РґР»СЏ РІР°С€РµРіРѕ Р±РёР·РЅРµСЃР°*/
/*(СЃ) Р’СЃРµ РїСЂР°РІР° Р·Р°С‰РёС‰РµРЅС‹*/
$(document).ready(function() {

    $('#review-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<span class='pe-7s-angle-left'></span>", "<span class='pe-7s-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 2
            }
        }
    })
    $("form").submit(function() {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function(data) {
                $('.modal').modal('hide');
                $('body').css('padding-right', '0');
                $('#modal-thank').modal('show');
            },
            error: function(jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });
    jQuery(function($) {
        $(".phone-mask").mask("+8 (999) 999-99-99");
    });
    $(".animate-scroll").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 76
        }, 1500);
    });

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
    var deadline = new Date(Date.parse(new Date()) + 11 * 24 * 60 * 60 * 1000); // for endless timer
    initializeClock('clockdiv', deadline);
});