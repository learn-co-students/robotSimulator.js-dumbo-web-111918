class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(a,b) {
    this.coordinates = [a,b]
  }

  setBearing(direction) {
    let valid = ["north", "south", "east", "west"];
    if (valid.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error ("Invalid Robot Bearing")
    }
  }

  place(position) {
    this.setCoordinates(position.x, position.y)
    this.setBearing(position.direction)
  }

  turnRight() {
    let direct = ["north", "east", "south", "west"]
    let current = this.bearing
    if (direct.indexOf(this.bearing) === 3) {
      this.bearing = "north"
    } else {
      this.bearing = direct[direct.indexOf(current) + 1]
    }
  }

  turnLeft() {
    let direct = ["north", "west", "south", "east"]
    let current = this.bearing
    if (direct.indexOf(this.bearing) === 3) {
      this.bearing = "north"
    } else {
      this.bearing = direct[direct.indexOf(current) + 1]
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1]++;
        break
      case "east":
        this.coordinates[0]++;
        break
      case "south":
        this.coordinates[1]--;
        break
      case "west":
        this.coordinates[0]--;
        break
    }
  }

  translateInstructions(instructions) {
    let ins = instructions.split("")
    ins.forEach(ins => {
      switch(ins) {
        case "L":
          this.turnLeft()
          break
        case "R":
          this.turnRight()
          break
        case "A":
          this.advance()
          break
      }
    })
  }



}
