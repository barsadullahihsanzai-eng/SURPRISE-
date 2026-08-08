// Open Birthday Surprise

function openSurprise(){

    document.querySelector(".welcome").style.display="none";

    document.getElementById("birthday").classList.remove("hidden");

}



// Light Candles

function lightCandles(){

    let message = document.getElementById("cakeMessage");

    message.innerHTML =
    "✨ The 14 candles are glowing for Queen Ñajmusama 🕯️👑";

}



// Wish Button

function makeWish(){

    let message = document.getElementById("cakeMessage");

    message.innerHTML =
    "🌙 Close your eyes... make a beautiful wish ✨ Your wish is sent to the stars ⭐";

}



// Blow Candles

function blowCandles(){

    let cake = document.querySelector(".cake");

    cake.innerHTML="🎂💨";

    document.getElementById("cakeMessage").innerHTML =
    "🎉 Candles are blown! A magical moment begins ✨";

}



// Cut Cake

function cutCake(){

    let cake = document.querySelector(".cake");

    cake.innerHTML="🍰🍰";

    document.getElementById("cakeMessage").innerHTML =
    "🎂 The birthday cake is ready to share! 🎉";

}

// 🎁 Extra Surprise Effects

function openGift(){

    alert("🎁 A special surprise is waiting for Queen Ñajmusama ✨");

}



// 🎉 Confetti Effect

function createConfetti(){

    for(let i = 0; i < 40; i++){

        let confetti = document.createElement("div");

        confetti.innerHTML = "✨";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random()*100 + "%";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "25px";

        document.body.appendChild(confetti);


        let fall = setInterval(()=>{

            confetti.style.top =
            parseInt(confetti.style.top) + 5 + "px";


            if(parseInt(confetti.style.top)>1000){

                confetti.remove();
                clearInterval(fall);

            }

        },30);

    }

}


// Run magical effects when page loads

window.onload = function(){

    createConfetti();

};

// 🎁 Royal Gift Opening

function openGift(){

    let gift = document.querySelector(".gift-box");

    gift.innerHTML = "✨🎁✨";

    createConfetti();

    alert(
    "👑 Happy 14th Birthday Queen Ñajmusama ✨\n\nA special wish is waiting for you 💫"
    );

}



// ✨ Extra Sparkle Rain

function sparkleRain(){

    for(let i = 0; i < 30; i++){

        let sparkle = document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position="fixed";
        sparkle.style.left=Math.random()*100+"%";
        sparkle.style.top="-10px";
        sparkle.style.fontSize="25px";

        document.body.appendChild(sparkle);


        let fall=setInterval(()=>{

            sparkle.style.top=
            parseInt(sparkle.style.top)+
            5+"px";


            if(parseInt(sparkle.style.top)>window.innerHeight){

                sparkle.remove();
                clearInterval(fall);

            }

        },40);

    }

}


// Start magical effects

setInterval(sparkleRain,5000);

// 🎵 Birthday Music Function

function playMusic(){

    alert(
    "🎵 Add your birthday music file as music.mp3 to your project, then the music button will play it ✨"
    );

}

// 🎉 Royal Birthday Celebration

function birthdayCelebration(){

    createConfetti();

    sparkleRain();

    document.getElementById("cakeMessage").innerHTML =
    "🎉 Happy 14th Birthday Queen Ñajmusama 👑✨";




// A
// 🎉 Safe Birthday Celebration

document.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(()=>{

        if(typeof birthdayCelebration === "function"){

            birthdayCelebration();

        }

    },1000);

});

