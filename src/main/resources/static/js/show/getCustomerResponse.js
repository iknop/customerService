$(function(){
    let crID = $("#crID").val();
    $.ajax({
        type: 'GET',
        url: '/api/board/'+crID,
        data: crID

    }).done(function (response) {
        setResponseType()
        console.log(response)

    }).fail(function (response) {
        console.log(response)
    })
})

function setResponseType(){
    let responseType = $('input[name="responseType"]').val();
    console.log(responseType)
    if(responseType == 'P'){
        $("#responseType").text("프로그램문의");
    }else{
        $("#responseType").text("일반");
    }
}