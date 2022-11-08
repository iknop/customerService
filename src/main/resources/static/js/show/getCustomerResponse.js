$(function(){
    // 좌측상단 페이지명 표기
    let h2Title = document.createElement('h2');
    h2Title.classList.add('float-start')
    h2Title.innerText = '내용상세보기';
    let titleArea = $('#pageTitle')
    titleArea.append(h2Title)

    // 로그인 아이디 == 서비스 내용 등록자 -> 수정버튼 표시
    let loginId = $('#loginId').val();
    let createUserId = $('#createUserCode').val();
    let editResponseBtn = $('#editResponseBtn');
    if(loginId == createUserId){
        editResponseBtn.removeClass('d-none')
    }

    let crId = $("#crId").val();
    $.ajax({
        type: 'GET',
        url: '/api/board/'+crId,
        data: crId

    }).done(function (response) {
        console.log(response)
        setResponseType() // 서비스 구분: 일반/프로그램문의
    }).fail(function (response) {
        console.log(response)
    })

})

function setResponseType(){
    let responseType = $('input[name="responseType"]').val();
    //console.log(responseType)
    if(responseType == 'P'){
        $("#responseType").text("프로그램문의");
    }else{
        $("#responseType").text("일반");
    }
}


