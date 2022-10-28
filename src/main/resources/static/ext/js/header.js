$(document).ready(function(){

    $(function(){
        let headerGnb = "<ul class='d-inline-flex justify-content-start'>";
        headerGnb += "<li class='read'>";
        headerGnb += "<span onclick='location.href=`/auth/managers.html`;'>원격판독</span>";
        headerGnb += "<ul>";
        headerGnb += "<li><a href='javascript:void(0);' target='_self'><span onclick='location.href=`/auth/managers.html`;'>의뢰목록</span></a></li>";
        headerGnb += "<li><a href='javascript:void(0);'><span onclick='location.href=`/auth/status/notarrange.html`;'>의뢰현황</span></a></li>";
        headerGnb += "<li><a href='javascript:void(0);'><span onclick='location.href=`/auth/statistics/week.html`;'>통계</span></a></li>";
        headerGnb += "<li><a href='javascript:void(0);'><span onclick='location.href=`/auth/rules/modality.html`;'>데이터표준화</span></a></li>";
        headerGnb += "<li><a href='javascript:void(0);'><span>소견서 출력</span></a></li>";
        headerGnb += "</ul></li>";
        headerGnb += "<li class='hospiManage'>";
        headerGnb += "<span onclick='location.href=`/auth/hospitals/index.html`;'>병원관리</span>";
        headerGnb += "<ul><li></li></ul></li>";
        headerGnb += "<li class='constract'>";
        headerGnb += "<span onclick='location.href=`/auth/users/contracts.html`;'>계약/정산</span>";
        headerGnb += "<ul><li></li></ul></li>";
        headerGnb += "<li class='userManage'>";
        headerGnb += "<span onclick='location.href=`/auth/users/localReadingDr.html`;'>사용자관리</span>";
        headerGnb += "<ul><li></li></ul></li>";
        headerGnb += "<li class='serviceManage'>";
        headerGnb += "<span onclick='location.href=`/auth/notice.html`;'>서비스관리</span>";
        headerGnb += "<ul>";
        headerGnb += "<li><a href='javascript:void(0);'><span onclick='location.href=`/auth/notice.html`;'>공지사항</span></a></li>";
        headerGnb += "<li><a href='javascript:void(0);'><span>카카오톡플러스친구</span></a></li>";
        headerGnb += "</ul></li>";
        headerGnb += "<li class='support'>";
        headerGnb += "<span onclick='window.open(`https://939.co.kr/xray21/`)'>고객지원</span>";
        headerGnb += "<ul><li></li></ul></li></ul>";
        headerGnb += "<menu class='justify-content-end d-inline-flex'>";
        headerGnb += "관리자(admin|0101)";
        headerGnb += "<span></span>";
        headerGnb += "<ul>";
        headerGnb += "<li><a href='javascript:void(0);'>마이페이지</a></li>";
        headerGnb += "<li><a href='javascript:void(0);'>연동 설정 관리</a></li>";
        headerGnb += "<li><a href='javascript:void(0);'>PACS 목록</a></li>";
        headerGnb += "<li><a href='javascript:void(0);'>로그아웃</a></li>";
        headerGnb += "</ul></menu>";

        $("header.admin").html(headerGnb);

        let headerGnbHospital = "<ul class='d-inline-flex justify-content-start'>";
        headerGnbHospital += "<li class='reception'>";
        headerGnbHospital += "<span>예정의뢰</span>";
        headerGnbHospital += "<ul><li></li></ul></li>";
        headerGnbHospital += "<li class='referral'>";
        headerGnbHospital += "<span onclick='location.href=`/auth/referrals.html`;'>완료의뢰</span>";
        headerGnbHospital += "<ul><li></li></ul></li>";
        headerGnbHospital += "<li class='calculate'>";
        headerGnbHospital += "<span onclick='location.href=`/auth/statistics/tat.html`;'>조회하기</span>";
        headerGnbHospital += "<ul><li></li></ul></li>";
        headerGnbHospital += "<li class='report'>";
        headerGnbHospital += "<span onclick='location.href=`/auth/referralReport.html`;'>소견서 출력</span>";
        headerGnbHospital += "<ul><li></li></ul></li>";
        headerGnbHospital += "<li class='support'>";
        headerGnbHospital += "<span onclick='window.open(`https://939.co.kr/xray21/`)'>고객지원</span>";
        headerGnbHospital += "<ul><li></li></ul></li></ul>";
        headerGnbHospital += "<menu class='justify-content-end d-inline-flex'>";
        headerGnbHospital += "사용자이름(판독센터명)";
        headerGnbHospital += "<span></span>";
        headerGnbHospital += "<ul>";
        headerGnbHospital += "<li>아이디 | 9186</li>";
        headerGnbHospital += "<li><a href='javascript:void(0);'>마이페이지</a></li>";
        headerGnbHospital += "<li><a href='javascript:void(0);'>로그아웃</a></li>";
        headerGnbHospital += "</ul></menu>";
       
        $("header.hospital").html(headerGnbHospital);

        //1depth 메뉴마다 해당 파일에 메뉴별 구분자 'current' 를 넣어주도록 되어있음, 파일 구조 달라질 경우 아래 주석 사용.
        /*$(".admin > ul > li").on("click",function(e){
            e.preventDefault();

            
            $("li").removeClass("current");
            $(this).addClass("current");
        });*/
    });
});