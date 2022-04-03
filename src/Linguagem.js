export function returnLinguagem(qual) {
   const linguagem = {
       ptBr: {
           linguagem: 'Português',
           com: 'Com ',
           diaDaSemana: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
           hora: 'h',
           minuto: 'm',
           semData: 'Sem data definida',
           proxEncontro: 'Próximo encontro...',
           botaoDeAcao: 'Estarei lá',
           botaoCompartilhar: 'Convidar alguém',
           noPassado: 'No passado',
           programeSe: 'Programe-se',
           vemporai: 'vem por aí...',
           linkSobre: 'De Saber?',
           linkNewsletter: 'Newsletter',
           linkEscolas: 'Escolas',
           linkFaleConosco: 'Fale conosco',
           linkContribua: 'Contribua',
       }
   }
   return linguagem[qual];
}
