// Kod för datum och klocka uppe i höger hörn.
let dateClock = document.getElementById("date-clock");
dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
setInterval(() => {
    dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
}, 1000);

// Kod för minsta datum.
let datePickerMin = document.getElementById("date-picker-min");
datePickerMin.value = localStorage.getItem("datePickerMin") === null ? datePickerMin.getAttribute("min") : localStorage.getItem("datePickerMin");
datePickerMin.addEventListener("input", (e) => {
    if (e.target.value > datePickerMax.value) {
        e.target.value = datePickerMax.value;
    }
    localStorage.setItem("datePickerMin", e.target.value);
    setTimeout(() => {
        location.reload();
    }, 250);
});

// Kod för största datum.
let datePickerMax = document.getElementById("date-picker-max");
datePickerMax.value = localStorage.getItem("datePickerMax") === null ? new Date().toLocaleDateString() : localStorage.getItem("datePickerMax");
datePickerMax.addEventListener("input", (e) => {
    if (e.target.value < datePickerMin.value) {
        e.target.value = datePickerMin.value;
    }
    localStorage.setItem("datePickerMax", e.target.value);
    setTimeout(() => {
        location.reload();
    }, 250);
});

// Existerar inga inlägg? Då informerar vi användaren om detta.
if (document.getElementsByTagName("li").length === 0) {
    let h3 = document.createElement("h3");
    h3.innerHTML = "Inga inlägg existerar. Testa att lägga till ett inlägg. :)";
    document.getElementsByTagName("ul").item(0).append(h3);
} else {
    // Annars kontrollerar vi om ett inläggs datum ligger inom datumintervallet. Gör inlägget inte det gömmer vi inlägget.
    let notes = document.getElementsByTagName("li");
    for (let i = 0; i < notes.length; i++) {
        let date = document.getElementsByClassName("note-form").item(i).children.item(1).value;
        if (date < datePickerMin.value || date > datePickerMax.value) {
            notes.item(i).setAttribute("hidden", "true");
        }
    }
    // Är alla inlägg dolda?. Då informerar vi användaren om detta.
    let hiddenNotes = Array.from(notes).filter((n) => {
        return n.getAttribute("hidden");
    });
    if (hiddenNotes.length === notes.length) {
        let h3 = document.createElement("h3");
        h3.innerHTML = "Alla inlägg är dolda. Testa ett annat datumintervall. :)";
        document.getElementsByTagName("ul").item(0).append(h3);
    }
}

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
