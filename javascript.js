/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var image_tracker = 'img1';
 
 function change(){
 var image = document.getElementById('headerphoto');
 if(image_tracker=='img1'){
 image.src='Images/20po.jpg';
 image_tracker='img2';
 }
     
 else{
 image.src='Images/Header_photo.jpg';
 image_tracker='img1';
 }
 }
 
 var timer = setInterval('change();',5000); 

//BRON: https://www.youtube.com/watch?v=aNDHAEKvEl8

// HARTJES CODE

// var aquarium = document.getElementById('aquariumLeeg'); 

var emptysvg = document.getElementById('Laag_2');
svg.src = 'Images/heart.svg';

var currentamount = '0';

document.querySelector("header div a span").innerHTML ='0';

function newamount1() {
    if (currentamount == '0') {
        document.querySelector("header div a span").innerHTML = '1';
        svg.src = 'Images/heartfilled.svg';
    
        document.querySelector("header div a span").innerHTML = '1';
        
        currentamount = '1';
        
    } else if (currentamount == '1') {
        document.querySelector("header div a span").innerHTML = '0';
        svg.src = 'Images/heart.svg';
    
        document.querySelector("header div a span").innerHTML = '0';
        
        currentamount = '0';
    }
}

document.getElementById("svg").addEventListener("click", newamount1);

function newamount2() {
    if (currentamount == '1') {
        document.querySelector("header div a span").innerHTML = '2';
        svg.src = 'Images/heartfilled.svg';
        
        currentamount = '2';
        
    } else if (currentamount == '2') {
        document.querySelector("header div a span").innerHTML = '1';
        svg.src = 'Images/heart.svg';
        
        currentamount = '1';
    }
}

document.getElementById("svg").addEventListener("click", newamount2);

 