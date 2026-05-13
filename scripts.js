/*
                                    Jogo Jokenpo
   Neste jogo o computador tera que escolher uma opcao entre: "Pedra", "Papel", "Tesoura".

   Regras do jogo:
   Pedra ganha de Tesoura
   Tesoura ganha de Papel
   Papel ganha de Pedra
   Escolhas iguais: Empate

   Computador ira usar Math.random() e comparar com a opcao do jogador
*/

const result = document.querySelector('.result')
const userScore1 = document.querySelector('.userScore')
const computerScore2 = document.querySelector('.computerScore')
let userScore = 0
let computerScore = 0

/* 
humanScoreNumber = --> Camel Case
GAME_OPTIONS =   --> Snake Case
*/


const GAME_OPTIONS = {
    ROCK: 'Pedra',
    PAPER: 'Papel',
    SCISSORS: 'Tesoura'
}




function jogar(escolhaUsuario) {
    const opcoes = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
    let mensagem = ''
  


    if (escolhaUsuario === escolhaComputador) {
        mensagem = 'Empate!'  // guarda na variavel mensagem.
    } else if (
        (escolhaUsuario === GAME_OPTIONS.ROCK && escolhaComputador === GAME_OPTIONS.SCISSORS) ||  //Jogador vence
        (escolhaUsuario === GAME_OPTIONS.PAPER && escolhaComputador === GAME_OPTIONS.ROCK) ||    //Jogador vence
        (escolhaUsuario === GAME_OPTIONS.SCISSORS && escolhaComputador === GAME_OPTIONS.PAPER)     //Jogador vence
    ) {
        mensagem = 'Voce ganhou!' // guarda na variavel mensagem
        userScore++
    } else {
        mensagem = 'Voce perdeu!'  // guarda na variavel mensagem
        computerScore++
    }
    
    // apresenta no parágrafo
    result.innerText = `Voce escolheu: ${escolhaUsuario} | Computador escolheu: ${escolhaComputador} | ${mensagem}`

    userScore1.innerText = userScore
    computerScore2.innerText = computerScore

}
 

/* 
const result = document.querySelector('.result')
const userScore = document.querySelector('.userScore')
const computerScore = document.querySelector('.computerScore')


let userScoreNumber = 0
let computerScoreNumber = 0


// Função arrow criada para apresentar a escolha do humano. 
const jogar = (humanChoise) => {
      
    playTheGame(humanChoise, playMachine())
}



// Função criada para apresentar a escolha do computador, criando 2 variáveis, uma com um array de 3 escolha e outra para fazer a escolha aleatória do computador.
// Um retorno para apresentar a escolha do computador.
const playMachine = () => {
     const choises = ['Pedra', 'Papel', 'Tesoura']
     const rendomNumber = Math.floor(Math.random() * 3)
     
     return choises [rendomNumber]

}


const playTheGame = (human, machine) => {

    console.log('Humano: ' + human +  "Maquina: "  + machine) 
    
    if(human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === 'Papel' && machine === 'Pedra') || 
               (human === 'Pedra' && machine === 'Tesoura') || 
               (human === 'Tesoura' && machine === 'Papel')){
        userScoreNumber++        
        userScore.innerHTML = userScoreNumber
        result.innerHTML = "Você Ganhou!"
    } else {
        computerScoreNumber++
        computerScore.innerHTML = computerScoreNumber
        result.innerHTML = "Você perdeu"
    }

} */