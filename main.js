import { foo } from "./foo.js"
import "./style.css"

const div = document.createElement('div')
div.innerHTML = "2232"
document.body.appendChild(div)

const btn = document.createElement("button")
btn.innerText = "按钮"

btn.onclick = async () => {
    //加载bar.js
    const {bar} = await import(/* webpackChunkName: "bar" */"./bar.js")
    console.log(bar())
}

document.body.appendChild(btn)

console.log("main");

 console.log(foo())