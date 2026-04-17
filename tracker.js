// URL gerada no Passo 1 (Deploy do Google Apps Script)
const API_URL = "SUA_URL_DO_WEB_APP_AQUI"; 

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
