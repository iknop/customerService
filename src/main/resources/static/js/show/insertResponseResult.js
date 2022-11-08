$(function () {
    let loginId = $('#loginId').val(); // 헤더
    $('#resultLoginId').val(loginId)// 처리내용입력 아이디
})
// 처리내용 등록 버튼 onclick
function insertResult() {
    const insertData = {
        crId: $('#crId').val(),
        resultContents: $('#resultContents').val(),
        loginId: $('#loginId').val()
    }
    console.log(insertData)

    $.ajax({
        type: 'POST',
        url: '/api/result/save',
        data: insertData
    }).done(function (response) {
        console.log(response)
        getResultList() // dir: static/js/show/getResponseResultList.js
        $('textarea#resultContents').val('');
    }).fail(function (response) {
        console.log(response)
    })
}