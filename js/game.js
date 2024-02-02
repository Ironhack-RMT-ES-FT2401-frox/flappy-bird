class Game {

  // aqui estarán todas las propiedades (elementos) del juego
  constructor() {

    // el fondo ✅

    this.gameIntervalFrequency = Math.round(1000/60) // 60fps o 60 veces por segundo. Recomendado no tocar.
    // el pollito ✅
    this.pollitoObj = new Pollito()

    // los tubos (muchos) ✅
    // this.obstaculoDePrueba = new Obstaculo()
    this.obstaculosArr = []
    this.obstauloAppearFrequency = 1500

    this.gameIntervalId; // vacio al inicio. Se almacena luego el Id cuando empieza el intervalo
    this.obstacleAppearIntervalId;

  }


  // aqui estarán todos los métodos (acciones) del juego


  // los tubos aparezcan y desaparecen (spawning) ✅
  obstaclesAppearLoop() {

    // creamos un intervalo, que indique que cada segundo, se añade un nuevo obstaculo
    this.obstacleAppearIntervalId = setInterval(() => {
      this.obstacleAppear()
    }, this.obstauloAppearFrequency)

  }

  obstacleAppear() {
    let positionAppear = Math.random() * (-120) // -120 y 0

    let nuevoObstaculoArriba = new Obstaculo("arriba", positionAppear); // -80
    this.obstaculosArr.push(nuevoObstaculoArriba)
    // debemos tomar en cuenta elementos que salgan el juego y borrarlos
    
    let nuevoObstaculoAbajo = new Obstaculo("abajo", positionAppear); // -80
    this.obstaculosArr.push(nuevoObstaculoAbajo)
    console.log(this.obstaculosArr.length)
  }

  // colisiones del pollito contra los tubos ✅
  collitionCheckPollitoObstaculos() {

    this.obstaculosArr.forEach((eachObstaculoObj) => {
      
      // necesitamos el pollito => this.pollitoObj
      // necesitamos cada uno de los obstaculos => eachObstaculoObj
      if (
        this.pollitoObj.x < eachObstaculoObj.x + eachObstaculoObj.w &&
        this.pollitoObj.x + this.pollitoObj.w > eachObstaculoObj.x &&
        this.pollitoObj.y < eachObstaculoObj.y + eachObstaculoObj.h &&
        this.pollitoObj.y + this.pollitoObj.h > eachObstaculoObj.y
      ) {
        // Collision detected!
        // console.log("ha colisionado")
        this.gameOver()
      } 
    })
  }

  gameOver() {
    // SIEMPRE limpiar todos los intervalos o timeouts de nuestro juego en game over
    clearInterval(this.gameIntervalId)
    clearInterval(this.obstacleAppearIntervalId)

    // ocultamos la pagina de juego
    gameScreenNode.style.display = "none";

    // mostramos la pagina final
    gameOverScreenNode.style.display = "flex"
  }

  checkIfObstaculoLeftGameBox() {
    // verique si un obstaculo ha salido de la pantalla, remuevelo

    if (this.obstaculosArr[0] !== undefined && this.obstaculosArr[0].x < -60) {
      // si en el array hay al menos un elemento y si ese elemento salió del gamebox por la izquierda
      // -60 porque es el ancho del obstaculo. Tambien se puede this.obstaculosArr[0].w
      console.log("obstaculo saliendo")

      // remueve el elemento (REMOVER DEL JS Y REMOVER EL NODO DEL DOM)
      this.obstaculosArr[0].node.remove() // remueve el elemento del DOM
      this.obstaculosArr.shift() // eliminalo del array

    }

  }

  gameLoop() {
    // esto es para acciones y checkeos automaticos (60 por segundo)
    this.pollitoObj.gravityEffect()
    // this.obstaculoDePrueba.automaticMovement()
    this.obstaculosArr.forEach((eachObstaculo) => {
      eachObstaculo.automaticMovement()
    })

    this.collitionCheckPollitoObstaculos()
    this.checkIfObstaculoLeftGameBox()

  }

  // el bucle del juego
  start() {
    this.gameIntervalId = window.setInterval(() => {
      this.gameLoop()
    }, this.gameIntervalFrequency)
  }
}


// BONUS
// Score
// Reiniciar
