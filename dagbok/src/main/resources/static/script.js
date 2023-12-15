document.getElementById("dateClock").innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
let datePickers = document.getElementsByClassName("date-picker");
datePickers.item(0).setAttribute("value", new Date().toLocaleDateString());
setInterval(() => {
    dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
}, 1000);

datePickers.item(0).addEventListener("input", () => {
    datePickers.item(0).style.color = "black";
});

datePickers.item(1).addEventListener("input", () => {
    datePickers.item(1).style.color = "black";
});
