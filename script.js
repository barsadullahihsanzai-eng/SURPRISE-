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
