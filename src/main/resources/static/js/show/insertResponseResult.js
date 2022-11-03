$(function () {
    let loginId = $('#loginId').val(); // 헤더
    $('#resultLoginId').val(loginId)// 처리내용입력 아이디
})
// 처리내용 등록 버튼 onclick
function insertResult() {
    let crId = $('#crID').val();
    let resultContents = $('#resultContents').val();
    let loginId = $('#loginId').val();

    const insertData = {
        crId: crId,
        resultContents: resultContents,
        loginId: loginId
    }

    $.ajax({
        type: 'POST',
        url: '/api/result/save',
        data: insertData
    }).done(function (response) {
        console.log(response)
        getResultList() // dir: static/js/show/getResponseResultList.js
    }).fail(function (response) {
        console.log(response)
    })
}