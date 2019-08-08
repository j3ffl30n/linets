import './../sass/app.sass';

import 'jquery'
import 'popper.js'
import 'bootstrap';
import $ from 'jquery'


$(document).ready(function () {

    function processForm(e) {
        var url = 'https://apifake.d2.e2l.dev/api/newsletter/list/members';
        var email = $('#emailNewsletter').val();
        var data = { "email": email }

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (result) {
                alert("Se ha registrado en nuestro newsletter satisfactoriamente!");
            }
        });
        e.preventDefault();
    }
    $('#newsletterForm').submit(processForm);
});


$('.carousel').carousel({
    interval: 3000
})

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});