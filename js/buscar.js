async function buscar() {
  console.log("Passei por aqui");

  const resposta = await fetch(
    "https://660f44b6356b87a55c510ea0.mockapi.io/endpoints"
  );

  const respostaDadosAgenda = await resposta.json();

  console.log("Respota: ", respostaDadosAgenda);

  const cards = document.getElementById("cards_games");

  cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {

    var datagame = new Date(itemAgenda.dataJogo)

    return `
      <div class="cardItem">
        <div class="dataGame">
          <img src="../assets/imagens/calendar-solid.svg" alt="" />
          ${datagame.getDay()}/${datagame.getMonth()}/${datagame.getFullYear()}
        </div>
        <img class="img-background" src="${itemAgenda.urlImagem}" alt="" />
        <div class="descricao">
          <p><strong>${itemAgenda.nome}</strong></p>
          <p>
            ${itemAgenda.descricao}
          </p>
          <p><strong>Gamers: </strong></p>

          
          <div class="gamers" id="gamers">
          ${itemAgenda.gamers.map((jogador) => {
            return `
            <div class="gamerItem">@${jogador}</div>
            `;
          }).join('')}
          </div>
          
        </div>
        <div class="assistir">
          <a class="assistirItem" src="${itemAgenda.urlAssistir}">
            <img src="../assets/imagens/youtube.svg" alt="" /> Assistir
          </a>
        </div>
      </div>
    `;
  }).join('');
}

buscar();


