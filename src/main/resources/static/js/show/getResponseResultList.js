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
        for (let i = 0; i < loop; i++) {
            let tr = document.createElement('tr');
            // 처리내용 본문
            let content = document.createElement('td');
            content.setAttribute("colspan", "3");
            content.id = `resultContents-${response[i].rrId}`;
            content.innerText = response[i].resultContents;

            //처리내용 수정 textarea: class d-none -> 안보이게 (*수정 시 데이터*)
            let textAreaElement = document.createElement('textarea');
            textAreaElement.classList.add('d-none');
            textAreaElement.id = `textarea-${response[i].rrId}`;
            textAreaElement.innerText = response[i].resultContents;

            //처리내용 작성 시간
            let createTime = document.createElement('td');
            createTime.classList.add('createDateTime');
            createTime.innerText = response[i].createDateTime;

            // 처리내용 작성자(*수정 시 데이터*)
            let name = document.createElement('td');
            name.classList.add('createUserName');
            name.id = `name-${response[i].rrId}`;
            name.innerText = response[i].createUserName;
            name.setAttribute('name', 'createUserName');
            name.dataset.loginId = response[i].createUserCode;

            // 처리내용 고유 아이디값
            let rrId = document.createElement('input');
            rrId.classList.add('rrId');
            rrId.setAttribute("type", "hidden");
            rrId.setAttribute("value", response[i].rrId);

            tr.appendChild(content);
            tr.appendChild(textAreaElement); // 수정 내용 입력란
            tr.appendChild(createTime);
            tr.appendChild(name);
            tr.appendChild(rrId);

            // 수정버튼 생성 및 이벤트 추가
            let updateBtn = document.createElement('button');
            $(updateBtn).val(response[i].rrId);
            updateBtn.id = 'btn-update-' + response[i].rrId; // 클릭시 안보이게 d-none
            $(updateBtn).addClass('btn-update');
            updateBtn.innerText = '수정';
            $(updateBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickEditBtn(rrId);
            });

            // 삭제버튼 생성 및 이벤트 추가
            let deleteBtn = document.createElement('button');
            $(deleteBtn).val(response[i].rrId);
            $(deleteBtn).addClass('btn-delete');
            deleteBtn.innerText = '삭제';
            $(deleteBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickDeleteBtn(rrId);
            });
            // 수정 저장 버튼
            let updateSaveBtn = document.createElement('button');
            $(updateSaveBtn).val(response[i].rrId);
            updateSaveBtn.id = 'btn-save-' + response[i].rrId;
            $(updateSaveBtn).addClass('btn-save d-none');
            updateSaveBtn.innerText = '저장';
            $(updateSaveBtn).on('click', (e) => {
                const rrId = e.target.value;
                onClickSaveBtn(rrId);
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

function onClickEditBtn(rrId) {
    // rrIdL= document.querySelector(".rrId")
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
    const deleteData= {
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


function useNotResult() {
// TODO: 처리내용 useN

}

