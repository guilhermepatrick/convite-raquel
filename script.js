// Navegação de Seções
const btnVerFotos = document.getElementById('btn-ver-fotos');
const secaoCarrossel = document.getElementById('secao-carrossel');
const intro = document.getElementById('intro');
const finalizacao = document.getElementById('finalizacao');

// Controle do Carrossel
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
const slides = document.querySelectorAll('.slide');

let slideAtual = 0;

function atualizarSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideAtual].classList.add('active');

    // Botão Voltar só aparece após o primeiro slide
    btnAnterior.style.display = (slideAtual === 0) ? 'none' : 'block';

    // Texto do botão Próximo no último slide
    if (slideAtual === slides.length - 1) {
        btnProximo.innerText = "Continuar para o final ✨";
    } else {
        btnProximo.innerText = ">";
    }
}

btnVerFotos.addEventListener('click', () => {
    intro.classList.add('hidden');
    secaoCarrossel.classList.remove('hidden');
    atualizarSlides();
});

btnProximo.addEventListener('click', () => {
    if (slideAtual < slides.length - 1) {
        slideAtual++;
        atualizarSlides();
    } else {
        secaoCarrossel.classList.add('hidden');
        finalizacao.classList.remove('hidden');
        finalizacao.classList.add('show');
    }
});

btnAnterior.addEventListener('click', () => {
    if (slideAtual > 0) {
        slideAtual--;
        atualizarSlides();
    }
});

// Ações Finais
const btnQueroSaber = document.getElementById('btn-quero-saber');
const btnNaoDireto = document.getElementById('btn-nao-direto');
const revelacao = document.getElementById('revelacao');
const footerBotoes = document.getElementById('footer-botoes');
const btnWhats = document.getElementById('btn-whatsapp');

btnQueroSaber.addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#064420', '#25D366', '#FDFCF0']
    });
    footerBotoes.classList.add('hidden');
    revelacao.classList.remove('hidden');
});

btnNaoDireto.addEventListener('click', () => {
    const tel = "5531985230304";
    const msg = encodeURIComponent("ai desculpa kkkk pode encerrar aq ent n precisa render mais msm");
    window.location.href = `https://wa.me/${tel}?text=${msg}`;
});

btnWhats.addEventListener('click', () => {
    const tel = "5531985230304";
    const msg = `ai mds kfkfjdjd\nsem kere\nia manda oi\nmdkdkdkdkd`;
    window.location.href = `https://wa.me/${tel}?text=${encodeURIComponent(msg)}`;
});