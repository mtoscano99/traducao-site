document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Página carregada, iniciando tradução...");

    let traducoes = {
        "Morning (before 12PM)": "Manhã (antes das 12h)",
        "Afternoon (12 – 5PM)": "Tarde (12h – 17h)",
        "Evening (after 5PM)": "Noite (após as 17h)",
        "Group types": "Tipos de grupo",
        "City": "Cidade",
        "Time of day": "Horário do dia",
        "Frequency": "Frequência",
        "Day of week": "Dia da semana",
        "Reset all": "Redefinir tudo",
        "Apply": "Aplicar"
    };

    function traduzirElementos() {
        document.querySelectorAll("div, span, label, button").forEach(el => {
            let texto = el.innerText.trim();
            if (traducoes[texto]) {
                console.log(`✅ Traduzindo: ${texto} -> ${traducoes[texto]}`);
                el.innerText = traducoes[texto];
            }
        });
    }

    // Primeira tradução após 3 segundos
    setTimeout(() => {
        traduzirElementos();
    }, 3000);

    // Observer para capturar elementos carregados dinamicamente
    let observer = new MutationObserver(() => {
        console.log("🔄 Detectando novos elementos no DOM...");
        traduzirElementos();
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
