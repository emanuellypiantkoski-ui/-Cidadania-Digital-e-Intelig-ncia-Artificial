// Aguarda o carregamento do DOM para evitar erros no console
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MODO ESCURO (ACESSIBILIDADE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Altera dinamicamente o texto do botão com base na classe
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            themeToggleBtn.textContent = '自由 Modo Escuro';
        }
    });

    // --- LÓGICA DO QUIZ ANTI-DESINFORMAÇÃO ---
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');

    quizForm.addEventListener('submit', (event) => {
        // Evita que a página recarregue ao enviar o formulário
        event.preventDefault(); 

        // Captura as respostas usando FormData
        const formData = new FormData(quizForm);
        const answer1 = formData.get('q1');
        const answer2 = formData.get('q2');

        // Variável de controle do processamento de informações
        let acertos = 0;

        if (answer1 === 'sim') acertos++;
        if (answer2 === 'certo') acertos++;

        // Exibição e manipulação dinâmica do DOM baseada nos resultados
        resultDiv.classList.remove('hidden');
        resultDiv.className = 'result-sucesso'; // Reseta classes de estilo
        
        if (acertos === 2) {
            resultDiv.innerHTML = `🎉 Excelente! Você acertou ${acertos} de 2 questões. Você está pronto para identificar desinformações por IA!`;
        } else {
            resultDiv.innerHTML = `⚠️ Você acertou ${acertos} de 2. Lembre-se: deepfakes de voz são reais e sinais sutis em vídeos ajudam a desmascarar conteúdos falsos.`;
        }
    });
});
