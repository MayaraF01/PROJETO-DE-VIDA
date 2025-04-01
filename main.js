// Função para atualizar o contador de tempo
function atualizarContador(id, targetDate) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById(id + "-dias").innerText = 0;
            document.getElementById(id + "-horas").innerText = 0;
            document.getElementById(id + "-min").innerText = 0;
            document.getElementById(id + "-seg").innerText = 0;
            return;
        }

        const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(id + "-dias").innerText = dias;
        document.getElementById(id + "-horas").innerText = horas;
        document.getElementById(id + "-min").innerText = minutos;
        document.getElementById(id + "-seg").innerText = segundos;
    }, 1000);
}

// Definindo a data alvo para cada objetivo
const objetivo1Data = new Date("Dec 31, 2025 23:59:59").getTime(); // Estudar 2 horas por dia para o ENEM
const objetivo2Data = new Date("Dec 31, 2025 23:59:59").getTime(); // Ler um livro todo mês
const objetivo3Data = new Date("Dec 31, 2025 23:59:59").getTime(); // Investir em meu conhecimento
const objetivo4Data = new Date("Dec 31, 2025 23:59:59").getTime(); // Aplicar conhecimento no trabalho

// Iniciar os contadores de tempo
atualizarContador("dias0", objetivo1Data);
atualizarContador("dias1", objetivo2Data);
atualizarContador("dias2", objetivo3Data);
atualizarContador("dias3", objetivo4Data);

// Função para alternar entre as abas
const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // Remover a classe 'ativo' de todos os botões e abas
        botoes.forEach(btn => btn.classList.remove('ativo'));
        abas.forEach(aba => aba.classList.remove('ativo'));
        
        // Adicionar a classe 'ativo' ao botão clicado e à aba correspondente
        botao.classList.add('ativo');
        abas[index].classList.add('ativo');
    });
});
