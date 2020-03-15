const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    hr.innerHTML = hh + ": ";
    mn.innerHTML = mm + ":";
    sc.innerHTML = ss;

});