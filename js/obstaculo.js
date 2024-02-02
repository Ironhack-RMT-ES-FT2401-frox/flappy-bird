class Obstaculo {

  // propiedades
  constructor(type, position) {

    this.x = gameBoxNode.offsetWidth; // el ancho del game box (en numero) 600
    if (type === "arriba") {
      this.y = position // la posicion determinada con el random
    } else if (type === "abajo") {
      this.y = position + 340 // la posicion determinada con el random + la distancia entre los tubos de arriba y abajo
    }
    this.w = 60
    this.h = 200

    this.node = document.createElement("img")
    if (type === "arriba") {
      this.node.src = "./images/obstacle_top.png"
    } else if (type === "abajo") {
      this.node.src = "./images/obstacle_bottom.png"
    }

    gameBoxNode.append(this.node)

    // ajustamos valores del nodo
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

    // this.node.style.draggable = false

    this.speed = 2

  }
  
  
  // métodos

  // movimientos de los tubos ✅
  automaticMovement() {

    // this.x = this.x - this.speed
    this.x -= this.speed
    this.node.style.left = `${this.x}px`

  }
  


}