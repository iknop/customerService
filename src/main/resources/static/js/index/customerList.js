//병원/판독의 체크박스
function getCheckboxValue() {
    const query = 'input[name="customerType"]:checked';
    const selectedEls = document.querySelectorAll(query);
    let result = '';

    selectedEls.forEach((el) => {
        result += el.value;
    });
    // console.log(result)
    showCustomerList(result)
    // return result
}


// 셀렉트박스 고객목록 출력
function showCustomerList(checkboxValue) {
    // checkboxValue = getCheckboxValue()
    console.log(checkboxValue)
    if (checkboxValue === "hospital") {
        // 병원 ajax
        $.ajax({
            type: 'GET',
            url: '/api/cs/hospitalList',
            async: false
        }).done(function (response) {
            const _default = {
                'hospitalCode':'T',
                'hospitalName': '전체'
            }
            console.log(_default)
            response = [_default, ...response]
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
    } else if (checkboxValue === "doctor") {
        // 판독의 ajax
        $.ajax({
            type: 'GET',
            url: '/api/cs/doctorList',
            async: false
        }).done(function (response) {
            const _default = {
                'drId':'T',
                'drName': '전체'
            }
            console.log(_default)
            response = [_default, ...response]
            console.log(response)
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
    } else if (checkboxValue == "") {
        let tagArea = document.getElementById('customerCode');
        $(tagArea).empty();
        let opt = document.createElement("option");
        opt.text = '전체';
        opt.value = 'T';
        tagArea.appendChild(opt);
    }
}