let estados = document.getElementsByClassName("estado")

let ids = [
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

for(let i = 0; i < 27; i++){
    estados[ids[i]].addEventListener('click', () => {console.log(estados[ids[i]].getAttribute("name"))})
}