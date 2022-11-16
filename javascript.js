function carregar() {
    let msg = window.document.querySelector("div#msg")
    let img = window.document.querySelector("img#image")
    let data = new Date()
    let hourNow = data.getHours()
    let minutesNow = data.getMinutes()
    //var hour = 19
    //var minutesNow = 3
    
    if (minutesNow < 10) {
       minutesNow = '0' + minutesNow 
    } 

    if (hourNow >= 5 && hourNow < 12) {
        // BOM DIA!
        img.src = "morning.png"
        document.body.style.background = "#E3C474"
    } else if (hourNow > 5 &&hourNow <= 18) {
        // BUENAS TARDES!
        img.src = "afternoon.png"
        document.body.style.background = "#D38E43"
    } else {
        //GOOD EVENING!
        img.src = "night.png"
        document.body.style.background = "#053430"
    }
    
    msg.innerHTML = `Agora são ${hourNow}:${minutesNow} horas`
}
