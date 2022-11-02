// 인덱스 기본화면 리스트 출력
$(function () {
    const searchData = {
        customerCode: "T",
        responseType: "N",
        currentIndexNo: 1,
        pagingSize: 10
    }

    $.ajax({
        type: 'GET',
        url: '/api/board/list',
        data: searchData

    }).done(function (response) {
        console.log(response)
        $('#serviceList').DataTable({
            paging: false,
            data: response
            ,
            columns: [
                {data: 'totCnt'},
                {data: 'listNo'},
                {data: 'crID'},
                {data: 'customerCode'},
                {data: 'customerName'},
                {data: 'responseTitle'},
                {data: 'responseContents'},
                {data: 'createdDateTime'},
                {data: 'createUserName'}
            ]
        });
    }).fail(function (response){
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
        url: '/api/board/list/'+customerCode+'/'+responseType,
        data: searchData
    }).done(function (response) {
        $('#serviceList').DataTable({
            // Cannot reinitialise 에러 방지
            destroy: true,
            searching: false,
            //

            data:response,
            columns: [
                {data: 'totCnt'},
                {data: 'listNo'},
                {data: 'crID'},
                {data: 'customerCode'},
                {data: 'customerName'},
                {data: 'responseTitle'},
                {data: 'responseContents'},
                {data: 'createdDateTime'},
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