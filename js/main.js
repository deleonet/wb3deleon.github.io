
document.addEventListener('DOMContentLoaded', () => {
    // Reloj en tiempo real
    const updateClock = () => {
        const now = new Date();
        document.getElementById('clock').innerText = now.toLocaleTimeString('en-GB');
    };
    if(document.getElementById('clock')) setInterval(updateClock, 1000);

    // Simulación de carga técnica en consola
    console.log("%c[!] ACCESO AUTORIZADO: EDGAR_DE_LEON_OS", "color: #ccff00; font-weight: bold; font-size: 14px;");
    
    const logs = [
        "Verificando protocolos Zero Trust...",
        "Escaneando vulnerabilidades 2026...",
        "Infraestructura crítica optimizada."
    ];
    
    logs.forEach((msg, i) => {
        setTimeout(() => console.log(`%c> ${msg}`, "color: #00f2ff"), i * 1000);
    });
});
