var canvas = document.getElementById("mycanvas");
console.log(canvas);
var ctx = canvas.getContext("2d");

const img= new Image();
img.src='images/mice1.png'


img.onload = function(){
	station();
    
    ctx.drawImage(img, 258, 10);
}

let s="sssssssssssaaaaaaaaaaaaaaaaaaasssssssssssssssssssssssssssssssssssssssddddddddddwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdddddddddddddddddddddddddddddssssssssssssssssssssssssssssssaaaaaaaaaassssssssssssssssssssddddddddddsssssssssddddddddddddddddddddwwwwwwwwwdddddddddsssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassss";
let z=s;

let x=273;
let y=26;
let condition=0;
let j=0;

setTimeout(() => {premik()}, 500);


function premik() {
    movement(condition);
    condition++;
    if (condition<s.length) 
    setTimeout(() => {premik()}, 20);
    else{
        x=260
        y=10
        premikImg(j)
    }
}

function premikImg() {
    station(j);
    j++;
    setTimeout(() => {premikImg()}, 25);
}


function reset(){
    location.reload();

}

function movement(i){
    console.log("premikanje");
    switch (s[i]) {
        case "a":
            moveLeft();
            break;

        case "d":
            moveRight();
            break;
        
        case "w":
            moveForward();
            break;

        case "s":
            moveDown();
            break;
    }
}

    function station(j){
        switch (z[j]) {
        case "a":
            moveLeftImage();
            break;

        case "d":
            moveRightImage();
            break;
        
        case "w":
            moveUpImage();
            break;

        case "s":
            moveDownImage();
            break;
    }

    }

    function moveLeftImage(){
        x-=5;
        ctx.clearRect(x, y, 40, 30)
        ctx.drawImage(img, x, y)
        img.style = "transform: rotate(90deg)"
    }

    function moveRightImage(){
        x+=5;
        ctx.clearRect(x-5, y, 40, 30)
        ctx.drawImage(img, x, y)
    }

    function moveDownImage(){
        y+=5;
        ctx.clearRect(x, y-10, 40, 30)
        ctx.drawImage(img, x, y)
    }

    function moveUpImage(){
        y-=5;
        ctx.clearRect(x, y, 40, 30)
        ctx.drawImage(img, x, y)
    }



    function moveLeft(){
        x-=5;
        ctx.beginPath();
        ctx.fillStyle='yellow';
        ctx.rect(x, y, 2, 2);
        ctx.fill();
    }


    
    function moveRight(){
        x+=5;
        ctx.beginPath();
        ctx.fillStyle='yellow';
        ctx.rect(x, y, 2, 2);
        ctx.fill();
        
    }

    function moveForward(){
        y-=5;
        ctx.beginPath();
        ctx.fillStyle='yellow';
        ctx.rect(x, y, 2, 2);
        ctx.fill();
    }

    function moveDown(){
        y+=5;
        ctx.beginPath();
        ctx.fillStyle='yellow';
        ctx.rect(x, y, 2, 2);
        ctx.fill();
    }