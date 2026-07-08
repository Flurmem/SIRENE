document.addEventListener('DOMContentLoaded', function () {
    // Coordenadas do Central Park
    var latitude = 40.785091;
    var longitude = -73.968285;

    // Inicializa o mapa focado na coordenada com zoom 15
    var mapa = L.map('meuMapa').setView([latitude, longitude], 15);

    // Carrega o visual do mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mapa);

    // Adiciona o pino vermelho de emergência no local exato
    var marker = L.marker([latitude, longitude]).addTo(mapa)
        .bindPopup('<b>Emergência Grave</b><br>Rua do Boi, 99')
        .openPopup();

    // Resolve bug visual caso o mapa carregue enquanto o modal estiver fechado
    const checkboxModal = document.getElementById('modal1');
    if (checkboxModal) {
        checkboxModal.addEventListener('change', function() {
            if(this.checked) {
                setTimeout(function(){ mapa.invalidateSize(); }, 300); // 300ms dá tempo da animação do CSS terminar
            }
        });
    }
});