let estados = document.getElementsByClassName("estado")
let results = document.getElementById("results")
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

function getDetalhes(id) {
    fetch("https://api-estados-br.onrender.com/estados/detalhes/" + id)
    .then((res) => res.json())
    .then(payload => {
        let resultsData = null

        if(payload.status == 200){
            resultsData = "<h3>Dados do Estado</h3><p>"
            resultsData += "Estado: " + payload.data.estado + " | UF: (" + payload.data.uf + ")<br>"
            resultsData += "Região: " + payload.data.regiao + "<br>"
            resultsData += "Capital: " + payload.data.capital + "<br>"
            resultsData += "Área (km²): " + payload.data["area_km2"] + "<br>"
            resultsData += "População: " + payload.data.populacao + "<br>"
            resultsData += "IDH: " + payload.data.idh + "<br>"
            resultsData += "Fuso Horário: " + payload.data["fuso_horario"]
            resultsData += "</p>"
        }   else{
            resultsData = "Erro ao chamar a API"
        }

        results.innerHTML = resultsData
    })
}

getEstados()

for(let i = 0; i < 27; i++){
    estados[ids[i]].addEventListener('click', () => {
        results.innerHTML = null
        let searching = document.createElement("img")
        searching.setAttribute("src", "search.gif")
        searching.setAttribute("width", "50%")
        results.append(searching)
        let nomeEstado = estados[ids[i]].getAttribute("name")
        for(let i = 1; i <= 27; i++){
            if(nomeEstado == listaApi[i].estado){
                getDetalhes(i)
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