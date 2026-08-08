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
