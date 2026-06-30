// Aguarda o carregamento do DOM para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FUNCIONALIDADE 1: Controle do Modo Escuro ---
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    
    btnDarkMode.addEventListener("click", () => {
        // Altera a classe no body para disparar as variáveis CSS do modo escuro
        document.body.classList.toggle("dark-mode");
        
        // Atualiza textualmente o botão para dar feedback visual claro
        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "☀️ Modo Claro";
        } else {
            btnDarkMode.textContent = "條 Modo Escuro";
        }
    });

    // --- FUNCIONALIDADE 2: Validador do Quiz Anti-Desinformação ---
    const quizForm = document.getElementById("quiz-form");
    const feedbackDiv = document.getElementById("quiz-feedback");

    quizForm.addEventListener("submit", (event) => {
        // Evita que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Captura o input do tipo radio selecionado pelo usuário
        const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
        
        // Variável para armazenar o valor da resposta processada antes de exibir na tela
        let valorResposta = respostaSelecionada.value;

        // Limpa classes anteriores do feedback para evitar sobreposição de estilos
        feedbackDiv.className = "";

        // Processamento lógico da resposta e manipulação dinâmica do DOM
        if (valorResposta === "correta") {
            feedbackDiv.textContent = "🎉 Excelente! Você agiu como um cidadão digital consciente. Sempre cheque os fatos antes de espalhar qualquer informação.";
            feedbackDiv.classList.add("quiz-feedback", "success");
        } else {
            feedbackDiv.textContent = "⚠️ Atenção! Compartilhar sem checar espalha desinformação automatizada. Em caso de deepfakes visíveis ou áudios suspeitos, sempre investigue em fontes oficiais.";
            feedbackDiv.classList.add("quiz-feedback", "error");
        }

        // Torna a div de feedback visível removendo a classe 'hidden'
        feedbackDiv.classList.remove("hidden");
    });
});
