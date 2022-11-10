$(function () {
    $('#responseContents').keyup(function (e) {
        let content = $(this).val();

        // 입력값 길이
        if (content.length == 0 || content == '') {
            $('.textCount').text('0자');
        } else {
            $('.textCount').text(content.length + '자');
        }

        // 글자수 제한
        if (content.length > 1000) {
            // 타이필 불가
            $(this).val($(this).val().substring(0, 1000));
            // 입력불가 알림
            alert('1000자까지만 입력 가능합니다.');
        }
    })
    $('.textCount').text(($('#responseContents').val().length + '자'));
})