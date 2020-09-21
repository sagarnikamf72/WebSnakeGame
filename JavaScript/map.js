class Map{
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.style.display = "block";
        this.canvas.width = Math.min(600, window.innerWidth-20);
        this.canvas.height = Math.min(600, window.innerWidth-20);
        this.scale = Math.max(Math.ceil(Math.min(this.canvas.width, this.canvas.height)/20), 10);
        // this.canvas.width = window.innerWidth - 40;
        // this.canvas.height = window.innerHeight - 40;
        this.draw();
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const rows = this.canvas.height/this.scale;
        const columns = this.canvas.width/this.scale;
        
        // this.canvas.style.backgroundColor = "#A457BF";


        for(let row = 0; row < rows; row += 1) {
            for(let col = 0; col < columns; col += 1) {
                if((row + col)%2 == 0) {
                    this.ctx.fillStyle = "#6BFF10";
                }
                else {
                    // this.ctx.fillStyle = "#2F9E00";
                    this.ctx.fillStyle = "#46EB00";
                }
                this.ctx.fillRect(row*this.scale, col*this.scale, this.scale, this.scale)
            }
        }

        // Horizontal lines
        // for(let row = 1; row < rows; row += 1){
        //     this.ctx.moveTo(0, this.scale*row);
        //     this.ctx.lineTo(this.canvas.width, this.scale*row);
        //     this.ctx.strokeStyle = "#C5D0D9";
        //     this.ctx.stroke();
        // }
        
        // Vertical lines
        // for(let col = 1; col < columns; col += 1){
        //     this.ctx.moveTo(this.scale*col, 0);
        //     this.ctx.lineTo(this.scale*col, this.canvas.height);
        //     this.ctx.strokeStyle = "#C5D0D9";
        //     this.ctx.stroke();
        // }
    }

    isInside(x, y) {
        if((x*this.scale + scale > this.canvas.width) || (y*this.scale + scale > height)) {
            return false;
        }
        return true;
    }

}