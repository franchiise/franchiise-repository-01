const exercicio = {

    tempo: document.querySelector('#tempo'),
    peso: document.querySelector('#peso'),
    vel: document.querySelector('vel') 

}

function gastoCalorico(res) {

    let total = 1

    for (let v in exercicio) {

        res = total *= exercicio[v]

    }

    return res

}

console.log(gastoCalorico())