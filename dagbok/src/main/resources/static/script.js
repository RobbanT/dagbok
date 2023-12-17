// Kod för datum och klocka uppe i höger hörn.
let dateClock = document.getElementById("date-clock");
dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();

setInterval(() => {
    dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
}, 1000);

// Kod för minsta datum.
let datePickerMin = document.getElementById("date-picker-min");
datePickerMin.setAttribute("min", "2023-01-01");

if (localStorage.getItem("datePickerMin") === null) {
    localStorage.setItem("datePickerMin", datePickerMin.getAttribute("min"));
} else {
    datePickerMin.value = localStorage.getItem("datePickerMin");
}

datePickerMin.setAttribute("value", localStorage.getItem("datePickerMin"));
datePickerMin.addEventListener("input", (e) => {
    if (e.target.value >= datePickerMax.value) {
        let maxDate = new Date(datePickerMax.value);
        let dayBeforeMax = new Date();
        dayBeforeMax.setDate(maxDate.getDate() - 1);
        e.target.value = dayBeforeMax.toLocaleDateString();
    }
    localStorage.setItem("datePickerMin", e.target.value);
    setTimeout(() => {
        location.reload();
    }, 250);
});

// Kod för högsta datum.
let datePickerMax = document.getElementById("date-picker-max");
datePickerMax.setAttribute("max", new Date().toLocaleDateString());

if (localStorage.getItem("datePickerMax") === null) {
    localStorage.setItem("datePickerMax", datePickerMax.getAttribute("max"));
} else {
    datePickerMax.value = localStorage.getItem("datePickerMax");
}

datePickerMax.setAttribute("value", localStorage.getItem(datePickerMax));
datePickerMax.addEventListener("input", (e) => {
    if (e.target.value <= datePickerMin.value) {
        let minDate = new Date(datePickerMin.value);
        let dayAfterMin = new Date();
        dayAfterMin.setDate(minDate.getDate() + 1);
        e.target.value = dayAfterMin.toLocaleDateString();
    }
    localStorage.setItem("datePickerMax", e.target.value);
    setTimeout(() => {
        location.reload();
    }, 250);
});

let dateTitles = document.getElementsByClassName("date-title");
for (let i = 0; i < dateTitles.length; i++) {
    if (dateTitles.item(i).innerHTML < localStorage.getItem("datePickerMin") || dateTitles.item(i).innerHTML > localStorage.getItem("datePickerMax")) {
        dateTitles.item(i).parentElement.setAttribute("hidden", "true");
    } else {
    }
}
