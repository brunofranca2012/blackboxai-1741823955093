// Dados dos posicionamentos radiológicos
const posicionamentos = {
    cranio: [
        {
            titulo: "AP (Antero-Posterior) do Crânio",
            descricao: "Posicionamento para visualização frontal do crânio. O paciente deve estar em posição supina ou sentada, com o plano sagital mediano perpendicular à mesa/bucky. O raio central deve ser perpendicular ao filme e direcionado ao násio.",
            indicacoes: "Avaliação de fraturas, lesões ósseas e seios paranasais.",
            criteriosDeAvaliacao: [
                "Simetria das estruturas bilaterais",
                "Visualização completa do crânio",
                "Ausência de rotação"
            ]
        },
        {
            titulo: "Lateral do Crânio",
            descricao: "Posicionamento lateral com o lado de interesse mais próximo ao receptor de imagem. A linha interpupilar deve estar perpendicular ao filme e paralela ao solo.",
            indicacoes: "Avaliação da calota craniana, sela túrcica e base do crânio.",
            criteriosDeAvaliacao: [
                "Sobreposição das estruturas petromas",
                "Visualização clara da sela túrcica",
                "Ausência de sobreposição facial"
            ]
        }
    ],
    coluna: [
        {
            titulo: "AP da Coluna Cervical",
            descricao: "Paciente em posição supina ou sentada. Alinhar a coluna cervical com o receptor de imagem. O raio central deve ser perpendicular ao filme e direcionado à C4.",
            indicacoes: "Avaliação de alterações degenerativas, alinhamento vertebral e fraturas.",
            criteriosDeAvaliacao: [
                "Visualização de C1 a T1",
                "Processos espinhosos centralizados",
                "Espaços intervertebrais visíveis"
            ]
        }
    ],
    torax: [
        {
            titulo: "PA (Postero-Anterior) do Tórax",
            descricao: "Paciente em posição ereta, com o tórax em contato com o bucky vertical. Ombros rotacionados para frente, tocando o receptor de imagem. Queixo elevado.",
            indicacoes: "Avaliação pulmonar, cardíaca e óssea do tórax.",
            criteriosDeAvaliacao: [
                "Inspiração completa",
                "Escápulas fora dos campos pulmonares",
                "Visualização completa dos ápices e seios costofrênicos"
            ]
        }
    ]
};

// Função para mostrar detalhes de um posicionamento
function mostrarDetalhes(categoria) {
    const conteudoMain = document.querySelector('main');
    const posicoesDaCategoria = posicionamentos[categoria];
    
    if (!posicoesDaCategoria) {
        console.error('Categoria não encontrada:', categoria);
        return;
    }

    let html = `
        <div class="max-w-4xl mx-auto">
            <button onclick="voltarParaHome()" class="mb-6 flex items-center text-blue-600 hover:text-blue-800">
                <i class="fas fa-arrow-left mr-2"></i>
                Voltar
            </button>
            <h2 class="text-2xl font-bold mb-6">Posicionamentos - ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
            <div class="space-y-6">
    `;

    posicoesDaCategoria.forEach(pos => {
        html += `
            <div class="bg-white rounded-lg shadow p-6">
                <h3 class="text-xl font-semibold text-gray-900">${pos.titulo}</h3>
                <div class="mt-4 space-y-4">
                    <div>
                        <h4 class="font-medium text-gray-900">Descrição:</h4>
                        <p class="text-gray-600">${pos.descricao}</p>
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-900">Indicações:</h4>
                        <p class="text-gray-600">${pos.indicacoes}</p>
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-900">Critérios de Avaliação:</h4>
                        <ul class="list-disc list-inside text-gray-600">
                            ${pos.criteriosDeAvaliacao.map(criterio => `<li>${criterio}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="mt-4 p-4 bg-gray-50 rounded-md">
                        <p class="text-gray-500 text-sm italic">
                            <i class="fas fa-image mr-2"></i>
                            Imagem ilustrativa será adicionada em breve
                        </p>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    conteudoMain.innerHTML = html;
}

// Função para voltar à página inicial
function voltarParaHome() {
    window.location.reload();
}

// Adicionar event listeners quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar listeners para os botões de categoria
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const categoria = e.target.closest('div').querySelector('h2').textContent.toLowerCase();
            if (posicionamentos[categoria]) {
                mostrarDetalhes(categoria);
            }
        });
    });
});
