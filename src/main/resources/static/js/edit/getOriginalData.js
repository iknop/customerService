let customerType;
let customerCode;

$(function () {
    // 좌측상단 페이지명 표기
    let h2Title = document.createElement('h2');
    h2Title.classList.add('float-start')
    h2Title.innerText = '내용수정';
    let titleArea = $('#pageTitle')
    titleArea.append(h2Title)


    customerType = getCustomerType(); // 병원(숫자)/판독의(문자)
    // console.log(customerType)
    checkCustomerTypeBox(customerType)
    // console.log('checkCustomerTypeBox')
    showResponseTypeName()
    getCheckboxValue()
    showCustomerList()

    customerCode = $("#originalCustomerCode").val();

    $("#customerCode").val(customerCode).prop("selected", true);
})

// 고객 아이디로 병원/판독의 구분
function getCustomerType() {
    let customerCode = $('#originalCsType').val();
    // console.log(customerCode)

    let isHospital = Boolean(parseInt(customerCode)); // 코드가 숫자면 병원

    if (isHospital) {
        customerType = 'hospital';
    } else {
        customerType = 'doctor';
    }
    return customerType;
}

// 고객구분 체크박스 체크
function checkCustomerTypeBox(type) {
    if (type == 'hospital') {
        $('#cs_hsp').prop('checked', true);
    } else if (type == 'doctor') {
        $('#cs_dr').prop('checked', true);
    }

}

// 서비스 구분: 일반/프로그램
function showResponseTypeName() {
    let responseTypeCode = $('#responseType').val();
    if (responseTypeCode == 'P') {
        $('#responseType option:eq(1)').prop('selected', true)
    } else {
        $('#responseType option:eq(2)').prop('selected', true)
    }
}
