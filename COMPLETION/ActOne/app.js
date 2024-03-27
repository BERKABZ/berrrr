import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"

let container = document.getElementById("container")

const data = {
    title: "My Dog",
    title2: "Diding",
    para1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui commodi ullam tempora, iusto temporibus provident totam fugiat odit quam natus ipsa aperiam laborum ipsam dolorem dolores! Architecto accusamus corrupti tempore!.",
    para2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui commodi ullam tempora, iusto temporibus provident totam fugiat odit quam natus ipsa aperiam laborum ipsam dolorem dolores! Architecto accusamus corrupti tempore!.",
    button1: "About Us",
    button2: "About You",
    button3: "Contact Us",
    button4: "Contact You",
    image: "dog.avif",

}
                                          
const{title, para1,title2, para2, button1, button2, button3, button4, image } = data

container.append(leftDiv(title, para1, title2,para2, button1, button2, button3, button4))
container.append(rightDiv(image))

