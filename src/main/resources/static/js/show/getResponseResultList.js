$(
    getResultList()
)

function getResultList() {
    const crId = $("#crID").val();
    console.log(crId)
    $.ajax({
        type: 'GET',
        url: '/api/result/' + crId + '/list',
        data: crId,
        async: false

    }).done(function (response) {
        console.log(response);
        let loop = response.length;
        let tag = document.getElementById('resultList');

        for (let i = 0; i < loop; i++) {
            let tr = document.createElement('tr');
            // 처리내용 본문
            let content = document.createElement('td');
            content.setAttribute("colspan", "3");
            content.classList.add('resultContents');
            content.innerText = response[i].resultContents;
            //처리내용 작성 시간
            let createTime = document.createElement('td');
            createTime.classList.add('createDateTime');
            createTime.innerText = response[i].createDateTime;

            // 처리내용 작성자
            let name = document.createElement('td');
            name.classList.add('createUserName');
            name.innerText = response[i].createUserName;
            name.setAttribute('name', 'createUserName');

            let rrId = document.createElement('input');
            rrId.classList.add('rrId');
            rrId.setAttribute("type", "hidden");
            rrId.setAttribute("value", response[i].rrId);

            tr.appendChild(content);
            tr.appendChild(createTime);
            tr.appendChild(name);
            tr.appendChild(rrId);

            let updateBtn = validateBtns()[0];
            let deleteBtn = validateBtns()[1];
            tr.appendChild(updateBtn);
            tr.appendChild(deleteBtn);

            tag.appendChild(tr)
        }
    }).fail(function (response) {
        console.log(response)
    })
}
function validateBtns(){
        let updateBtn = document.createElement('button');
        updateBtn.setAttribute('onclick','updateResult()')
        updateBtn.innerText = '수정'

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('onclick','useNotResult()')
        deleteBtn.innerText = '삭제'

    return [updateBtn ,deleteBtn];
}

function updateResult(){

    let rrId = $('.rrId').val();
    let resultContents = $('.resultContents').innerText;
    let loginId = $('#loginId').val();

    const updateData = {
        rrId: rrId,
        resultContents: resultContents,
        loginId: loginId
    }

    $.ajax({
        type: 'POST',
        url: '/api/result/update',
        data: updateData
    }).done(function (response) {
        console.log(response)
    }).fail(function (response) {
        console.log(response)
    })
}

function useNotResult(){
// TODO: 처리내용 useN

}

