
async function Cadastrar(){
    
    const nomeJogo = document.getElementById("nome_jogo").value;
    const dataJogo = data_jogo.value;
    const descricaoJogo = descricao_jogo.value;
    const gamersJogo = gamers_jogo.value;
    const imagemJogo = imagen_jogo.value;
    const liveJogo = url_live.value;
    
    const dadosAgenda = {
        "nome": nomeJogo,
        "dataJogo": dataJogo,
        "descricao": descricaoJogo,
        "gamers": gamersJogo.split(','),
        "urlAssistir": imagemJogo,
        "urlImagem": liveJogo
    }

    const respostaCadastro = await fetch("https://660f44b6356b87a55c510ea0.mockapi.io/endpoints",{
        method: "POST",
        body: JSON.stringify(dadosAgenda),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    })

    if(respostaCadastro.status == 201){
        window.location.href = "agenda.html"
    }else{
        alert("Ocorreu um erro ao cadastrar")
    }
        

}