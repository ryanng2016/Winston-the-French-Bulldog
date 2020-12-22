alert("CONGRATS! YOU ARE THE 1000th VISITOR TO THIS SITE! CLICK 'OK' TO CLAIM YOUR PRIZE!")
var pics = [
    "photos/w1.jpg",    //0
    "photos/w2.jpg",    //1
    "photos/w3.jpg",    //2
    "photos/w4.jpg"     //3
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1; 

btn.addEventListener("click", function(){
    if(counter === 4){
        counter = 0;
    }
    img.src = pics [counter];
    counter = counter + 1;
});

