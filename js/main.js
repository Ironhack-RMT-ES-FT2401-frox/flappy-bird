// * DOM ELEMENTS & GLOBAL VARIABLES
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#gameover-screen")
const startBtnNode = document.querySelector("#start-btn")
const gameBoxNode = document.querySelector("#game-box")

let gameObj; // en la pantalla inicial el juego no existe aun

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("clickando")

  // ocultar la pantalla de inicio
  splashScreenNode.style.display = "none";

  // mostrar la pantalla de juego
  gameScreenNode.style.display = "flex"

  // crear el objeto de juego
  gameObj = new Game()
  console.log(gameObj)

  // iniciar el juego y inicia todos los intervalos que haya
  gameObj.start()
  gameObj.obstaclesAppearLoop() // cada 1.5s aparece otro
  // gameObj.obstacleAppear() // aparece 1
}

// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)

gameBoxNode.addEventListener("click", () => {

  // como puedo hacer saltar al pollito acá??
  gameObj.pollitoObj.jump()

})
