// 인덱스 기본화면 리스트 출력
$(function () {

    const serviceDataTable = $('#serviceList').DataTable({
        columnDefs: [
            {
                targets: [0,4],
                width: 80,
            },
            {
                targets: [1],
                width: 90,
            },
            {
                targets: [3],
                width: 150,
            },
        ],
        columns: [
            {
                data: 'customerCode', render: function (data, type, row) {
                    return `${row.customerName}`
                },
                className: 'text-center'
            },
            {
                data: 'responseType',
                render: function (data) {
                    let responseType;
                    if (data === 'P') {
                        responseType = '프로그램문의';
                    } else {
                        responseType = '일반';
                    }
                    return responseType
                },
                className: 'text-center'
            },
            {
                data: 'responseTitle'
            },
            {
                data: 'createDateTime',
                render: function(data) {
                    return getDateStr(new Date(data))
                }
            },
            {
                data: 'createUserName',
                className: 'text-center'
            }
        ],
        searching: false,
        "bInfo" : false
    });

    // 좌측상단 페이지명 표기
    let h2Title = document.createElement('h2');
    h2Title.classList.add('float-start')
    h2Title.innerText = '원격판독 고객응대';
    let titleArea = $('#pageTitle')
    titleArea.append(h2Title)

// 검색 버튼 클릭
    $("#service-btn").on("click", function () {
        const searchData = {
            customerCode: $("#customerCode").val(),
            responseType: $("#responseType").val(),
            currentIndexNo: 1,
            pagingSize: 255 //tinyint 최댓값
        }
        console.log(searchData);
        $.ajax({
            type: 'GET',
            url: '/api/board/list',
            data: searchData
        }).done(function (response) {
            console.log(response)
            serviceDataTable.clear().rows.add(response).draw();

            // 페이지네이션 버튼 중앙 정렬
            let paginationBtn = $('#serviceList_paginate').parent()
            paginationBtn.removeClass('col-md-7');
            paginationBtn.addClass('d-flex justify-content-center');

        }).fail(function (xhr, error) {
            console.log(xhr, error)
        })
    }).click();
    // 등록버튼 추가
    let btnSave_position = $('#serviceList_length').parent().next()
    btnSave_position.addClass('text-right');
    btnSave_position.append('<button class="btn btn-secondary" type="submit" onclick="location.href=`/board/write`">등록</button>')

    $('#serviceList tbody').on('click','tr', function() {
        const rowData = serviceDataTable.row(this).data();
        console.log(rowData);
        if (rowData !== undefined) {
            console.log(rowData.crId);
            window.location = `/board/${rowData.crId}`;
        }
    })
});
function getDateStr(date) {
    const dates = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    if (dates[1] < 10) {
        dates[1] = '0' + dates[1];
    }

    if (dates[2] < 10) {
        dates[2] = '0' + dates[2];
    }
    const times = [date.getHours(), date.getMinutes(), date.getSeconds()];
    if (times[1] < 10) {
        times[1] = '0' + times[1];
    }

    if (times[2] < 10) {
        times[2] = '0' + times[2];
    }
    return `${dates.join('-')} ${times.join(':')}`;
}