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

let estagioNao = 0;

btnNaoDireto.addEventListener('click', (e) => {
    estagioNao++;

    if (estagioNao === 1) {
        // Estágio 1: O botão desliza para um lado aleatório
        btnNaoDireto.innerText = "Porra, tem certeza? 🤨";
        
        // Calcula um deslocamento relativo à posição atual
        // Para não sumir da tela, limitamos o movimento
        const moveX = Math.random() > 0.5 ? 50 : -50; // Move 50px pro lado
        const moveY = Math.random() > 0.5 ? -80 : -150; // Sobe um pouco
        
        btnNaoDireto.style.transform = `translate(${moveX}px, ${moveY}px)`;

    } else if (estagioNao === 2) {
        // Estágio 2: O botão volta para o lugar original com o texto de "rendição"
        btnNaoDireto.innerText = "Vou te deixar de xereca msm 🐸";
        const moveX = Math.random() > 0.5 ? 50 : -50; // Move 50px pro lado
        const moveY = Math.random() > 0.5 ? -80 : -150; // Sobe um pouco
        btnNaoDireto.style.transform = `translate(${moveX}px, ${moveY}px)`;

            } else if (estagioNao === 3) {
        // Estágio 2: O botão volta para o lugar original com o texto de "rendição"
        btnNaoDireto.style.transform = `translate(0, 0)`;
        btnNaoDireto.innerText = "Blz, eu aceito (final) 🙄";
        
        // Mantém a cor original de "botão cinza" para não confundir com o sim
        btnNaoDireto.style.backgroundColor = "var(--cinza-botao)";

    } else {
        // Estágio 3: O clique final que leva para o WhatsApp de negação
        const tel = "5531985230304";
        const msgEncerramento = encodeURIComponent("tá, você me venceu no cansaço com esse botão fugindo kkkkk mas vamos encerrar por aqui mesmo!");
        window.location.href = `https://wa.me/${tel}?text=${msgEncerramento}`;
    }
});

btnWhats.addEventListener('click', () => {
    const tel = "5531985230304";
    const msg = `ai mds kfkfjdjd\nsem kere\nia manda oi\nmdkdkdkdkd`;
    window.location.href = `https://wa.me/${tel}?text=${encodeURIComponent(msg)}`;
});

// Localize onde estão suas variáveis e adicione:
const btnVoltarFotos = document.getElementById('btn-voltar-fotos');

// Adicione este evento no final do arquivo:
btnVoltarFotos.addEventListener('click', () => {
    // Esconde a finalização
    finalizacao.classList.add('hidden');
    finalizacao.classList.remove('show');
    
    // Volta para o carrossel
    secaoCarrossel.classList.remove('hidden');
    
    // Opcional: Reseta para a última foto ou primeira
    // Se quiser que ela volte exatamente para a última foto:
    slideAtual = slides.length - 9;
    atualizarSlides();

    
});

