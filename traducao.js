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
    document.querySelectorAll("div, span, label, button, a").forEach(el => {
        let texto = el.innerText.trim();
        if (traducoes[texto]) {
            console.log(`✅ Traduzindo: ${texto} -> ${traducoes[texto]}`);
            el.innerText = traducoes[texto];
        }
    });
}

// Atrasar a execução para garantir que os elementos existam no DOM
setTimeout(() => {
    console.log("⏳ Aplicando tradução com delay...");
    traduzirElementos();
}, 3000);

// Monitorar mudanças no DOM para elementos carregados dinamicamente
let observer = new MutationObserver(() => {
    console.log("🔄 Detecção de novo conteúdo, aplicando tradução...");
    traduzirElementos();
});

observer.observe(document.body, { childList: true, subtree: true });

// Repetir a tradução algumas vezes para capturar mudanças dinâmicas
let tentativas = 0;
let maxTentativas = 20;
let intervalo = setInterval(() => {
    tentativas++;
    console.log(`🔄 Tentativa de tradução ${tentativas}`);
    traduzirElementos();
    if (tentativas >= maxTentativas) {
        clearInterval(intervalo);
        console.log("✅ Tradução finalizada!");
    }
}, 3000);
