class Pergunta {
    constructor(texto, respostas) {
        this.texto = texto;
        this.respostas = respostas;
    }
}

class Resposta {
    constructor(texto, isVerdade) {
        this.texto = texto;
        this.isVerdade = isVerdade;
    }
}

let respostasPergunta1 = [new Resposta("VALORES", false), new Resposta("VISÃO", false), new Resposta("ALCANCE", true), new Resposta("PROPÓSITO", false)]
let pergunta1 = new Pergunta(
    "QUAL DESTES ATRIBUTOS NÃO REPRESENTAM UMA COR DO NORDESTÃO?", respostasPergunta1
)

let respostasPergunta2 = [new Resposta("1972", true), new Resposta("1800", false), new Resposta("1980", false), new Resposta("1993", false)]
let pergunta2 = new Pergunta(
    "EM QUE ANO FOI FUNDADO O NORDESTÃO?", respostasPergunta2
)

let respostasPergunta3 = [new Resposta("LEÔNCIO ETELVINO DE MEDEIROS", true), new Resposta("FREDERICO FAGUNDES FILHO", false), new Resposta("ANTÔNIO CARLOS JOBIM", false), new Resposta("MANOEL FRANCO DE MEDEIROS", false)]
let pergunta3 = new Pergunta(
    "QUAL É O NOME DO FUNDADOR DO NORDESTÃO?", respostasPergunta3
)

let respostasPergunta4 = [new Resposta("MOSSORÓ", false), new Resposta("PARNAMIRIM", true), new Resposta("TOUROS", false), new Resposta("NATAL", false)]
let pergunta4 = new Pergunta(
    "ONDE ESTÁ LOCALIZADA A DIREÇÃO DA EMPRESA E OS SETORES ADMINISTRATIVOS?", respostasPergunta4
)
let respostasPergunta5 = [new Resposta("ASSAI ATACADISTA", true), new Resposta("APPLE", false), new Resposta("ESTÁCIO", false), new Resposta("TESLA", false)]
let pergunta5 = new Pergunta(
    "QUAL DESTAS É UM CONCORRENTE DO NORDESTÃO?", respostasPergunta5
)
let respostasPergunta6 = [new Resposta("2000", false), new Resposta("1973", false), new Resposta("2011", false), new Resposta("2012", true)]
let pergunta6 = new Pergunta(
    "QUE ANO FOI FUNDADO O SUPERFACIL ATACADO?", respostasPergunta6
)
let respostasPergunta7 = [new Resposta("10", false), new Resposta("4", false), new Resposta("12", true), new Resposta("6", false)]
let pergunta7 = new Pergunta(
    "QUANTAS LOJAS DO NORDESTÃO EXISTEM?", respostasPergunta7
)
let respostasPergunta8 = [new Resposta("2º LUGAR", false), new Resposta("4º LUGAR", false), new Resposta("3º LUGAR", false), new Resposta("1º LUGAR", true)]
let pergunta8 = new Pergunta(
    "QUAL A COLOCAÇÃO DO NORDESTÃO NA PREMIAÇÃO DO TOP OF MIND?", respostasPergunta8
)
let respostasPergunta9 = [new Resposta("BORRACHA", false), new Resposta("SILICONE", true), new Resposta("PLÁSTICO", false), new Resposta("ALUMÍNIO", false)]
let pergunta9 = new Pergunta(
    "QUAL O MATERIAL UTILIZADO NO COPO ENTREGUE AOS COLABORADORES DO NORDESTÃO?", respostasPergunta9
)

const listaDePerguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9];

const perguntaElement = document.getElementById('pergunta')

const resposta1Element = document.getElementById('resposta-1')
const resposta2Element = document.getElementById('resposta-2')
const resposta3Element = document.getElementById('resposta-3')
const resposta4Element = document.getElementById('resposta-4')

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')

const placar = document.getElementById('pontuacao')
const btnReload = document.getElementById('reload')

let contador = 0;
let pontuacao = 0;

window.onload = (event) => {
    btnReload.hidden = true;
    setPergunta()
};

const handleOnClick = (element) => {
    if(contador >= listaDePerguntas.length) {
        const pular = document.getElementById('pular')
        pular.innerHTML = "FIM"
        pular.disabled = true
        btnReload.hidden = false;
    }
    verificarResposta(element)
}


const setPergunta = () => {
    placar.innerHTML = pontuacao;
    if( contador < listaDePerguntas.length) {
        perguntaElement.innerHTML = listaDePerguntas[contador].texto
        
        resposta1Element.innerHTML = listaDePerguntas[contador].respostas[0].texto
        btn1.value = listaDePerguntas[contador].respostas[0].isVerdade
        resposta2Element.innerHTML = listaDePerguntas[contador].respostas[1].texto
        btn2.value = listaDePerguntas[contador].respostas[1].isVerdade
        resposta3Element.innerHTML = listaDePerguntas[contador].respostas[2].texto
        btn3.value = listaDePerguntas[contador].respostas[2].isVerdade
        resposta4Element.innerHTML = listaDePerguntas[contador].respostas[3].texto
        btn4.value = listaDePerguntas[contador].respostas[3].isVerdade
        
        contador++;
    }
}

const verificarResposta = (element) => {
    if((/true/).test(element.value)) {
        pontuacao = pontuacao + 10;
        element.className = "resposta-verde"
        element.disabled = true;
    } else pontuacao = pontuacao - 3;

    if((/false/).test(btn1.value)) btn1.className = "resposta-cinza"
    if((/false/).test(btn2.value)) btn2.className = "resposta-cinza"
    if((/false/).test(btn3.value)) btn3.className = "resposta-cinza"
    if((/false/).test(btn4.value)) btn4.className = "resposta-cinza"

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    
    placar.innerHTML = pontuacao;
}

const resetarRespostas = () => {
    btn1.className = "resposta"
    btn2.className = "resposta"
    btn3.className = "resposta"
    btn4.className = "resposta"
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
}

const handlePular = () => {
    if(contador >= listaDePerguntas.length) return
    resetarRespostas()
    setPergunta()
}

const handleRecarregar = () => {
    location.reload();
}
