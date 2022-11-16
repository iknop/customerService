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
// 회원가입
function signUp(){
    const signUpData = {
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
        url: '/api/user/signUp',
        data: signUpData
    }).done(function(response){
        console.log(response)
        window.location.href = '/'
    }).fail(function (response){
        console.log(response)
        alert(JSON.stringify(response))
    });
}
// 로그인 사용자 정보 가져오기
function login(){
    const loginData = {
        userLoginId:$('#si-userId').val(),
        userPwd:$('#si-password').val()
    }

    $.ajax({
        type: 'POST',
        url: 'api/user/login',
        data: loginData
    }).done(function (response) {
        console.log(response)
        // window.location.href= '/'
        $('#loginId').val(response.userLoginId)
        $('#loginId').text(response.userLoginId)
    }).fail(function (response) {
        alert(JSON.stringify(response))
    })
}
// 로그인 값 체크
function check_login(){
    const checkData = {
        userLoginId:$('#si-userId').val(),
        userPwd:$('#si-password').val()
    }
        .ajax({
            type: 'POST',
            url: 'api/user/check-Login',
            data: checkData
        }).done(function (response) {
            console.log(response)

        }).fail(function (response) {
            alert(JSON.stringify(response))
        })
}