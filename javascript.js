function carregar() {
    let section = document.querySelector('section')
    let div = document.createElement('div')
    div.getAttribute('id', 'foto')
    section.appendChild(div)
    let imgCrEl = document.createElement('img')
    imgCrEl.setAttribute('id', 'image')
    div.appendChild(imgCrEl)
    
    let msg = window.document.querySelector("div#msg")
    let img = window.document.querySelector("img#image")
    let data = new Date()
    let hourNow = data.getHours()
    let minutesNow = data.getMinutes()
    //let hourNow = 18
    //let minutesNow = 3

    if (minutesNow < 10) {
       minutesNow = '0' + minutesNow 
    } 

    if (hourNow >= 5 && hourNow < 12) {
        // BOM DIA!
        img.src = "images/morning.png"
        document.body.style.background = "#E3C474"
        let novoParagrafo = document.createElement('p')
        let texto = document.createTextNode('Bom dia!')
        novoParagrafo.appendChild(texto)
        let section = document.querySelector('section')
        section.appendChild(novoParagrafo)
        novoParagrafo.style.textAlign = 'center'
        novoParagrafo.style.background = '#E3C474'
        novoParagrafo.style.borderRadius = '20px'
    } else if (hourNow > 5 && hourNow <= 18) {
        // BUENAS TARDES!
        img.src = "images/afternoon.png"
        document.body.style.background = "#D38E43"
        let novoParagrafo = document.createElement('p')
        let texto = document.createTextNode('Boa tarde!')
        novoParagrafo.appendChild(texto)
        let section = document.querySelector('section')
        section.appendChild(novoParagrafo)
        section.style.textAlign = 'center'
        novoParagrafo.style.background = '#D38E43'
        novoParagrafo.style.borderRadius = '20px'
    } else {
        //GOOD EVENING!
        img.src = "images/night.png"
        document.body.style.background = "#053430"
        let novoParagrafo = document.createElement('p')
        let texto = document.createTextNode('Boa noite!')
        novoParagrafo.appendChild(texto)
        let section = document.querySelector('section')
        section.appendChild(novoParagrafo)
        novoParagrafo.style.textAlign = 'center'
        novoParagrafo.style.color = "white"
        novoParagrafo.style.background = '#053430'
        novoParagrafo.style.borderRadius = '20px'
    }
    
    msg.innerHTML = `Agora são ${hourNow}:${minutesNow} horas`
}
