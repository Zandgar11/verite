function getMoreInfo() {
    const info = document.getElementById('extra-info');
    info.style.display = 'block';
    alert("La vérité est presque là !!! Préparez-vous !!!");
}

let timer = 300; // 5 minutes en secondes
const timerElement = document.getElementById('timer');

function countdown() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerElement.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timer > 0) {
        timer--;
    } else {
        alert("Vous avez manqué la vérité... Trop tard !!!");
        clearInterval(interval);
    }
}

const interval = setInterval(countdown, 1000);
