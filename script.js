document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnAcao');
    const displayMsg = document.getElementById('msg');

    const compromissos = [
        "Inovação em Biotecnologia 🌱",
        "Preservação de Matas Ciliares 💧",
        "Energia Solar no Campo ☀️",
        "Redução de Emissões de Carbono 📉"
    ];

    botao.addEventListener('click', () => {
        const itemAleatorio = compromissos[Math.floor(Math.random() * compromissos.length)];
        displayMsg.innerText = itemAleatorio;
        
        // Pequena animação de feedback
        displayMsg.style.opacity = 0;
        setTimeout(() => {
            displayMsg.style.opacity = 1;
        }, 100);
    });
});
