

const leftDiv= (title, para1, title2, para2, button1, button2, button3, button4) =>{
    let div= document.createElement("div")
    div.className= "classLeft"
    div.innerHTML = `<h1 class="ti">${title}</h1>
                    <p>${para1}</p>
                    <button class="btn1">${button1}</button>
                    <button class="btn2">${button2}</button>
                    <h1>${title2}</h1>
                    <p>${para2}</p>
                    <button class="btn3">${button3}</button>
                    <button class="btn4">${button4}</button>`

            return div

}

export {leftDiv}