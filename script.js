function generate() {
    let text = document.getElementById("textInput").value;
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let count = parseInt(document.getElementById("count").value);

    if (text === "" || isNaN(min) || isNaN(max) || isNaN(count)) {
        alert("Будь ласка, введіть текст");
        return;
    }
    if (min > max) {
        alert("Мінімальне значення не можк перевищувати максимальне");
        return;
    }
    if (min === max) {
        alert("Мінімальне та максимальне значення повинно бути різним");
        return;
    }


    let seed = 0;
    for (let i = 0; i < text.length; i++) {
        seed += text.charCodeAt(i) * (i + 1); 
    }
 
    seed += Date.now();
    let result = "";

    for (let i = 0; i < count; i++) {

        seed = Math.abs(Math.sin(seed) * 1000000) | 0; 
        let number = min + (seed % (max - min + 1));
        result += number + " ";
    }

    document.getElementById("result").innerText = result;
}
function clearInputs() { document.getElementById("textInput").value = "";
    document.getElementById("min").value = "";
    document.getElementById("max").value = ""; 
    document.getElementById("count").value = ""; 
    document.getElementById("result").innerText = ""; }

const music = document.getElementById('bgMusic');

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}
function openInfo(){
document.getElementById("infoBox").style.display="block";
}

function closeInfo(){
document.getElementById("infoBox").style.display="none";
}