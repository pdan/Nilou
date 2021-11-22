


class PipesPuzzle {
    private ws: WebSocket = new WebSocket('wss://hometask.eg1236.com/game-pipes/');

    constructor() {

    }

    newGame(level: number) {
        this.ws.send(`new ${level}`)
    }

    getMap() {

    }

    rotate(x: number, y: number) {

    }

    verify() {

    }
}

export { PipesPuzzle }