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

  }


  // aqui estarán todos los métodos (acciones) del juego

  obstaclesAppearLoop() {

    // creamos un intervalo, que indique que cada segundo, se añade un nuevo obstaculo
    setInterval(() => {
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


  gameLoop() {
    // esto es para acciones y checkeos automaticos (60 por segundo)
    this.pollitoObj.gravityEffect()
    // this.obstaculoDePrueba.automaticMovement()
    this.obstaculosArr.forEach((eachObstaculo) => {
      eachObstaculo.automaticMovement()
    })

  }

  // el bucle del juego
  start() {
    window.setInterval(() => {
      this.gameLoop()
    }, this.gameIntervalFrequency)
  }



  
  // los tubos aparezcan y desaparecen (spawning)
  // colisiones del pollito contra los tubos


  // BONUS
  // Score
  // Reiniciar


}