function randomInt(start, end){
    return start + Math.floor((end - start)*Math.random());
}

class Fruit {
    constructor(rows, columns) {
        this.x = randomInt(0, rows);
        this.y = randomInt(0, columns);
        this.fruit = document.getElementById("fruit");
        this.displayFruit();
    }

    displayFruit() {
        map.ctx.drawImage(this.fruit, this.x*map.scale, this.y*map.scale, map.scale, map.scale);
        // map.ctx.beginPath();
        // map.ctx.arc(this.x*map.scale + map.scale/2, this.y*map.scale + map.scale/2, map.scale/2, 0, 2*Math.PI)
        // map.ctx.fillStyle = "#FFCD19"
        // map.ctx.fill();
    }
}

// To do
// 1. randomInt() correction for end values