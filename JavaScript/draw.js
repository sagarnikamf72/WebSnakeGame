var map, snake, fruit, player, rows, columns, rotateFactor = 1;
var colors4 = ["#492378", "#5E2C99", "#7638C2", "#8C43E6", "#9C4AFF"];
var colors3 = ["#F982BC", "#DB72DA", "#D68AF2", "#A372DB", "#9882F9"];
var colors2 = ["#0DF049", "#38F063", "#58DB6F", "#73E07A", "#9CEB92"]
var colors = ["#d23be7", "#4355db", "#34bbe6", "#49da9a", "#a3e048", "#f7d038", "#eb7532", "#e6261f"];


function validateAndStartGame() {
    let name = document.getElementById("Name").value;
    name = name.trim();
    if(name == "") {
        alert("You Must Enter Your Name");
        return false;
    }
    setup(name);
}

function setup(PlayerName){
    document.getElementById("box").style.display = "none";
    document.getElementById("result").style.display = "none";
    map = new Map();
    snake = new Snake();
    player = new Player(PlayerName);
    rows = map.canvas.height/map.scale;
    columns = map.canvas.width/map.scale;
    fruit = new Fruit(rows, columns);
    draw();
}

function draw() {
    // Response to key presses
    let changeDirection = true;
    window.addEventListener("keydown", (event) => {
        if(changeDirection === true) {
            changeDirection = false;
            let newDirection = event.key.replace("Arrow", "");
            snake.changeDirection(newDirection);
        }
    });

    // Drawing game's current frame
    map.draw();
    snake.changePosition();
    snake.draw();
    if(snake.eatFruit()) {
        player.score += 1;
        fruit = new Fruit(rows, columns);
    }
    if(snake.isOut()) {
        player.gameOver = true;
    }
    if(player.gameOver) {
        GameOver();
        return ;
    }
    fruit.displayFruit();
    setTimeout(draw, 150);
    return ;  
}

function GameOver()  {
    map.ctx.clearRect(0, 0, map.width, map.height);
    document.getElementById("myCanvas").style.display = "none";
    let result = "Hi " + player.name + ", you scored " + player.score + " points";
    document.getElementById("box").style.display = "block";
    document.getElementById("Name").innerHTML = player.name;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = result;
}