/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var image_tracker = 'img1';

function change() {
    var image = document.getElementById('headerphoto');
    if (image_tracker == 'img1') {
        image.src = 'Images/20po.jpg';
        image_tracker = 'img2';
    } else {
        image.src = 'Images/Header_photo.jpg';
        image_tracker = 'img1';
    }
}

var timer = setInterval('change();', 5000);

//BRON: https://www.youtube.com/watch?v=aNDHAEKvEl8


const button1 = document.querySelectorAll("#uldetail2 li:nth-of-type(1) #svg, #uldetail2 li:nth-of-type(1) #Laag_2")
var inDruk1 = document.querySelector("#uldetail2 li:nth-of-type(1) #Laag_2")
var teller1 = document.querySelector("#spanheart"),
    count = 1;
var min = 1;
var statusHeartEen = false

button1.forEach((inDruk1) => {
    inDruk1.addEventListener("click", voegToe1)
});

function voegToe1() {
    if (statusHeartEen == true) {
        count -= 1;
        teller1.innerHTML -= min;

        document.querySelector("#uldetail2 li:nth-of-type(1) #Laag_2").style.fill = "none";
        document.querySelector("#uldetail2 li:nth-of-type(1) #Laag_2").style.stroke = "black";

        statusHeartEen = false;

    } else if (statusHeartEen == false) {
        count += 1;
        teller1.innerHTML = parseInt(teller1.innerHTML) + 1
        document.querySelector("#uldetail2 li:nth-of-type(1) #Laag_2").style.fill = "pink";
        document.querySelector("#uldetail2 li:nth-of-type(1) #Laag_2").style.stroke = "pink";

        statusHeartEen = true;
    }

}

const button = document.querySelectorAll("#uldetail2 li:nth-of-type(2) #svg, #uldetail2 li:nth-of-type(2) #Laag_2")
var inDruk = document.querySelector("#uldetail2 li:nth-of-type(2)#Laag_2")
var min = 1;
var statusHeartTwee = false


button.forEach((inDruk) => {
    inDruk.addEventListener("click", voegToe)
});

function voegToe() {
    if (statusHeartTwee == true) {
        count -= 1;
        teller1.innerHTML -= min;

        document.querySelector("#uldetail2 li:nth-of-type(2) #Laag_2").style.fill = "none";
        document.querySelector("#uldetail2 li:nth-of-type(2) #Laag_2").style.stroke = "black";

        statusHeartTwee = false;

    } else if (statusHeartTwee == false) {
        count += 1;
         teller1.innerHTML = parseInt(teller1.innerHTML) + 1
        document.querySelector("#uldetail2 li:nth-of-type(2) #Laag_2").style.fill = "pink";
        document.querySelector("#uldetail2 li:nth-of-type(2) #Laag_2").style.stroke = "pink";

        statusHeartTwee = true;
    }

}

const buttonq = document.querySelectorAll("#uldetail2 li:nth-of-type(3) #svg, #uldetail2 li:nth-of-type(3) #Laag_2")
var inDrukq = document.querySelector("#uldetail2 li:nth-of-type(3) #Laag_2")
var min = 1;
var statusHeartDrie = false


buttonq.forEach((inDrukq) => {
    inDrukq.addEventListener("click", voegToeq)
});

function voegToeq() {
    if (statusHeartDrie == true) {
        count -= 1;
        teller1.innerHTML -= min;

        document.querySelector("#uldetail2 li:nth-of-type(3) #Laag_2").style.fill = "none";
        document.querySelector("#uldetail2 li:nth-of-type(3) #Laag_2").style.stroke = "black";

        statusHeartDrie = false;

    } else if (statusHeartDrie == false) {
        count += 1;
         teller1.innerHTML = parseInt(teller1.innerHTML) + 1
        document.querySelector("#uldetail2 li:nth-of-type(3) #Laag_2").style.fill = "pink";
        document.querySelector("#uldetail2 li:nth-of-type(3) #Laag_2").style.stroke = "pink";

        statusHeartDrie = true;
    }

}

const buttonz = document.querySelectorAll("#uldetail2 li:nth-of-type(4) #svg, #uldetail2 li:nth-of-type(4) #Laag_2")
var inDrukz = document.querySelector("#uldetail2 li:nth-of-type(4) #Laag_2")
var min = 1;
var statusHeartVier = false


buttonz.forEach((inDrukz) => {
    inDrukz.addEventListener("click", voegToez)
});

function voegToez() {
    if (statusHeartVier == true) {
        count -= 1;
        teller1.innerHTML -= min;

        document.querySelector("#uldetail2 li:nth-of-type(4) #Laag_2").style.fill = "none";
        document.querySelector("#uldetail2 li:nth-of-type(4) #Laag_2").style.stroke = "black";

        statusHeartVier = false;

    } else if (statusHeartVier == false) {
        count += 1;
         teller1.innerHTML = parseInt(teller1.innerHTML) + 1
        document.querySelector("#uldetail2 li:nth-of-type(4) #Laag_2").style.fill = "pink";
        document.querySelector("#uldetail2 li:nth-of-type(4) #Laag_2").style.stroke = "pink";

        statusHeartVier = true;
    }

}

const buttonw = document.querySelectorAll("#uldetail2 li:nth-of-type(6) #svg, #uldetail2 li:nth-of-type(6) #Laag_2")
var inDrukw = document.querySelector("#lidetail2:nth-of-type(6) #Laag_2")
var min = 1;
var statusHeartVijf = false


buttonw.forEach((inDrukw) => {
    inDrukw.addEventListener("click", voegToew)
});

function voegToew() {
    if (statusHeartVijf == true) {
        count -= 1;
        teller1.innerHTML -= min;

        document.querySelector("#uldetail2 li:nth-of-type(6) #Laag_2").style.fill = "none";
        document.querySelector("#uldetail2 li:nth-of-type(6) #Laag_2").style.stroke = "black";

        statusHeartVijf = false;

    } else if (statusHeartVijf == false) {
        count += 1;
         teller1.innerHTML = parseInt(teller1.innerHTML) + 1
        document.querySelector("#uldetail2 li:nth-of-type(6) #Laag_2").style.fill = "pink";
        document.querySelector("#uldetail2 li:nth-of-type(6) #Laag_2").style.stroke = "pink";

        statusHeartVijf = true;
    }

}

