let today = new Date();
// 날짜 포메팅
function getFullYmdStr(){
today = new Date();
document.querySelector('.today').textContent = today.getFullYear() + "년 " + (today.getMonth()+1) + "월 " + today.getDate() + "일 " + '일월화수목금토'.charAt(today.getUTCDay())+'요일';
}

// 시간 포메팅
function getFullHmsStr(){
today = new Date();
  if(today.getHours() > 12) {
    document.querySelector('.clockTime').textContent = `오후 ${today.getHours() - 12} : ${today.getMinutes()} : ${today.getSeconds()}`
  }else if(today.getHours() < 10) {
    document.querySelector('.clockTime').textContent = `오전 0${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`
  }else {
    document.querySelector('.clockTime').textContent = `오전 ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`
  }
}

getFullYmdStr()
setInterval(getFullHmsStr, 1000);
getFullHmsStr()
setInterval(getFullHmsStr, 1000);

// Date 객체 생성
let date = new Date();

const renderCalendar = () => {
const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

// yearMonth, today 채우기
document.querySelector('.yearMonth').textContent = `${viewYear}년 ${viewMonth + 1}월`;

// 지난 달 마지막 Date, 이번 달 마지막 Date
const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

// Dates 기본 배열들
const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

// prevDates 계산
if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);
    }
}

// nextDates 계산
for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
}

// Dates 합치기
const dates = prevDates.concat(thisDates, nextDates);

// Dates 정리
const firstDateIndex = dates.indexOf(1); // 이번달 첫날의 인덱스
const lastDateIndex = dates.lastIndexOf(TLDate); // 이번달 마지막날의 인덱스
dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
    ? 'this'
    : 'other';
    dates[i] = `<li class="date"><span class="${condition}">${date}</span></li>`
})

// Dates 그리기
document.querySelector('.dates').innerHTML = dates.join('');

// 오늘 날짜 찾기
if(viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
    if (+date.innerText === today.getDate()) {
        date.classList.add('curday');
        break;
    }
    }
}
}

renderCalendar();

// 이전달 버튼
const prevMonth = () => {
date.setMonth(date.getMonth() - 1);
renderCalendar();
}
// 다음달 버튼
const nextMonth = () => {
date.setMonth(date.getMonth() + 1);
renderCalendar();
}
// 오늘날짜 버튼
const goToday = () => {
date = new Date();
renderCalendar();
}