async function buscar(){
    console.log("Passei por aqui")
    const resposta = await fetch("https://660f44b6356b87a55c510ea0.mockapi.io/endpoints")
    const respostaDadosAgenda = await resposta.json();
    
    
    console.log("Resposta: ", respostaDadosAgenda)
    const cards = document.getElementById("cards_games")    
    
    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
            return "teste "
    }) 
}
console.log("antes de buscar") 
buscar();
console.log("depois de buscar") 