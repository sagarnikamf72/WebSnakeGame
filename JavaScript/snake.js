class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.body = document.getElementById("snakeBody");
        this.head = document.getElementById("snakeHeadRight");
        this.tail = document.getElementById("snakeTailRight");
        this.occupied = [[0, 0]];
        this.direction = "Right";
        this.draw();
    }
    draw() {
        // Draw Head
        map.ctx.drawImage(this.head, this.occupied[0][0]*map.scale, this.occupied[0][1]*map.scale, map.scale, map.scale);

        // Draw Body
        for(let cell = 1; cell < this.occupied.length - 1; cell += 1) {
            this.body = document.getElementById("snakeBody" + this.findCellDirection(cell));
            map.ctx.drawImage(this.body, this.occupied[cell][0]*map.scale, this.occupied[cell][1]*map.scale, map.scale, map.scale);
        }
        
        // Draw Tail
        let t = this.occupied.length - 1;
        if(t > 0) {
            this.tail =  document.getElementById("snakeTail" + this.findCellDirection(t));
            map.ctx.drawImage(this.tail, this.occupied[t][0]*map.scale, this.occupied[t][1]*map.scale, map.scale, map.scale);
        }
    }
    changePosition() {
        for(let i = this.occupied.length - 1; i > 0; i -= 1) {
            this.occupied[i][0] = this.occupied[i-1][0];
            this.occupied[i][1] = this.occupied[i-1][1];
        }

        if(this.direction == "Up") {
            this.y -= 1;
            this.occupied[0][1] -= 1;
        }
        else if(this.direction == "Down") {
            this.y += 1;
            this.occupied[0][1] += 1;
        }
        else if(this.direction == "Right") {
            this.x += 1;
            this.occupied[0][0] += 1;
        }
        else if(this.direction == "Left") {
            this.x -= 1;
            this.occupied[0][0] -= 1;
        }
    }

    changeDirection(newDirection) {
        if(newDirection == "Up" && this.direction != "Down") {
            this.direction = "Up";
        }
        else if(newDirection == "Down" && this.direction != "Up") {
            this.direction = "Down";
        }
        else if(newDirection == "Right" && this.direction != "Left") {
            this.direction = "Right";
        }
        else if(newDirection == "Left" && this.direction != "Right") {
            this.direction = "Left";
        }
        this.head = document.getElementById("snakeHead" + this.direction);
    }

    findCellDirection(t) {
        let dir;
        if(this.occupied[t][0] + 1 === this.occupied[t-1][0]) {
            dir = "Right";
        }
        else if(this.occupied[t][0] - 1 === this.occupied[t-1][0]) {
            dir = "Left";
        }
        else if(this.occupied[t][1] + 1 === this.occupied[t-1][1]) {
            dir = "Down";
        }
        else if(this.occupied[t][1] - 1 == this.occupied[t-1][1]) {
            dir = "Up"
        }
        return dir;
    }

    isOut() {
        // Check whether snake is inside map
        // Left and Upper bound check
        if(this.occupied[0][0] < 0 || this.occupied[0][1] < 0) {
            return true;
        }
        // Right and Bottom bound check
        if((this.occupied[0][0]+1)*map.scale > map.canvas.width || (this.occupied[0][1]+1)*map.scale > map.canvas.height) {
            return true;
        }

        // Check whether snake bit itself
        for(let i = 1; i < this.occupied.length; i += 1) {
            if(this.occupied[i][0] == this.occupied[0][0] && this.occupied[i][1] == this.occupied[0][1]) {
                return true;
            }
        }

        return false;
    }

    eatFruit() {
        if(this.occupied[0][0] == fruit.x && this.occupied[0][1] == fruit.y) {
            this.occupied.push([0, 0]);
            return true;
        }
        return false;
    }
}


