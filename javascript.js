function carregar() {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("img#image")
    var data = new Date()
    var hour = data.getHours()
    //var hour = 19
    msg.innerHTML = `Agora são ${hour} horas`

    if (hour >= 4 && hour < 12) {
        // BOM DIA!
        img.src = "morning.png"
        document.body.style.background = "#E3C474"
    } else if (hour >= 12 && hour <= 18) {
        // BUENAS TARDES!
        img.src = "afternoon.png"
        document.body.style.background = "#D38E43"
    } else {
        //GOOD EVENING!
        img.src = "night.png"
        document.body.style.background = "#053430"
    }
}
