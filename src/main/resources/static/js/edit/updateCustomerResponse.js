function updateResponse() {
    let crId = $('#crId').val();
    let customerCode = $('#customerCode').val();
    let responseType = $('#responseType').val();
    let responseTitle = $('#responseTitle').val();
    let responseContents = $('#responseContents').val();
    let loginId = $('#loginId').val();
    let useYN = $('#useYN').val();

    let updateData = {
        crId: crId,
        customerCode: customerCode,
        responseType: responseType,
        responseTitle: responseTitle,
        responseContents: responseContents,
        loginId: loginId,
        useYN: useYN,
    }
    $.ajax({
        type: 'POST',
        url: '/api/board/'+crId+'/update',
        data: updateData
    }).done(function (response){
        console.log(response)
        window.location= '/'
    }).fail(function (response) {
        console.log(response)
    })
}