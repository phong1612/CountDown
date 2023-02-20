const new_year = "1 Jan 2024";
function getSec() {
    const newYearDate = new Date(new_year);
    const current = new Date();
    const TotalSec = Math.floor((newYearDate - current) / 1000);
    const Days = Math.floor(TotalSec / 3600 / 24);
    const Hours = Math.floor(TotalSec / 3600) % 24;
    const Minutes = Math.floor(TotalSec / 60) % 60;
    const Seconds = TotalSec % 60;
    document.getElementById("days").innerHTML = Days < 10 ? `0${Days}` : Days;
    document.getElementById("hours").innerHTML = Hours < 10 ? `0${Hours}` : Hours;
    document.getElementById("mins").innerHTML = Minutes < 10 ? `0${Minutes}` : Minutes;
    document.getElementById("secs").innerHTML = Seconds < 10 ? `0${Seconds}` : Seconds;
}
getSec();
setInterval(getSec, 1000);