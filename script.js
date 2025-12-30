const btnQueroSaber = document.getElementById('btn-quero-saber');
const btnNaoDireto = document.getElementById('btn-nao-direto');
const revelacao = document.getElementById('revelacao');
const footerBotoes = document.getElementById('footer-botoes');
const btnWhats = document.getElementById('btn-whatsapp');

// Revela o convite com Confetes
btnQueroSaber.addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#064420', '#25D366', '#FDFCF0']
    });
    footerBotoes.style.display = 'none';
    revelacao.classList.add('show');
});

// Resposta negativa direta e respeitosa
btnNaoDireto.addEventListener('click', () => {
    const tel = "5531985230304";
    const msgEncerramento = encodeURIComponent("ai desculpa kkkk pode encerrar aq ent n precisa render mais msm");
    window.location.href = `https://wa.me/${tel}?text=${msgEncerramento}`;
});

// Resposta positiva com a PRIMEIRA MENSAGEM dela
btnWhats.addEventListener('click', () => {
    const tel = "5531985230304";
    const primeiraMensagem = `ai mds kfkfjdjd\nsem kere\nia manda oi\nmdkdkdkdkd`;
    window.location.href = `https://wa.me/${tel}?text=${encodeURIComponent(primeiraMensagem)}`;
});