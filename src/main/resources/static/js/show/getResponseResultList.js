$(function () {
        // 처리내용 리스트 불러오기
        getResultList()
    }
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
        console.log(response);
        let loop = response.length;
        let tag = document.getElementById('resultList');
        tag.innerHTML = '';
        if (loop > 0) {
        // 처리내용이 존재할 때 테이블 셀 활성화
            tag.classList.remove('d-none')
        }else if(loop == 0){
            // 입력된 처리내용 모두 삭제했을 때 테이블 셀 숨기기
            tag.classList.add('d-none')
        }

        for (let i = 0; i < loop; i++) {
            let div = document.createElement('div');
            div.classList.add('row', 'justify-content-around')
            $(div).css('position','relative')

            // 처리내용 본문
            let content = document.createElement('span');
            content.classList.add('col-8', 'mr-1', 'py-2')
            content.id = `resultContents-${response[i].rrId}`;
            content.innerText = response[i].resultContents;
            content.style.whiteSpace = "pre-line";
            content.style.wordBreak = "break-all";


            //처리내용 수정 textarea: class d-none -> 안보이게 (*수정 시 데이터*)
            let textAreaElement = document.createElement('textarea');
            textAreaElement.classList.add('form-control', 'col-8','d-none', 'mr-1', 'ResponseResultTextArea');
            textAreaElement.id = `textarea-${response[i].rrId}`;
            textAreaElement.innerText = response[i].resultContents;

            //처리내용 작성 시간
            let createTime = document.createElement('div');
            createTime.classList.add('createDateTime', 'col-3', 'px-0');
            $(createTime).css('line-height', '40px')
            let dateStr = getDateStr(new Date(response[i].createDateTime))
            createTime.innerHTML = dateStr + '<br>' + response[i].createUserName;

            // 처리내용 작성자 아이디(*수정 삭제 버튼 활성*)
            let resultCreateUser = document.createElement('input');
            resultCreateUser.setAttribute('type', 'hidden')
            resultCreateUser.value = response[i].createUserCode;


            // 처리내용 고유 아이디값
            let rrId = document.createElement('input');
            rrId.classList.add('rrId');
            rrId.setAttribute("type", "hidden");
            rrId.setAttribute("value", response[i].rrId);

            div.appendChild(content);
            div.appendChild(textAreaElement); // 수정 내용 입력란
            div.appendChild(createTime);
            // div.appendChild(name);
            div.appendChild(rrId);
            div.appendChild(resultCreateUser);


            // 수정버튼 생성 및 이벤트 추가
            let buttons = document.createElement('div')
            buttons.classList.add('buttons', 'col-1', 'px-0', 'd-flex')
            $(buttons).css('position', 'absolute').css('top', '5px').css('right', '0px')
                .css('flex-direction', 'column-reverse').css('align-items', 'baseline')

            // 삭제버튼 생성 및 이벤트 추가
            let deleteBtn = document.createElement('button');
            $(deleteBtn).val(response[i].rrId);
            deleteBtn.id = 'btn-delete-' + response[i].rrId;
            $(deleteBtn).addClass('btn-delete mt-1 btn btn-secondary d-none');
            deleteBtn.innerText = '삭제';
            $(deleteBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickDeleteBtn(rrId);
            });
            // 수정버튼
            let updateBtn = document.createElement('button');
            $(updateBtn).val(response[i].rrId);
            updateBtn.id = 'btn-update-' + response[i].rrId; // 클릭시 안보이게 d-none
            $(updateBtn).addClass('btn-update mt-1 btn btn-primary d-none');
            updateBtn.innerText = '수정';
            $(updateBtn).on('click', (e) => {
                onClickEditBtn(e.target.value);
            });

            // 수정취소 버튼
            let rollbackBtn = document.createElement('button');
            $(rollbackBtn).val(response[i].rrId);
            rollbackBtn.id = 'btn-rollback-' + response[i].rrId;
            $(rollbackBtn).addClass('btn-rollback mt-1 btn btn-secondary d-none');
            rollbackBtn.innerText = '취소';
            $(rollbackBtn).on('click', (e) => {
                onClickRollbackBtn(e.target.value);
            });

            // 수정 저장 버튼
            let saveBtn = document.createElement('button');
            $(saveBtn).val(response[i].rrId);
            saveBtn.id = 'btn-save-' + response[i].rrId;
            $(saveBtn).addClass('btn-save mt-1 btn btn-primary d-none');
            saveBtn.innerText = '저장';
            $(saveBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickSaveBtn(rrId);
            });

            // 로그인 아이디 == 서비스 내용 등록자 -> 수정버튼 표시
            let loginId = $('#loginId').val();
            console.log(resultCreateUser.value)
            if (loginId == resultCreateUser.value) {
                deleteBtn.classList.remove('d-none')
                updateBtn.classList.remove('d-none')
            }

            buttons.appendChild(deleteBtn);
            buttons.appendChild(updateBtn);
            buttons.appendChild(rollbackBtn);
            buttons.appendChild(saveBtn);

            div.appendChild(buttons);

            tag.appendChild(div)
            if (i !== loop-1) {
                const line = document.createElement('hr')
                $(line).css('border-top','1px solid')
                tag.appendChild(line)
            }
        }
    }).fail(function (response) {
        console.log(response)
    })
}

function onClickEditBtn(rrId) { // 수정버튼 클릭시
    // textarea, 취소, 저장버튼은 display
    $('#textarea-' + rrId).removeClass('d-none');
    $('#btn-rollback-' + rrId).removeClass('d-none');
    $('#btn-save-' + rrId).removeClass('d-none');

    // contents, 삭제, 수정버튼은 d-none
    $('#resultContents-' + rrId).addClass('d-none');
    $('#btn-delete-' + rrId).addClass('d-none');
    $('#btn-update-' + rrId).addClass('d-none');
}

function onClickDeleteBtn(rrId) {
    console.log('삭제버튼 클릭, rrId : ', rrId)
    const deleteData = {
        rrId: rrId,
        useYN: 'N',
        loginId: $('#loginId').val()
    }
    console.log('deleteData : ', deleteData)

    $.ajax({
        type: 'POST',
        url: '/api/result/delete',
        data: deleteData
    }).done(function (response) {
        // window.location.href = '/board/' + $('#crId').val();
        // console.log(response)
        getResultList() // dir: static/js/show/getResponseResultList.js
        $('textarea#resultContents').val(''); // 계속 쌓이지 않게 비우기
    }).fail(function (response) {
        console.log(response)
    })
}
function onClickRollbackBtn(rrId) {
    // textarea, 취소, 저장버튼은 d-none
    $('#textarea-' + rrId).addClass('d-none');
    $('#btn-rollback-' + rrId).addClass('d-none');
    $('#btn-save-' + rrId).addClass('d-none');

    // contents, 삭제, 수정버튼은 display
    $('#resultContents-' + rrId).removeClass('d-none');
    $('#btn-delete-' + rrId).removeClass('d-none');
    $('#btn-update-' + rrId).removeClass('d-none');
}

// 수정 저장 버튼
function onClickSaveBtn(rrId) {
    // console.log('수정저장버튼 클릭')
    const updateData = {
        rrId: rrId,
        resultContents: $('#textarea-' + rrId).val(),
        loginId: $('#loginId').val()
    }
    // console.log(updateData)

    $.ajax({
        type: 'POST',
        url: '/api/result/update',
        data: updateData
    }).done(function (response) {
        // window.location.href = '/board/' + $('#crId').val();
        getResultList() // dir: static/js/show/getResponseResultList.js
        $('textarea#resultContents').val(''); // 계속 쌓이지 않게 비우기
    }).fail(function (response) {
        alert(response)
        console.log(response)
    })

}

