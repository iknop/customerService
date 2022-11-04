// 병원/판독의 체크박스
//
// getCheckboxValue()
// // 셀렉트박스 고객목록 출력
// showCustomerList()

function insertCustomerResponse(){
    let customerCode = $("#customerCode").val();
    let responseType = $("#responseType").val();
    let responseTitle = $("#responseTitle").val();
    let responseContents = $("#responseContents").val();
    let loginId = $("#loginId").val();

    const insertData = {
        customerCode: customerCode,
        responseType: responseType,
        responseTitle: responseTitle,
        responseContents: responseContents,
        loginId: loginId
    }

    console.log(insertData)
    $.ajax({
        type: 'POST',
        url: '/api/board/write',
        data: insertData,
        async: false
    }).done(function (response) {
        console.log(response)
        window.location.href='/';
    }).fail(function (response) {
        console.log(response)
    })
}