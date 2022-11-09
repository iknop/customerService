$(function() {
    const isUpdatePage = window.location.pathname.includes('update');
    if (isUpdatePage) {
        $('#otherID').addClass('d-none');
        $('#btn-change-loginId').addClass('d-none');
    }

    $('#btn-change-loginId').on('click', function() {
        const otherID = $('#otherID').val();
        console.log('click!')
        window.location = window.location.pathname + '?otherID=' + otherID;
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

function onClickBtnChangeLoginId() {
}