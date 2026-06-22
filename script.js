/* ==========================================
PAGE NAVIGATION
========================================== */

function goToPage(pageNumber){


document
.querySelectorAll(".page")
.forEach(page => {

    page.classList.remove("active");

});

document
.getElementById(
    "page" + pageNumber
)
.classList.add("active");


}

/* ==========================================
PASSWORD 1
========================================== */

function checkPassword1(){


const password =
document.getElementById(
    "password1"
).value.trim();

if(password === "Sona"){

    goToPage(2);

}else{

    document
    .getElementById("error1")
    .innerText =
    "Wrong Password 😅";

}


}

/* ==========================================
PASSWORD 2
========================================== */

function checkPassword2(){


const password =
document.getElementById(
    "password2"
).value.trim();

if(password === "Anu"){

    goToPage(7);

    startTypewriter();

}else{

    document
    .getElementById("error2")
    .innerText =
    "Wrong Password 😅";

}


}

/* ==========================================
CANDLE COUNTDOWN
========================================== */

const blowBtn =
document.getElementById(
"blowBtn"
);

if(blowBtn){


blowBtn.addEventListener(
    "click",
    startCountdown
);


}

function startCountdown(){


let count = 3;

const countdown =
document.getElementById(
    "countdown"
);

countdown.innerText = count;
countdown.style.transform = "scale(1.5)";

const timer =
setInterval(()=>{

    count--;

    if(count > 0){

    countdown.style.transform="scale(0.7)";

    setTimeout(()=>{

        countdown.style.transform="scale(1.5)";

    },100);

    countdown.innerText=count;

}else{

        clearInterval(timer);

        countdown.innerText =
        "✨";

        const flame =
        document.getElementById(
            "flame"
        );

        if(flame){

flame.style.opacity =
"0";

}

const smoke =
document.getElementById(
"smoke"
);

if(smoke){

smoke.classList.add(
"show"
);

}

       

        setTimeout(()=>{

            goToPage(3);

        },2500);

    }

},1000);


}

/* ==========================================
CAKE CUTTING
========================================== */

const cakeContainer =
document.getElementById(
"cakeContainer"
);

if(cakeContainer){


cakeContainer.addEventListener(
    "click",
    cutCake
);


}

function cutCake(){


const cake =
document.querySelector(
    ".cake"
);

cake.classList.add(
    "cut"
);

cake.style.boxShadow =
"0 0 60px gold";

document
.getElementById(
    "cakeMessage"
)
.innerText =
"🎉 Cake Successfully Cut 🎉";

setTimeout(()=>{

    goToPage(5);

},2500);


}
/* ==========================================
MEMORY TYPEWRITER
========================================== */

const memoryText = `1st message Korechilam 2025 er November er 15-18 tarikh kore...

Propose kori prothom 21 tarikh 😀

1,5 epoxypentane you 😀

Age toke koto ragatam,
toke niea joke kortam
jate tor sathe kotha hoi.

Ar sei bus er moment ta sera chilo.

Pase bosechilam duijon.

Jol porchilo.

Puro filmy. 😄

Tui to khub haschili.

Amar sei muhurtota
valovabei mone ache.

Ar tarpor sei akdin
cycle e kore bari aschilam.

Tokhon juto chire gelo amar.

Bolar prai age
tui setpin ber kore dia dili 😁

Akhono to onek kicui ache.

Sob likhte lage
amar website crash kore jabe 😂`;

let memoryIndex = 0;

function startTypewriter(){


const target =
document.getElementById(
    "typewriter"
);


target.innerHTML = "";

memoryIndex = 0;

const typing =
setInterval(()=>{

    if(
        memoryIndex <
        memoryText.length
    ){

        target.innerHTML +=
memoryText.charAt(
    memoryIndex
);

target.scrollTop =
target.scrollHeight;

memoryIndex++;

    }else{

        clearInterval(
            typing
        );

    }

},85);


}

/* ==========================================
MEMORY NEXT BUTTON
========================================== */

const memoryNext =
document.getElementById(
"memoryNext"
);

if(memoryNext){


memoryNext.addEventListener(
    "click",
    ()=>{

        goToPage(8);

    }
);


}

/* ==========================================
MUSIC PLAYER
========================================== */

const song =
document.getElementById(
"birthdaySong"
);

const playMusic =
document.getElementById(
"playMusic"
);

if(playMusic){


playMusic.addEventListener(
    "click",
    ()=>{

        song.play();

    }
);


}

const skipMusic =
document.getElementById(
"skipMusic"
);

if(skipMusic){


skipMusic.addEventListener(
    "click",
    ()=>{

        if(song){

            song.pause();

        }

        goToPage(9);

    }
);


}

/* ==========================================
PHOTO GALLERY
========================================== */

const photos = [


"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg"


];

let currentPhoto = 0;

const nextPhotoBtn =
document.getElementById(
"nextPhoto"
);

if(nextPhotoBtn){


nextPhotoBtn.addEventListener(
    "click",
    ()=>{

        currentPhoto++;

        if(
            currentPhoto >=
            photos.length
        ){

            currentPhoto = 0;

        }

        document
        .getElementById(
            "galleryImage"
        )
        .src =
        photos[currentPhoto];

    }
);


}

setInterval(()=>{

    const img =
    document.getElementById(
        "galleryImage"
    );

    if(!img) return;

    img.style.opacity = "0";

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

    setTimeout(()=>{

        img.src =
        photos[currentPhoto];

        img.style.opacity =
        "1";

        img.style.transform =
        "scale(1) rotate(0deg)";

        setTimeout(()=>{

            img.style.transform =
            "scale(1.08) rotate(1deg)";

        },50);

},200);

},3000);

/* ==========================================
FIREFLIES
========================================== */

const fireflies =
document.getElementById(
"fireflies"
);

for(let i=0;i<25;i++){


const firefly =
document.createElement(
    "div"
);

firefly.classList.add(
    "firefly"
);

firefly.style.left =
Math.random()*100 + "%";

firefly.style.animationDuration =
(8 + Math.random()*8)
+ "s";

firefly.style.animationDelay =
Math.random()*5 + "s";

fireflies.appendChild(
    firefly
);


}

/* ==========================================
ENTER KEY SUPPORT
========================================== */

document
.getElementById("password1")
.addEventListener(
"keypress",
function(e){


if(e.key==="Enter"){

    checkPassword1();

}


});

document
.getElementById("password2")
.addEventListener(
"keypress",
function(e){


if(e.key==="Enter"){

    checkPassword2();

}


});

/* ==========================================
PAGE LOAD
========================================== */

window.onload = ()=>{


goToPage(1);


};

/* ==========================================
WISH PAGE
========================================== */

function submitWish(){

const wish =
document
.getElementById(
"birthdayWish"
)
.value
.trim();

if(wish === ""){

document
.getElementById(
"wishError"
)
.innerText =
"Please write a wish first ✨";

return;

}

fetch(
"https://docs.google.com/forms/d/e/1FAIpQLSfRfIQIg5GGTc-mOE0RuEJouysbkn83fdGgGIshAxnLT-ZNFQ/formResponse",
{
method:"POST",
mode:"no-cors",
headers:{
"Content-Type":
"application/x-www-form-urlencoded"
},
body:
"entry.532897176="
+
encodeURIComponent(wish)
}
);

goToPage(4);

}


/* ==========================================
OPEN LETTER
========================================== */

function openLetter(){

document
.getElementById(
"letterCover"
)
.style.display =
"none";

const letter =
document.getElementById(
"finalMessage"
);

letter.style.display =
"block";

letter.classList.add(
"show"
);

}