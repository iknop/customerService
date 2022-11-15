$(function () {

    // 로그인/회원가입 모달
    $('.tabs').click(function () {
        $('.tabs').removeClass('active');
        $('.tabs h6').removeClass('font-weight-bold');
        $('.tabs h6').addClass('text-muted');
        $(this).children('h6').removeClass('text-muted');
        $(this).children('h6').removeClass('font-weight-bold');
        $(this).addClass('active');

        current_fs = $('.active');
        next_fs = $(this).attr('id');
        next_fs = '#' + next_fs + "1";

        $('fieldset').removeClass('show');
        $(next_fs).addClass('show');

        current_fs.animate({}, {
            step: function () {
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'display': 'block'
                });
            }
        });
    });

});

function signIn(){
    const signInData = {
        userLoginId: $('#su-userLoginId').val(),
        userName: $('#su-name').val(),
        nickname: $('#su-nickname').val(),
        emailAddress: $('#su-email').val(),
        userPwd: $('#su-password').val(),
        phoneNumber: $('#su-phoneNumber').val(),
        homeAddress: $('#su-homeAddress').val()
    }

    $.ajax({
        type: 'POST',
        url: '/api/user/signIn',
        data: signInData
    }).done(function(response){
        console.log(response)
        window.location.href = '/'
    }).fail(function (response){
        console.log(response)
        alert(JSON.stringify(response))
    });
}