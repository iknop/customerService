$(
    // 처리내용 리스트 불러오기
    getResultList()
)

// 처리내용 리스트 불러오기
function getResultList() {
    const crId = $("#crId").val();
    console.log(crId)
    $.ajax({
        type: 'GET',
        url: '/api/result/' + crId + '/list',
        data: crId,
        async: false
    }).done(function (response) {
        // console.log(response);
        let loop = response.length;
        let tag = document.getElementById('resultList');
        // todo tag.removechild All
        tag.innerHTML = '';
        // 처리내용이 존재할 때 테이블 셀 활성화
        if(loop>0){
            tag.classList.remove('d-none')
        }

        for (let i = 0; i < loop; i++) {
            let div = document.createElement('div');
            div.classList.add('row','justify-content-end','px-0')

            // 처리내용 본문
            let content = document.createElement('span');
            content.classList.add('col-8','mr-1','px-0')
            content.id = `resultContents-${response[i].rrId}`;
            content.innerText = response[i].resultContents;

            //처리내용 수정 textarea: class d-none -> 안보이게 (*수정 시 데이터*)
            let textAreaElement = document.createElement('textarea');
            textAreaElement.classList.add('form-control','d-none','mr-1','ResponseResultTextArea');
            textAreaElement.id = `textarea-${response[i].rrId}`;
            textAreaElement.innerText = response[i].resultContents;

            //처리내용 작성 시간
            let createTime = document.createElement('div');
            createTime.classList.add('createDateTime','col-2','px-0', 'mx-3');
            let dateStr = getDateStr(new Date(response[i].createDateTime))
            createTime.innerText = dateStr;

            // 처리내용 작성자 이름
            let name = document.createElement('div');
            name.classList.add('createUserName','col-1','px-0', 'mr-2');
            name.id = `name-${response[i].rrId}`;
            name.innerText = response[i].createUserName;
            name.setAttribute('name', 'createUserName');
            name.dataset.loginId = response[i].createUserCode;

            // 처리내용 작성자 아이디(*수정 삭제 버튼 활성*)
            let resultCreateUser = document.createElement('input');
            resultCreateUser.setAttribute('type','hidden')
            resultCreateUser.value = response[i].createUserCode;


            // 처리내용 고유 아이디값
            let rrId = document.createElement('input');
            rrId.classList.add('rrId');
            rrId.setAttribute("type", "hidden");
            rrId.setAttribute("value", response[i].rrId);

            div.appendChild(content);
            div.appendChild(textAreaElement); // 수정 내용 입력란
            div.appendChild(createTime);
            div.appendChild(name);
            div.appendChild(rrId);
            div.appendChild(resultCreateUser);


            // 수정버튼 생성 및 이벤트 추가
            let buttons = document.createElement('div')
            buttons.classList.add('row','justify-content-end','pr-5','my-2')

            let updateBtn = document.createElement('button');
            $(updateBtn).val(response[i].rrId);
            updateBtn.id = 'btn-update-' + response[i].rrId; // 클릭시 안보이게 d-none
            $(updateBtn).addClass('btn-update col-1 mx-1 btn btn-primary d-none');
            updateBtn.innerText = '수정';
            $(updateBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickEditBtn(rrId);
            });

            // 삭제버튼 생성 및 이벤트 추가
            let deleteBtn = document.createElement('button');
            $(deleteBtn).val(response[i].rrId);
            $(deleteBtn).addClass('btn-delete col-1 mr-1 btn btn-secondary d-none');
            deleteBtn.innerText = '삭제';
            $(deleteBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickDeleteBtn(rrId);
            });
            // 수정 저장 버튼
            let updateSaveBtn = document.createElement('button');
            $(updateSaveBtn).val(response[i].rrId);
            updateSaveBtn.id = 'btn-save-' + response[i].rrId;
            $(updateSaveBtn).addClass('btn-save d-none col-1 mx-1 btn btn-primary d-none');
            updateSaveBtn.innerText = '저장';
            $(updateSaveBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickSaveBtn(rrId);
            });

            // 로그인 아이디 == 서비스 내용 등록자 -> 수정버튼 표시
            let loginId = $('#loginId').val();
            console.log(resultCreateUser.value)
            if(loginId == resultCreateUser.value){
                deleteBtn.classList.remove('d-none')
                updateBtn.classList.remove('d-none')
                // updateBtn.removeClass('d-none')
            }

            buttons.appendChild(deleteBtn);
            buttons.appendChild(updateBtn);
            buttons.appendChild(updateSaveBtn);

            div.appendChild(buttons);

            tag.appendChild(div)
            tag.appendChild(document.createElement('hr'))
            // td.appendChild(tr)
        }
    }).fail(function (response) {
        console.log(response)
    })
}

function onClickEditBtn(rrId) {
    let textareaId = 'textarea-' + rrId;
    let contentsId = 'resultContents-' + rrId;
    let udpateBtnID = 'btn-save-' + rrId;
    console.log(textareaId)
    $('#' + textareaId).removeClass('d-none');
    $('#' + udpateBtnID).removeClass('d-none');
    $('#' + contentsId).addClass('d-none');
    $('.btn-update').addClass('d-none');

}

function onClickDeleteBtn(rrId) {
    console.log('삭제버튼 클릭, rrId : ', rrId)
    const deleteData = {
        rrId: rrId,
        useYN: 'N',
        loginId: $('#name-' + rrId).data('login-id')
    }
    $.ajax({
        type: 'POST',
        url: '/api/result/delete',
        data: deleteData
    }).done(function (response) {
        window.location.href = '/board/' + $('#crId').val();
        // getResultList()
        console.log(response)
    }).fail(function (response) {
        console.log(response)
    })

}

// 수정 저장 버튼
function onClickSaveBtn(rrId) {
    // console.log('수정저장버튼 클릭')
    const updateData = {
        rrId: rrId,
        resultContents: $('#textarea-' + rrId).val(),
        loginId: $('#name-' + rrId).data('login-id')
    }
    // console.log(updateData)

    $.ajax({
        type: 'POST',
        url: '/api/result/update',
        data: updateData
    }).done(function (response) {
        window.location.href = '/board/' + $('#crId').val();
    }).fail(function (response) {
        alert(response)
        console.log(response)
    })

}

