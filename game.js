const field = document.querySelector(".field")
const buttonSize = document.querySelector("button")

buttonSize.addEventListener("click",()=>field.replaceChildren(...getField(+prompt())))
window.addEventListener("load",()=>field.append(...getField()))

function getField(size = 16){
    let field = []
    for(let i = 0; i<size*size;i++){
        field[i] = getDiv(size)
    }
    return field
}

function getDiv(size = 16){
    let div = document.createElement("div")
    div.style.width = (field.clientWidth / size-1) + "px";
    div.style.height = (field.clientHeight / size-1) + "px";
    div.addEventListener("mousemove",changeColor)
    console.log(div)
    return div;
}
function changeColor(){
    this.style.background = "red";
}