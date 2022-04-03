import React from 'react';
import '../css/Universal.css';
import '../css/Sobre--Equipe.css';
import EquipeMembro from'./EquipeMembro';

const Equipe = () => {
    var equipe = [
        {
            id: 0,
            nome: 'Keven Fongaro',
            funcoes: 'Educador Audiovisual',
            bio: ' Licenciado e mestrando em Cinema e Audiovisual pela UFF, conduz pesquisas que perpassam educação audiovisual, cinema socioambiental, e relações entre pedagogia, mídias digitais e cotidiano. Coordena o projeto "Cinema, Sujeitos e Territórios" junto à ONG Ecofalante e coordenou grupos de cinema para professores da educação básica pelo projeto Inventar com a Diferença, do lab. KUMã (UFF). Ministra avulsamente oficinas livres e cursos de cinema e audiovisual em diversas escolas públicas, instituições e espaços. Co-diretor e montador do longa documentário “Café do Oeste”.',
            img: 'https://desaber.com.br/imgs/equipe/keven.jpg',
        },
        {
            id: 1,
            nome: 'Emilly Camila',
            funcoes: 'Designer',
            bio: 'Trabalhou 4 anos como designer em conteúdos para as mídias digitais em agências de comunicação em Rolim de Moura - RO e Porto Velho - RO. Atua como fotógrafa independente desde 2017, conduzindo pesquisas sobre fotografia em estética cyberpunk autonomamente. Foi co-diretora, editora de imagem, produtora e diretora de fotografia do longa "Café do Oeste". Trabalhou na identidade visual e na criação de logo para diversas empresas, instituições e personalidades.',
            img: 'https://desaber.com.br/imgs/equipe/emilly.jpeg',
        },
        {
            id: 2,
            nome: 'Ana Luísa Mariquito',
            funcoes: 'Educadora Audiovisual',
            bio: 'Licenciada em Cinema e Audiovisual pela UFF e técnica em Direção Cinematográfica pela Academia Internacional de Cinema (AIC - RJ). Dirigiu dois curtas-metragens ficcionais, “Quinta-feira” e “Maré Alta”, e um documentário, “Cidade Natal”, e participou da produção de outros materiais audiovisuais na posição de técnica de som direto, montagem e produção. Atuou em grupos de formação de professores no Laboratório Kumã - UFF, onde pesquisou sobre Cinema de Grupo e Pedagogia do Dispositivo. Coordenou o projeto “Cinema, Sujeitos e Territórios”, onde ministrou semanalmente encontros gratuitos e abertos à comunidade.',
            img: 'https://desaber.com.br/imgs/equipe/analuisa.jpg',
        },
        {
            id: 3,
            nome: 'Anasylvia Cardoso',
            funcoes: 'Produtora',
            bio: 'Graduanda em cinema e audiovisual pela Universidade Federal Fluminense (UFF), é técnica em "Propriedade Intelectual" pelo Senai-RJ,  "Concepção de Projetos Audiovisuais e Financiamento" e " Execução Financeira e Prestação de Contas" pela Escola Nacional de Administração Pública. Ao longo dos anos compôs  equipes técnicas de fotografia, assistência  de direção e produção  no desenvolvimento de projetos audiovisuais de curta metragem e videoclipes. No  teatro atuou junto a produtora "Espaço Sequência" na produção e montagem da performance "Estranho" dirigida por Eveline Cunha, apresentada na Casa de Cultura Laura Alvim em 2019. ',
            img: 'https://desaber.com.br/imgs/equipe/anasylvia.jpg',
        },
        {
            id: 4,
            nome: 'Guilherme Cirqueira',
            funcoes: 'Educador audiovisual',
            bio: 'Licenciando em Cinema e Audiovisual na Universidade Federal Fluminense (UFF), tem experiências em criação e produção audiovisual desde 2018. Desde então realiza curtas-metragens, integrando equipes de produção, som, arte e direção, além de se interessar e realizar pesquisas com grupos de experimentação em meios digitais.',
            img: 'https://desaber.com.br/imgs/equipe/gui.jpg',
        },
        {
            id: 5,
            nome: 'Lane Lopes',
            funcoes: 'Educadora audiovisual',
            bio: 'Dramaturga, cientista social de formação e atualmente cursa Licenciatura em Cinema e Audiovisual pela UFF. Integrou o Núcleo Sesi de Dramaturgia coordenada por Diogo Liberano, onde sua dramaturgia "só percebo que estou correndo quando vejo que estou caindo" foi selecionada para publicação pela Cobogó em 2019. Teve três dramaturgias encenadas nas Mostras de Teatro da UFRJ: "Histórias para Acordar" (2018; com temporada no Parque das Ruínas), "eu vou tirar você desse lugar (2019) e "Que Parte de Nós" (2019). Também escreveu "é um crime dormir tranquilo nessa cidade" lido na Semana de Dramaturgia SESI FIRJAN.',
            img: 'https://desaber.com.br/imgs/equipe/lane.jpg',
        },
        {
            id: 6,
            nome: 'Lucas Fortunato',
            funcoes: 'Educador audiovisual',
            bio: 'Licenciado em Cinema e Audiovisual pela Universidade Federal Fluminense com monografia intitulada "Visão docente: um estudo sobre a relação do Cinema e do Audiovisual na educação básica". Formado em edição de filmes pela Escola de Cinema Darcy Ribeiro, e em Design Gráfico e Edição pela Seven. Realizou oficinas de cinema e audiovisual para jovens do ensino médio no Instituto de Educação Professor Ismael Coutinho - IEPIC (Niterói), e também organizou e ministrou oficinas para crianças atendidas pelo NEACA (Movimento de Mulheres, São Gonçalo). É professor de Arte no Centro Educacional Mello Paulo (São Gonçalo) para turmas do 6° ao 9° ano.',
            img: 'https://desaber.com.br/imgs/equipe/lucas.jpg',
        },
        {
            id: 7,
            nome: 'Matheus Hoffman',
            funcoes: 'Educador Audiovisual',
            bio: 'Educador audiovisual com experiência em formação de professores pelo Laboratório Kumã (UFF). Já ministrou oficinas e cursos em escolas da rede estadual do Rio de Janeiro, além de também atuar como realizador audiovisual.',
            img: 'https://desaber.com.br/imgs/equipe/matheus.jpeg',
        },
        {
            id: 8,
            nome: 'Rachel Aranha',
            funcoes: 'Educadora audiovisual',
            bio: 'Bacharelada e Licencianda em Cinema e Audiovisual pela UFF. Trabalhou com auxílio ao desenvolvimento de projetos de vídeos institucionais para a Comunicação Social da Presidência (Fiocruz) e com iniciação ao desenvolvimento de projetos de animação e de pré produção para curtas documentários junto ao CTAV. Foi ministrante extensionista de oficinas de televisão comunitária via web (Pró-Reitoria de extensão/UFRJ). Foi coordenadora na Residência Artística do 4o BRICS Film Festival, além de curadora da Mostra Escolas do Festival. Trabalhou com edição e montagem voluntariamente junto ao Coletivo ReConsidere.',
            img: 'https://desaber.com.br/imgs/equipe/rachel.jpg',
        },
        {
            id: 9,
            nome: 'Tatiana del Gadelha',
            funcoes: 'Educadora audiovisual',
            bio: 'Se formou na UFF em Cinema e Audiovisual - Licenciatura. Durante a Graduação, estagiou no PIBID, elaborando oficinas e planos de aula sobre Audiovisual e Educação em parceria com educadores de Arte nos colégios: CE Raúl Vidal (Niterói); CE Guilherme Briggs (Niterói); COLUNI (Niterói). Atualmente, é mestranda da UFRJ em Artes Visuais - e pesquisa os enlaces entre imagem, cartografia e educação.',
            img: 'https://desaber.com.br/imgs/equipe/tati.jpg',
        },
        {
            id: 10,
            nome: 'Vinicius Curvelo',
            funcoes: 'Educador audiovisual',
            bio: 'Licenciado em cinema e audiovisual pela Universidade Federal Fluminense, atua com a pedagogia do dispositivo na formação de professores desde 2019, tendo também criado grupos em mídias digitais com intuito de explorar as relações pedagógicas entre as redes sociais e as relações humanas.',
            img: 'https://desaber.com.br/imgs/equipe/vino.jpeg',
        },
    ];
    return (
        <div className="equipe unv--container">
            <div className="unv--cabecalho">
                <h1>Nossa equipe</h1>
            </div>
            <div className="unv--corpo unv--umacoluna">
                <p>A De Saber é feita por muitas mãos – a maioria delas de visitantes. Mas temos algumas constâncias: uma equipe formada por profissionais de origens diversas que tenta garantir que tudo por aqui ocorra bem. Conheça algumas dessas pessoas abaixo!</p>
            </div>
            <div className="unv--corpo unv--boxcontainer">
                {
                    equipe.sort(() => Math.random() - 0.5).map((membro) => <EquipeMembro membro={membro} key={membro.id} />)
                }
            </div>
            
        </div>
    );
}

export default Equipe;