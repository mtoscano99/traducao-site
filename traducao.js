console.log("✅ Iniciando script de tradução...");

const traducoes = {
    "Morning (before 12PM)": "Manhã (antes das 12h)",
    "Afternoon (12 - 5PM)": "Tarde (12h - 17h)",
    "Evening (after 5PM)": "Noite (após as 17h)",
    "Group types": "Tipos de grupo",
    "City": "Cidade",
    "Time of day": "Horário do dia",
    "Frequency": "Frequência",
    "Day of week": "Dia da semana",
    "Reset all": "Redefinir tudo",
    "Apply": "Aplicar"
};

// Função para traduzir elementos no DOM
function traduzirElementos() {
   document.querySelectorAll("div, span, label, button, a, input, [aria-label]").forEach(el => {
    let texto = el.innerText.trim() || el.getAttribute("aria-label");
    if (traducoes[texto]) {
        console.log(`✅ Traduzindo: ${texto} -> ${traducoes[texto]}`);
        el.innerText = traducoes[texto];
        el.setAttribute("aria-label", traducoes[texto]);
    }
});

}

// Executa a tradução quando a página carrega
window.onload = function () {
    console.log("✅ Página carregada, aplicando tradução...");
    traduzirElementos();

    // Monitorar mudanças no DOM para elementos carregados dinamicamente
    let observer = new MutationObserver(() => {
        console.log("🔄 Detecção de novo conteúdo, aplicando tradução...");
        traduzirElementos();
    });

    observer.observe(document.body, { childList: true, subtree: true });

let maxTentativas = 30; // Em vez de 15, tenta por mais tempo
let intervalo = setInterval(() => {
    tentativas++;
    console.log(`🔄 Tentativa de tradução ${tentativas}`);
    traduzirElementos();
    if (tentativas >= maxTentativas) {
        clearInterval(intervalo);
        console.log("✅ Tradução finalizada!");
    }
}, 2000); // A cada 2 segundos, para cobrir carregamento dinâmico

};

