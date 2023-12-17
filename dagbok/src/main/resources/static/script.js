let dateClock = document.getElementById("date-clock");
dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
setInterval(() => {
    dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
}, 1000);

let datePickerMin = document.getElementById("date-picker-min");
if (localStorage.getItem("datePickerMin") === null) {
    localStorage.setItem("datePickerMin", "2023-01-01");
} else {
    datePickerMin.value = localStorage.getItem("datePickerMin");
}
datePickerMin.setAttribute("value", localStorage.getItem(datePickerMin));

let datePickerMax = document.getElementById("date-picker-max");
if (localStorage.getItem("datePickerMax") === null) {
    localStorage.setItem("datePickerMax", new Date().toLocaleDateString());
} else {
    datePickerMax.value = localStorage.getItem("datePickerMax");
}
datePickerMax.setAttribute("value", localStorage.getItem(datePickerMax));

datePickerMin.addEventListener("input", () => {
    localStorage.setItem("datePickerMin", datePickerMin.value);
});

datePickerMax.addEventListener("input", () => {
    localStorage.setItem("datePickerMax", datePickerMax.value);
});

let dateTitles = document.getElementsByClassName("date-title");

for (let i = 0; i < dateTitles.length; i++) {
    if (dateTitles.item(i).innerHTML < localStorage.getItem("datePickerMin")) {
        dateTitles.item(i).parentElement.setAttribute("hidden", "true");
    } else {
    }
}
