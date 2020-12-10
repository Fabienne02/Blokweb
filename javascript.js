/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var image_tracker = 'img1';
 
 function change(){
 var image = document.querySelector('main section:nth-of-type(1) img:nth-of-type(1)');
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
 