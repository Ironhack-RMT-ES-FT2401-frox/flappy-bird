class Pollito {

  // propiedades del pollito
  constructor() {

    this.x = 50; // posición desde la izquierda de la pantalla de juego
    this.y = 80; // la posición desde el tope de la pantalla de juego
    this.w = 50; // ancho del pollito
    this.h = 40; // alto del pollito

    // la imagen del pollito (el nodo)
    this.node = document.createElement("img")
    this.node.src = "./images/flappy.png"
    
    // agregarlo al la caja de juego
    gameBoxNode.append(this.node)

    // ajustamos valores del nodo
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

    this.node.style.pointerEvents = "none";
    // la linea arriba es para evita interactuar con el elemento por error al clickar sobre él

    this.gravitySpeed = 2.5
    this.jumpSpeed = 40

  }


  // métodos del pollito

  // efecto de gravedad del pollito ✅
  gravityEffect() {
    // en el intervalo de juego, esto se debe ejecutar y 60fps debe mover el pollito hacia abajo
    // console.log("haciendo efecto de gravedad del pollito")

    // gameBoxNode.offsetHeight es el alto del game-box
    // gameBoxNode.offsetWidth es el ancho del game-box
    if (this.y + this.h < gameBoxNode.offsetHeight) {
      this.y += this.gravitySpeed
      this.node.style.top = `${this.y}px`
    }
  }

  // salto del pollito (addeventlistener) ✅
  jump() {
    if (this.y > 0) {
      this.y -= this.jumpSpeed
      this.node.style.top = `${this.y}px`
    }
  }

  // colision del pollito con el piso y el techo ✅

}