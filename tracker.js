// URL gerada no Passo 1 (Deploy do Google Apps Script)
const API_URL = "https://script.google.com/macros/s/AKfycbwH-TJDgPb8ragqIvg21ypBlbJAMOppQrwJXkFQ6EFqQu7Gwkr83C-34Uhomk4uGveh/exec"; 

document.querySelectorAll('.track-click').forEach(button => {
    button.addEventListener('click', function() {
        const data = {
            event: "click_button",
            buttonName: this.getAttribute('data-btn'),
            url: window.location.href,
            timestamp: new Date().toISOString()
        };

        // Envia de forma assíncrona para não travar a navegação do usuário
        fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors', // Evita erros de CORS do Google
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    });
});
