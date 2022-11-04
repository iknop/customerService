$(function(){
    let crId = $("#crId").val();
    $.ajax({
        type: 'GET',
        url: '/api/board/'+crId,
        data: crId

    }).done(function (response) {
        console.log(response)
        // getCustomerNameInShow() //customerCode로 customerName 불러오기
        setResponseType() // 서비스 구분: 일반/프로그램문의
                            // createUserCode로 createUserName 불러오기
    }).fail(function (response) {
        console.log(response)
    })
})

function setResponseType(){
    let responseType = $('input[name="responseType"]').val();
    //console.log(responseType)
    if(responseType == 'P'){
        $("#responseType").text("프로그램문의");
    }else{
        $("#responseType").text("일반");
    }
}

// function getCustomerInfo(){
//     let customerType;
//     let customerCode = $('#customerCode').val();
//     //console.log(customerCode)
//
//     let isHospital = Boolean(parseInt(customerCode)); // 코드가 숫자면 병원
//
//     if (isHospital) {
//         customerType = 'hospital';
//     } else {
//         customerType = 'doctor';
//     }
//     // console.log(customerType)
//     return customerType
// }
//
// function getCustomerNameInShow(){
//     let customerCategory = getCustomerInfo()
//     if (customerCategory === "hospital") {
//         // 병원 ajax
//         $.ajax({
//             type: 'GET',
//             url: '/api/cs/hospitalList',
//             async: false
//         }).done(function (response) {
//             console.log(response)
//             let customerId = $('#customerCode').val()
//             console.log(customerId)
//
//             let loop = response.length;
//
//             for(let i = 0; i < loop; i++){
//                 if(customerId == response[i].hospitalCode){
//                     console.log(response[i].hospitalCode)
//                     $('#customerInfo').text(response[i].hospitalName + '('+customerId+')')
//                 }
//             }
//         }).fail(function (response) {
//             console.log(response)
//         })
//     } else if (customerCategory == "doctor") {
//         // 판독의 ajax
//         $.ajax({
//             type: 'GET',
//             url: '/api/cs/doctorList',
//             async: false
//         }).done(function (response) {
//             let customerId = $('#customerCode').val()
//             let loop = response.length;
//             for(let i = 0; i < loop; i++){
//                 if(customerId == response[i].drId){
//                     $('#customerInfo').innerText = response[i].drName + '('+customerId+')';
//                 }
//             }
//         }).fail(function (response) {
//             console.log(response)
//         })
//     }
// }

