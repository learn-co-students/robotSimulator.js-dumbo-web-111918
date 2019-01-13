class Robot {
	constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    let acceptableDirections = ["north", "south", "east", "west"]
    if (acceptableDirections.includes(direction)) {
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place({x, y, direction}) {
    this.setCoordinates(x,y)
    this.setBearing(direction)
  }

  turnRight() {
    let directions = ["north", "east", "south", "west"]
    let index = directions.indexOf(this.bearing)
    this.bearing = directions[(index+1) % 4]
  }

  turnLeft() {
    let directions = ["north", "west", "south", "east"]
    let index = directions.indexOf(this.bearing)
    this.bearing = directions[(index+1) % 4]
  }

  advance() {
    let [x, y] = this.coordinates
    switch (this.bearing) {
      case "north":
        y++
        break;
      case "south":
        y--
        break;
      case "west":
        x--
        break;
      case "east":
        x++
        break;
      default:
        break;
    }
    this.setCoordinates(x, y)
  }

  translateInstructions(inst) {
    for (let char of inst) {
      switch (char) {
        case "L":
          this.turnLeft()
          break;
        case "R":
        this.turnRight()
          break;
        case "A":
          this.advance()
          break;
        default:
          throw "Not an acceptable instruction"
          break;
      }
    }
  }

}
