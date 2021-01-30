/*



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