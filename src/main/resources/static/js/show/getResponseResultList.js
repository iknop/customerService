$(
    getResultList()
)

function getResultList() {
    const crId = $("#crId").val();
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
            content.id = `resultContents-${response[i].rrId}`;
            content.innerText = response[i].resultContents;

            //처리내용 수정 textarea
            let textAreaElement = document.createElement('textarea');
            textAreaElement.classList.add('d-none');
            textAreaElement.id = `textarea-${response[i].rrId}`;
            textAreaElement.innerText = response[i].resultContents;

            //처리내용 작성 시간
            let createTime = document.createElement('td');
            createTime.classList.add('createDateTime');
            createTime.innerText = response[i].createDateTime;

            // 처리내용 작성자
            let name = document.createElement('td');
            name.classList.add('createUserName');
            name.id = `name-${response[i].rrId}`;
            name.innerText = response[i].createUserName;
            name.setAttribute('name', 'createUserName');
            name.dataset.loginId = response[i].createUserCode;

            // // 처리내용 작성자 아이디
            // let userCode = document.createElement('input');
            // userCode.classList.add('createUserCode');
            // userCode.innerText = response[i].createUserCode;
            // userCode.setAttribute('name', 'createUserCode');


            // console.log('response[i].createUserCode = '+response[i].createUserCode)

            let rrId = document.createElement('input');
            rrId.classList.add('rrId');
            rrId.setAttribute("type", "hidden");
            rrId.setAttribute("value", response[i].rrId);

            tr.appendChild(content);
            tr.appendChild(textAreaElement);
            tr.appendChild(createTime);
            tr.appendChild(name);
            tr.appendChild(rrId);

            // 수정버튼 생성 및 이벤트 추가
            let updateBtn = document.createElement('button');
            $(updateBtn).val(response[i].rrId);
            $(updateBtn).data('loginId', response[i].createUserCode);
            $(updateBtn).addClass('btn-update');
            updateBtn.innerText='수정';
            $(updateBtn).on('click', (e) => {
                const rrid = e.target.value;
                onClickEditBtn(rrid);
            });

            // 삭제버튼 생성 및 이벤트 추가
            let deleteBtn = document.createElement('button');
            $(deleteBtn).val(response[i].rrId);
            $(deleteBtn).addClass('btn-delete');
            deleteBtn.innerText='삭제';
            $(deleteBtn).on('click', (e) => {
                const rrid = e.target.value;
                onClickDeleteBtn(rrid);
            });
            // 수정 저장 버튼
            let updateSaveBtn = document.createElement('button');
            $(updateSaveBtn).val(response[i].rrId);
            updateSaveBtn.id = 'btn-save-' + response[i].rrId;
            $(updateSaveBtn).addClass('btn-save d-none');
            updateSaveBtn.innerText='저장';
            $(updateSaveBtn).on('click', (e) => {
                const rrid = e.target.value;
                onClickSaveBtn(rrid);
            });


            tr.appendChild(updateBtn);
            tr.appendChild(deleteBtn);
            tr.appendChild(updateSaveBtn);


            tag.appendChild(tr)
        }
    }).fail(function (response) {
        console.log(response)
    })
}

function onClickEditBtn(rrid) {
    // rrIdL= document.querySelector(".rrId")
    let textareaId = 'textarea-'+ rrid;
    let contentsId = 'resultContents-' + rrid;
    let udpateBtnID = 'btn-save-' + rrid;
    console.log(textareaId)
    $('#' +textareaId).removeClass('d-none');
    $('#' +udpateBtnID).removeClass('d-none');
    $('#' +contentsId).addClass('d-none');

}

function onClickDeleteBtn(rrid) {
    console.log('삭제버튼 클릭, rrid : ', rrid)
    // 1. useYN 호출
    // 2. 파라미터: rrId
    // 3. 페이지 새로고침(N일경우 sd 프로시저 결과에 표시되지 않음)
}
// 수정 저장 버튼
function onClickSaveBtn(rrid) {
    console.log('수정저장버튼 클릭')
    const updateData = {
        rrId: rrid,
        resultContents: $('#textarea-' + rrid).val(),
        loginId: $('#name-' + rrid).data('login-id')
    }
    console.log(updateData)

    $.ajax({
        type: 'POST',
        url: '/api/result/update',
        data: updateData
    }).done(function (response) {
        window.location.href='/board/' + $('#crId').val();
    }).fail(function (response) {
        alert(response)
        console.log(response)
    })

}



function useNotResult() {
// TODO: 처리내용 useN

}

