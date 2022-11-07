// 인덱스 기본화면 리스트 출력
$(function () {
    const serviceDataTable = $('#serviceList').DataTable({
        columns: [
            {
                data: 'customerCode', render: function (data, type, row) {
                    return '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + `${row.customerName}(${data})` + '</a>';
                }
            },
            {
                data: 'responseType',
                render: function (data, type, row) {
                    let responseType;
                    if (data === 'P') {
                        responseType = '프로그램문의';
                    } else {
                        responseType = '일반';
                    }
                    return '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + responseType + '</a>';
                }
            },
            {
                data: 'responseTitle',
                render: function (data, type, row) {
                    return '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + data + '</a>';
                }
            },
            {
                data: 'createDateTime',
                render: function (data, type, row) {
                    return '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + data + '</a>';
                }
            },
            {
                data: 'createUserName',
                render: function (data, type, row) {
                    return '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + data + '</a>';
                }
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
        // search()
        let customerCode = $("#customerCode").val(); //고객id
        let responseType = $("#responseType").val(); // 서비스 구분: N/P
        const searchData = {
            customerCode: customerCode,
            responseType: responseType,
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

        }).fail(function (response) {
            console.log(response)
        })
    }).click();
});