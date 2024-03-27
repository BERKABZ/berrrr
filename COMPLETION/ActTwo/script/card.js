const cardfunc = (image, desc, button1) => {
    let div = document.createElement('div')
    div.className = "cardsec2"
    div.innerHTML = `
        <img class = "hop" src="${image}" alt="my picture">
        <p class="hud">${desc}</p>
        <button class="but">${button1}</button>
        
        
    `
    return div;
}

export { cardfunc }