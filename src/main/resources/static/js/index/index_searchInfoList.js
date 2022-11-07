// 인덱스 기본화면 리스트 출력
$(function () {
    // 좌측상단 페이지명 표기
    let h2Title = document.createElement('h2');
    h2Title.classList.add('float-start')
    h2Title.innerText = '원격판독 고객응대';
    let titleArea = $('#pageTitle')
    titleArea.append(h2Title)


    const searchData = {
        customerCode: "T",
        responseType: "N",
        currentIndexNo: 1,
        pagingSize: 255 //tinyint 최댓값
    }

    $.ajax({
        type: 'GET',
        url: '/api/board/list',
        data: searchData

    }).done(function (response) {
        console.log(response)
        $('#serviceList').DataTable({
            // TODO: 테이블헤드 일부 칼럼 삭제
            data: response
            ,
            columns: [
                {
                    data: 'crId',
                    visible: false
                },
                {
                    data: 'customerCode', render: function (data, type, row) {
                        let a = '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + `${row.customerName}(${data})` + '</a>';
                        // return `${row.customerName}(${data})`;
                        return a;
                    }
                },
                {
                    data: 'serviceType',
                    render: function (data, type, row) {
                        data = row.serviceType;
                        let serviceType;
                        if (data == 'P') {
                            serviceType = '프로그램문의';
                        } else {
                            serviceType = '일반';
                        }
                        let a = '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + serviceType + '</a>';

                        return a;
                    }
                },
                {
                    data: 'responseTitle',
                    render: function (data, type, row) {
                        let a = '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + row.responseTitle + '</a>';
                        return a;
                    }
                },
                {
                    data: 'createDateTime',
                    render: function (data, type, row) {
                        let a = '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + row.createDateTime + '</a>';
                        return a;
                    }
                },
                {
                    data: 'createUserName',
                    render: function (data, type, row) {
                        let a = '<a href="/board/' + row.crId + '"><i class="fa fa-edit"></i>' + row.createUserName + '</a>';
                        return a;
                    }
                }
            ],
            searching: false,
            "bInfo" : false
        });

        // 페이지네이션 버튼 중앙 정렬
        let paginationBtn = $('#serviceList_paginate').parent()
        paginationBtn.removeClass('col-md-7');
        paginationBtn.addClass('d-flex justify-content-center');

    }).fail(function (response) {
        console.log(response)
    })
});

function search() {
    console.log("search()")

    let customerCode = $("#customerCode").val(); //고객id
    let responseType = $("#responseType").val(); // 서비스 구분: N/P

    const searchData = {
        customerCode: customerCode,
        responseType: responseType,
        currentIndexNo: 1,
        pagingSize: 10
    }

    $.ajax({
        type: 'GET',
        url: '/api/board/list/' + customerCode + '/' + responseType,
        data: searchData
    }).done(function (response) {
        $('#serviceList').DataTable({
            // Cannot reinitialise 에러 방지
            destroy: true,
            searching: false,
            data: response,
            columns: [
                {
                    data: 'customerCode', render: function (data, type, row) {
                        return `${row.customerName}(${data})`;
                    }
                },
                {
                    data: 'serviceType', render: function (data) {
                        let serviceType;
                        if (data == 'P') {
                            serviceType = '프로그램문의';
                        } else {
                            serviceType = '일반';
                        }

                        return serviceType;
                    }
                },
                {data: 'responseTitle'},
                {data: 'createDateTime'},
                {data: 'createUserName'}
            ]
        });
    }).fail(function (response) {
        console.log(response)
    })
}

// 검색 버튼 클릭
$("#service-btn").on("click", function () {
    search()
})