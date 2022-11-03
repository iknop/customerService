let customerType;
let customerCode;

$(function () {
    customerType = getCustomerType();
    checkCustomerTypeBox(customerType)
    showResponseTypeName()
    getCustomerName()
})

function getCustomerType() {
    let customerCode = $('#customerCode').val();
    console.log(customerCode)

    let isHospital = Boolean(parseInt(customerCode)); // 코드가 숫자면 병원

    if (isHospital) {
        customerType = 'hospital';
    } else {
        customerType = 'doctor';
    }
    return customerType;
}


function checkCustomerTypeBox(type) {
    if (type == 'hospital') {
        $('#cs_hsp').prop('checked', true);
    } else if (type == 'doctor') {
        $('#cs_dr').prop('checked', true);
    }

}

function showResponseTypeName(){
    let responseTypeCode = $('#responseType').val();
    if(responseTypeCode == 'P'){
        $('#responseType option:eq(1)').prop('selected',true)
    }else{
        $('#responseType option:eq(2)').prop('selected',true)
    }
}

function getCustomerName(){
    customerType = getCustomerType()
    showCustomerList()
    if (customerType === "hospital") {
        // 병원 ajax
        $.ajax({
            type: 'GET',
            url: '/api/cs/hospitalList',
            async: false
        }).done(function (response) {
            customerCode = $('#customerCode').val()

            let loop = response.length;
            for(let i = 0; i < loop; i++){
                if(customerCode == response[i].hospitalName){
                    $('#customerCode [name="response[i].hospitalName"][value="customerCode"]').prop('selected',true)
                }
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
            customerCode = $('#customerCode').val()

            let loop = response.length;
            for(let i = 0; i < loop; i++){
                if(customerCode == response[i].drId){
                    $('#customerCode [name="response[i].drName"][value="drId"]').prop('selected',true)
                }
            }

        }).fail(function (response) {
            console.log(response)
        })
    }
}