// ==============================
// FOR BUBUB DIRA ❤️
// Made by Dimas
// ==============================

// Ambil elemen
const opening = document.getElementById("opening");
const pages = document.querySelectorAll(".page");
const startBtn = document.getElementById("startBtn");
const nextButtons = document.querySelectorAll(".next");

const typing = document.getElementById("typing");

const bgMusic = document.getElementById("bgMusic");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");

const openLetter = document.getElementById("openLetter");

// ==============================
// Efek mengetik
// ==============================

const welcomeText = `Halo Bubub Dira...

Aku mungkin bukan orang yang paling sempurna.

Aku juga nggak selalu bisa bikin kamu ketawa.

Tapi aku selalu bersyukur karena dipertemukan sama kamu.

Website kecil ini aku buat supaya suatu saat nanti kalau kamu lagi kangen atau lagi sedih, kamu punya satu tempat kecil yang bisa ngingetin kalau ada seseorang yang sayang banget sama kamu.

Semoga kamu suka ya. ❤️`;

let i = 0;

function typeWriter(){

    if(i < welcomeText.length){

        typing.innerHTML += welcomeText.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

// ==============================
// Halaman
// ==============================

const order = [
"welcome",
"letter",
"reasons",
"secret",
"question",
"ending"
];

let current = 0;

startBtn.addEventListener("click",()=>{

    opening.classList.remove("active");
    opening.style.display="none";

    document.getElementById(order[0]).classList.remove("hidden");

    bgMusic.play().catch(()=>{});

    typeWriter();

});

nextButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

pages[current].classList.add("hidden");

current++;

if(current<pages.length){

pages[current].classList.remove("hidden");

}

});

});

// ==============================
// 100 Alasan Sayang
// ==============================

const reasons=[

"Karena senyummu selalu bikin hariku lebih indah.",
"Karena kamu selalu jadi tempat cerita terbaik.",
"Karena kamu sabar menghadapi aku.",
"Karena kamu cantik apa adanya.",
"Karena kamu selalu bikin aku semangat.",
"Karena tawamu menular.",
"Karena kamu perhatian.",
"Karena kamu bikin aku merasa pulang.",
"Karena kamu selalu ada.",
"Karena aku memang sayang sama kamu."

];

reasonBtn.addEventListener("click",()=>{

let random=Math.floor(Math.random()*reasons.length);

reasonText.innerHTML=reasons[random];

});

// ==============================
// Surat Rahasia
// ==============================

openLetter.addEventListener("click",()=>{

alert(`Hai Bubub ❤️

Kalau kamu sampai buka surat ini...

berarti kamu emang penasaran ya. 🤭

Aku cuma mau bilang...

Terima kasih sudah hadir di hidupku.

Aku harap nanti...

seberat apa pun hari yang kita lewati,

kita tetap saling memilih.

I Love You ❤️`);

});

// ==============================
// Tombol Tidak Kabur
// ==============================

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*300-150;

const y=Math.random()*200-100;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});

// HP
noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

const x=Math.random()*300-150;

const y=Math.random()*200-100;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});

// ==============================
// Tombol Mau
// ==============================

yesBtn.addEventListener("click",()=>{

alert("Yeayyy ❤️\n\nDimas seneng banget. Semoga kita selalu bareng ya Bubub. 🤍");

document.getElementById("question").classList.add("hidden");

document.getElementById("ending").classList.remove("hidden");

});

// ==============================
// Console Message
// ==============================

console.log("Website dibuat penuh cinta oleh Dimas ❤️");
// =====================
// HEART RAIN
// =====================

const heartContainer=document.getElementById("heart-container");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=Math.random()*20+15+"px";

heart.style.animationDuration=Math.random()*4+5+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);
const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=function(){

if(playing){

bgMusic.pause();

playing=false;

musicBtn.innerHTML="🎵";

}else{

bgMusic.play();

playing=true;

musicBtn.innerHTML="⏸";

}

}
// =======================
// CONFETTI
// =======================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

let confettis=[];

function Confetti(){

this.x=Math.random()*canvas.width;
this.y=-20;

this.size=Math.random()*8+5;

this.speed=Math.random()*3+2;

this.color=[
"#ff7eb6",
"#ffffff",
"#ffc2dd",
"#ff4f9d"
][Math.floor(Math.random()*4)];

}

function createConfetti(){

for(let i=0;i<150;i++){

confettis.push(new Confetti());

}

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confettis.forEach((c,index)=>{

ctx.fillStyle=c.color;

ctx.fillRect(c.x,c.y,c.size,c.size);

c.y+=c.speed;

c.x+=Math.sin(c.y*0.02);

if(c.y>canvas.height){

confettis.splice(index,1);

}

});

requestAnimationFrame(animateConfetti);

}

animateConfetti();
