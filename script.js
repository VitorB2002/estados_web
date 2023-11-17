let estados = document.getElementsByClassName("estado")
let listaApi
const ids = [
    "BRA1294", 
    "BRA1311", 
    "BRA1313", 
    "BRA576", 
    "BRA592", 
    "BRA593", 
    "BRA594", 
    "BRA595", 
    "BRA596", 
    "BRA599", 
    "BRA600", 
    "BRA601", 
    "BRA602", 
    "BRA612", 
    "BRA613", 
    "BRA614", 
    "BRA621", 
    "BRA622", 
    "BRA623", 
    "BRA624", 
    "BRA625", 
    "BRA626", 
    "BRA627", 
    "BRA628", 
    "BRA629", 
    "BRA670", 
    "BRA681",
]

function getEstados() {
    fetch("https://api-estados-br.onrender.com/estados")
    .then((res) => res.json())
    .then(payload => {
        listaApi = payload.data
    })
}

getEstados()

for(let i = 0; i < 27; i++){
    estados[ids[i]].addEventListener('click', () => {
        let nomeEstado = estados[ids[i]].getAttribute("name")
        for(let i = 1; i <= 27; i++){
            if(nomeEstado == listaApi[i].estado){
                console.log(listaApi[i])
                break
            }
        }
    })
    
    estados[ids[i]].addEventListener('mouseover', () => {
        estados[ids[i]].setAttribute("fill", "#f00")
        let selecionado = document.getElementById("select")
        selecionado.innerText = "Estado Selecionado: " + estados[ids[i]].getAttribute("name")
    })

    estados[ids[i]].addEventListener('mouseout', () => {
        estados[ids[i]].setAttribute("fill", "#7c7c7c")
        let selecionado = document.getElementById("select")
        selecionado.innerText = "Estado Selecionado: "
    })
}