// etc functions =======================

function DateToText(date, s, e) {
    let timeArray = [];
    timeArray.push(date.getFullYear());
    timeArray.push(date.getMonth() + 1);
    timeArray.push(date.getDate());
    timeArray.push(date.getHours());
    timeArray.push(date.getMinutes());
    timeArray.push(date.getSeconds());

    let unit = ['년', '월', '일', '시', '분', '초'];

    let res = [];
    for (let i = s; i <= e; i++)
        res.push(String(timeArray[i]) + unit[i]);
    return res.join(' ');
}

function UpdateTimePerSecond(timeChanger) {
    setInterval(() => timeChanger(new Date()), 1000);
}

export { DateToText };