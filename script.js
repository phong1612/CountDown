//document.getElementById("DatePicker").value = new Date().toDateInputValue();

function getSec() {
    let getID = document.getElementById("DatePick").value;
    getID = getID.split('-');
    const new_ID = getID[0] + '/' + getID[1] + '/' + getID[2];
    const current = new Date();
    const day = ("0" + current.getDate()).slice(-2);
    const month = ("0" + (current.getMonth() + 1)).slice(-2);
    const today = current.getFullYear()+ "/" + month + "/" + day;
    const selected_day = new Date(new_ID);
    const TotalSec = Math.floor((selected_day - current) / 1000);
    if(TotalSec < 0) {
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("mins").innerHTML = 0;
        document.getElementById("secs").innerHTML = 0;
        const ob = document.querySelector(".warning");
        ob.style.display = "flex";
        ob.style.flexDirection = "column";
        console.log(ob);
    }
    else {
    const Days = Math.floor(TotalSec / 3600 / 24);
    const Hours = Math.floor(TotalSec / 3600) % 24;
    const Minutes = Math.floor(TotalSec / 60) % 60;
    const Seconds = TotalSec % 60;
    document.getElementById("days").innerHTML = Days < 10 ? `0${Days}` : Days;
    document.getElementById("hours").innerHTML = Hours < 10 ? `0${Hours}` : Hours;
    document.getElementById("mins").innerHTML = Minutes < 10 ? `0${Minutes}` : Minutes;
    document.getElementById("secs").innerHTML = Seconds < 10 ? `0${Seconds}` : Seconds;
    }
}
function eraseWarning() {
    const ob = document.querySelector(".warning");
    ob.style.display = "none";
    document.getElementById("DatePick").value = "2024-01-01";
}

getSec();
setInterval(getSec, 1000);