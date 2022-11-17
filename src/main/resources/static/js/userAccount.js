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
function signUp() {
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
    }).done(function (response) {
        console.log(response)
        window.location.href = '/'
    }).fail(function (response) {
        console.log(response)
        alert(JSON.stringify(response))
    });
}

// 로그인 값 체크: 리턴해서 정보 불러오기
function check_login() {
    const checkData = {
        userLoginId: $('#si-userId').val(),
        userPwd: $('#si-password').val()
    }
    $.ajax({
        type: 'POST',
        url: 'api/user/check-Login',
        data: checkData
    }).done(function (response) {
        console.log(response)

        // 성공:0, 등록id 없음: -1, pwd 잘못됨: -2
        if (response === -2) {
            alert('로그인 정보를 잘못 입력하셨습니다.')
        } else if (response === -1) {
            alert('존재하지 않는 ID입니다.')
        } else {
            login(response)
            $('#loginModal').modal('hide'); // 모달창 닫기
        }
    }).fail(function (response) {
        alert(JSON.stringify(response))
    })
}

// 로그인 사용자 정보 가져오기
function login(response) {

    let loginInfoFound = response
    console.log(loginInfoFound)

    if (loginInfoFound === 0) {
        const loginData = {
            userLoginId: $('#si-userId').val(),
            userPwd: $('#si-password').val()
        }

        $.ajax({
            type: 'POST',
            url: 'api/user/login',
            data: loginData
        }).done(function (response) {
            console.log(response)
            $('#userNameDisplay').val(response.userLoginId)
            $('#userNameDisplay').text("안녕하세요, " +response.nickname+ " 님")
        }).fail(function (response) {
            alert(JSON.stringify(response))
        })
    }
}

