document.getElementById("dateClock").innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
setInterval(() => {
    dateClock.innerHTML = new Date().toLocaleDateString() + "<br/> " + new Date().toLocaleTimeString();
}, 1000);
