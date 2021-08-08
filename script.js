/*

    Para catalogar cada tipo de dado, pôr cada valor como
    object seria a melhor opção. A partir da function cal-
    cular(), armazenamos cada valor da const exercicio, e 
    convertemos para numbers. 

    Por meio de pesquisas, para calcular a quantidade de
    calorias consumidas em, no caso, um exercício, existe
    uma maneiro um tanto quanto simples, de determinar 
    a quantidade apróximada de calorias perdidas.

    O cálculo se torna o produto entre: O tempo percorrido;
    o peso de quem se identifica; e a velocidade com a qual
    se deslocou. O resultado, como dito anteriormente, não
    pode ser exato, pois sempre se leva em consideração
    diversos fatores como altura, gênero, biotipo corporal,
    etc. 

    Para formar um meio de multiplicar os elementos do object,
    e que agora se tornou um array, cria-se um loop, que multi-
    plicará cada valor apresentado na interface do html.

*/

const exercicio = {

    txtempo: document.querySelector('#tempo'),
    txtpeso: document.querySelector('#peso'),
    txtvel: document.querySelector('#vel') 

}

function calcular() {

    let arrayS = [exercicio.txtempo.value, exercicio.txtpeso.value, exercicio.txtvel.value]
    let arrayN = [Number(exercicio.txtempo.value)/60, Number(exercicio.txtpeso.value), Number(exercicio.txtvel.value)]

    if (arrayS[0, 1, 2] == 0) {

        alert('[ERRO] Nenhuma Caloria Consumida')

    } else {

        let total = 1

        for (let v in arrayN) {

            total *= arrayN[v]

        }

        alert(total + ' - Calorias Consumidas')

    }

}