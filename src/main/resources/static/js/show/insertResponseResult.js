$(function () {
    let loginId = $('#loginId').val(); // 헤더
    $('#resultLoginId').val(loginId)// 처리내용입력 아이디

    $('#responseResultInsert').keyup(function (e) {
        let content = $(this).val();
        console.log(content)
        // 글자수 제한
        if (content.length > 1000) {
            // 타이필 불가
            $(this).val($(this).val().substring(0, 1000));
            // 입력불가 알림
            alert('1000자까지만 입력 가능합니다.');
        }

    })
})
// 처리내용 등록 버튼 onclick
function insertResult() {
    const insertData = {
        crId: $('#crId').val(),
        resultContents: $('#resultContents').val(),
        loginId: $('#loginId').val()
    }
    console.log(insertData)

    if(insertData.resultContents == ''){
       return alert("처리내용을 입력하지 않았습니다.")
    }

    $.ajax({
        type: 'POST',
        url: '/api/result/save',
        data: insertData
    }).done(function (response) {
        console.log(response)
        getResultList() // dir: static/js/show/getResponseResultList.js
        $('textarea#resultContents').val(''); // 계속 쌓이지 않게 비우기
    }).fail(function (response) {
        console.log(response)
    })
}