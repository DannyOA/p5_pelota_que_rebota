class Pelota{
    constructor(){
   

        this.diam = random(20, 80);
        this.rad = this.diam / 2;

        this.posx = random (this.rad,width - this.rad);
        this.posy = random (this.rad,height - this.rad);

        this.velx = random(-5, 5);
        this.vely = random(-5 ,5);

        this.nuevoColor = color(random(150,250), random(0,55), random(10,50));
    }

    actualizar(){
        if (this.posx > width - this.rad || this.posx < this.rad){
        this.velx *= -1;
        }

        if (this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;

        }

    visualizar(){
        fill(this.nuevoColor);
        stroke("#ffffff11");
        strokeWeight(2);
        circle( this.posx, this.posy, this.diam);
    }
}