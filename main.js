function preload() {
    length = window.innerHeight - 100;
    width = window.innerWidth - 100;
    a = length/2;
    b = width/2;
    c = length/10;
    d = width/10;
    e = Math.floor(Math.random() * 256);
    f = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    h = Math.floor(Math.random() * 256);
    i = Math.floor(Math.random() * 256);
    j = Math.floor(Math.random() * 256);
    k = Math.floor(Math.random() * 256);
    l = Math.floor(Math.random() * 256);
    m = Math.floor(Math.random() * 256);
}

function setup() {
    length = window.innerHeight - 100;
    width = window.innerWidth - 100;
    console.log(length, width);
    canvas = createCanvas(width,length);
    canvas.position(50,50);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    
    length = window.innerHeight - 50;
    width = window.innerWidth - 50;
    image(video,0,0,width,length);
    fill(e,f,g);
    stroke(h,i,j);
    console.log(e,f,g,h,i,j,k,l,m,);
    circle(0,a,c);
    circle(b,0,d);
    circle(width - 50,a,c);
    circle(b,length,d);
}