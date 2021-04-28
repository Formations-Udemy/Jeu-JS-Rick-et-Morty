const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;

let timeUp = false; //false si le jeu pas fini, true si jeu terminé
let score = 0;

function randomTime(min, max){
    return Math.round(Math.random()*(max-min) + min);
}

/* FONCTION POUR FAIRE APPARAITRE LA TÊTE ALEATOIREMENT */

function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random()*clouds.length);
    const cloudSelect = clouds[indexCloud];

    if (cloudSelect === lastCloud) {
        return randomCloud(clouds);
    }
    lastCloud = cloudSelect;

    return cloudSelect;
}

/* APPARITION DES TÊTES SELON LA DIFFICULUTE */

//niveau facile
function showHead1(){
    const time = randomTime(600, 1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {   //fonction fléchée, revient à écrire function(){};
        if (!timeUp) {
            showHead1();
        }
        cloud.classList.remove("up");
    }, time);
}

// niveau moyen
function showHead2(){
    const time = randomTime(500, 800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {   //fonction fléchée, revient à écrire function(){};
        if (!timeUp) {
            showHead2();
        }
        cloud.classList.remove("up");
    }, time);
}

//niveau difficile
function showHead3(){
    const time = randomTime(300, 500);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {   //fonction fléchée, revient à écrire function(){};
        if (!timeUp) {
            showHead3();
        }
        cloud.classList.remove("up");
    }, time);
}


/* FONCTION QUI VA CHANGER LE SCORE */
function playerScore(event){
    if (!event.isTrusted) {
        return;
    }else{
        score++;
        this.classList.remove("up");
        scoreBoard.textContent = score;
    }
}

heads.forEach(head => head.addEventListener("click", playerScore));

/* FONCTION POUR LANCER LE JEU */

// on a mis du js directement dans l'html pour puvoir lancer la fonction sur un onclick=""
//fonction startGame pour niveau FACILE de selectionné
function startGame1(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead1();
    setTimeout(() => { //temps du jeu compet, ici 10 sec = 10000 milli sec
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end"
        }, 2000); // on laisse un temps de 2 sec pour voir le score avant d'afficher "end"
    }, 10000);
}

//fonction startGame pour niveau MOYEN de selectionné
function startGame2(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead2();
    setTimeout(() => { //temps du jeu compet, ici 10 sec = 10000 milli sec
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end"
        }, 2000); // on laisse un temps de 2 sec pour voir le score avant d'afficher "end"
    }, 10000);
}
//fonction startGame pour niveau DIFFICILE de selectionné
function startGame3(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead3();
    setTimeout(() => { //temps du jeu compet, ici 10 sec = 10000 milli sec
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end"
        }, 2000); // on laisse un temps de 2 sec pour voir le score avant d'afficher "end"
    }, 10000);
}

/* CREATION DE DIFFERENTS NIVEAUX DE DIFFICULTES*/

const speed = 50;
var i = 0;
var text1 = "Facile";

var j = 0;
var text2 = "Moyen";

var k = 0;
var text3 = "Difficile";

function typeWrtiter1(){
    if (i < text1.length) {
        document.getElementById("demo1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWrtiter1, speed);
    }
}

function typeWrtiter2(){
    if (j < text2.length) {
        document.getElementById("demo2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWrtiter2, speed);
    }
}

function typeWrtiter3(){
    if (k < text3.length) {
        document.getElementById("demo3").innerHTML += text3.charAt(k);
        k++;
        setTimeout(typeWrtiter3, speed);
    }
}

// Fonction pour cacher les niveaux une fois le choix selectionné
function myClick(){
    for (var i = 1; i <= 3; i++) {
        document.getElementById("demo" + i).addEventListener("click", function(){
            document.getElementById("demo1").style = "none";
            document.getElementById("demo2").style = "none";
            document.getElementById("demo3").style = "none";
        });
    }
}

// AFFICHAGE DES NIVEAUX EN ECRITURE GENRE MACHINE A ECRIRE QUAND ON CLIQUE SUR MORTY
document.getElementById("morty-play").addEventListener("click", function(){
    typeWrtiter1();
    typeWrtiter2();
    typeWrtiter3();
    myClick();
});