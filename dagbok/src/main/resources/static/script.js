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

// Kod för att göra inlägg osynliga om ilägget inte finns inom angivet datum-intervall.
let dateTitles = document.getElementsByClassName("date-title");
for (let i = 0; i < dateTitles.length; i++) {
    if (dateTitles.item(i).innerHTML < localStorage.getItem("datePickerMin") || dateTitles.item(i).innerHTML > localStorage.getItem("datePickerMax")) {
        dateTitles.item(i).parentElement.setAttribute("hidden", "true");
    }
}

/*let hiddenNotes = Array.from(dateTitles, (d) => {
    return d.parentElement.getAttribute("hidden");
});
if (dateTitles.length == 0) {
    let parent = document.getElementsByTagName("ul");
    parent.item(0).append((document.createElement("h4").innerHTML = "Inga inlägg existerar. Testa att lägga till ett inlägg. :)"));
    parent.item(0).style.font = "bold 22px Arial";
    parent.item(0).style.color = "#333333";
    parent.item(0).style.justifyContent = "center";
    parent.item(0).style.alignItems = "center";
    parent.item(0).style.display = "flex";
} else if (
    hiddenNotes.every((d) => {
        return d;
    })
) {
    let parent = document.getElementsByTagName("ul");
    parent.item(0).append((document.createElement("h4").innerHTML = "Alla inlägg är dolda. Testa ett annat datum-intervall. :)"));
    parent.item(0).style.font = "bold 22px Arial";
    parent.item(0).style.color = "#333333";
    parent.item(0).style.justifyContent = "center";
    parent.item(0).style.alignItems = "center";
    parent.item(0).style.display = "flex";
}
*/

// När användaren klickar på "Nytt inlägg" visar vi vårt popup-fönster.
document.getElementById("new-note-button").addEventListener("click", () => {
    document.getElementById("new-note-window").style.display = "block";
});

// Om användaren trycker bort fönstret så döljer vi det och återställer elementen till sina standardvärden.
document.getElementById("close-button").addEventListener("click", () => {
    document.getElementById("new-note-window").style.display = "none";
    document.getElementById("new-note-title").value = "";
    document.getElementById("new-note-date").value = "";
    document.getElementById("new-note-text").value = "";
});
