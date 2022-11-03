// 병원/판독의 체크박스
function getCheckboxValue() {
    const query = 'input[name="customerType"]:checked';
    const selectedEls = document.querySelectorAll(query);
    let result = '';

    // TODO:
    selectedEls.forEach((el) => {
        result += el.value;
    });
    return result;
}

// 셀렉트박스 고객목록 출력
function showCustomerList() {

    let customerType = getCheckboxValue();
    if (customerType === "hospital") {
        // 병원 ajax
        $.ajax({
            type: 'GET',
            url: '/api/cs/hospitalList',
            async: false
        }).done(function (response) {
            let loop = response.length;
            let tagArea = document.getElementById('customerCode');
            $(tagArea).empty();
            for (let i = 0; i < loop; i++) {
                let opt = document.createElement("option");
                opt.text = response[i].hospitalName;
                opt.value = response[i].hospitalCode;
                tagArea.appendChild(opt);
            }

        }).fail(function (response) {
            console.log(response)
        })
    } else if (customerType == "doctor") {
        // 판독의 ajax
        $.ajax({
            type: 'GET',
            url: '/api/cs/doctorList',
            async: false
        }).done(function (response) {
            let loop = response.length;
            let tagArea = document.getElementById('customerCode');
            $(tagArea).empty();
            for (let i = 0; i < loop; i++) {
                let opt = document.createElement("option");
                opt.text = response[i].drName;
                opt.value = response[i].drId;
                tagArea.appendChild(opt);
            }

        }).fail(function (response) {
            console.log(response)
        })
    } else if (customerType == "hospitaldoctor") {
        // todo: 전체고객(병원+판독의) 조회

    } else{
        // todo: 선택값 없음
    }
}