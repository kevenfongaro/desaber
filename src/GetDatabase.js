import {returnLinguagem} from './Linguagem.js';

export async function getStaticProps() {
}

// um grandioso obrigado à galera que fez isso aqui: https://splitbee.io/blog/notion-as-cms-using-nextjs

export const fetchEncontros = async () => {
    
    try {
	    return await fetch(
        `https://notion-api.splitbee.io/v1/table/283e4a8bf9004fc7969c2facc3a0da66`
        ).then((res) => res.json());
    } catch (error) {
        return await fetch(
            `/apibackup.json`
            ).then((res) => res.json());
    }
}

export async function returnEncontros() {
    
    var todos = await fetchEncontros()


    // tudo abaixo serve pra tratar o json recebido
    var dataMaisProxima = null;
    var hoje = new Date();

    todos.forEach((encontro)=> {
        // transforma a string de datas em objetos Date
        encontro.datas = (encontro.datas.replace(/[‘’]/g,'"'));
        encontro.datas = JSON.parse(encontro.datas)
        encontro.datas = encontro.datas.map((data)=>
            data = (data === 'indefinido' ? 'indefinido' : new Date(data))
            
        )
        
        // Para cada encontro e entre os encontros que acontecerão no futuro, seta a data futura mais próxima
        
        if (encontro.datas.some(elem => elem === 'indefinido')) {
            encontro.dataFuturaMaisProxima = 'indefinido';
        }
        else if (encontro.datas.some(elem => elem >= hoje)) {
            encontro.datas.forEach((dataDoEncontro)=>{
                if (!dataMaisProxima) {
                    if (dataDoEncontro >= hoje) {
                        dataMaisProxima = dataDoEncontro;
                        encontro.dataFuturaMaisProxima = dataDoEncontro;
                    }
                }
                else if (dataDoEncontro >= hoje) {
                    if (!encontro.dataFuturaMaisProxima || dataDoEncontro <= encontro.dataFuturaMaisProxima) {
                        dataMaisProxima = dataDoEncontro;
                        encontro.dataFuturaMaisProxima = dataDoEncontro;
                    }
                }
            })
        } else {
            encontro.dataFuturaMaisProxima = null;
        }

      
    })
    var categorias = [
        {
            titulo: returnLinguagem('ptBr').proxEncontro,
            encontros: null,
        },
        {
            titulo: returnLinguagem('ptBr').noPassado,
            encontros: todos.filter((encontro) => encontro.datas.some(elem => elem <= hoje)),
        },
        {
            titulo: returnLinguagem('ptBr').programeSe,
            encontros: todos.filter((encontro) => encontro.datas.some(elem => elem >= hoje || elem  === 'indefinido')),
        },
    ]
    
    // Retira os encontros que ainda vão acontecer da lista de encontros passados
    categorias[1].encontros = categorias[1].encontros.filter((e) => !categorias[2].encontros.includes(e))

    // Decide entre os encontros que ainda acontecerão qual o mais próximo
    var proxEncontroDataComparativa = null

    categorias[2].encontros.forEach((encontroFuturo) => {
        if (!proxEncontroDataComparativa) {
            proxEncontroDataComparativa = encontroFuturo.dataFuturaMaisProxima;
            categorias[0].encontros = encontroFuturo;
        } 
        else {
            if (!(proxEncontroDataComparativa instanceof Date)) {
            // caso o atual proxEncontroDataComparativa seja indefinido...
                if (encontroFuturo.dataFuturaMaisProxima instanceof Date) {
                    // se o encontro sendo verificado for uma data, ele tem prioridade
                    proxEncontroDataComparativa = encontroFuturo.dataFuturaMaisProxima;
                    categorias[0].encontros = encontroFuturo;
                }
                else {
                    // se o encontro sendo verificado também for indefinido, aleatoriamente pode mostrar um ou outro
                    if (Math.random() < 0.2) {
                        proxEncontroDataComparativa = encontroFuturo.dataFuturaMaisProxima;
                        categorias[0].encontros = encontroFuturo;
                    }
                }
            }
            else if (encontroFuturo.dataFuturaMaisProxima <= proxEncontroDataComparativa) {
            // caso o atual proxEncontroDataComparativa seja uma data, compara com a data do encontro sendo verificado
                proxEncontroDataComparativa = encontroFuturo.dataFuturaMaisProxima;
                categorias[0].encontros = encontroFuturo;
            }
        } 
    })

    // Retorna uma array com todos os encontros e outra com eles divididos por categoria
    return {
        todos,
        categorias
    }
}