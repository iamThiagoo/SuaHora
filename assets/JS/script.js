const temporiazador = document.querySelector("h2");
const minhaBox = document.querySelector(".box");

function tempo(){
    const data = new Date();
    return data.toLocaleTimeString(`pt-BR`, {
        hour12: false
    });
}

const timer = setInterval(() =>{
    temporiazador.innerHTML = tempo();
}, 1000);

minhaBox.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = `var(--pink)`;
    temporiazador.style.color = `var(--green)`;
})

minhaBox.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = `var(--green)`;
    temporiazador.style.color = `var(--pink)`;
})