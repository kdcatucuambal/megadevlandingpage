'use strict'

const questions = JSON.parse(localStorage.getItem("megapro_ques"));
const responses = JSON.parse(localStorage.getItem("megapro_res"));


const boxResult = document.querySelector("#result");
const boxContent = document.querySelector("#content");

function checkResponses() {
    let index = 0;
    let corrects = 0;
    for (const q of questions) {
        if (responses[index].response.toString() === q.correct.toString()) {
            corrects++;
        }

        boxContent.innerHTML += `
        <div class="col-7 mt-4">
        <div class="card text-dark">
            <div class="card-body">
                <p class="text-justify">PREGUNTA ${index + 1}: ${message(q.correct, responses[index].response)}</p>
            </div>
        </div>
    </div>
        `;
        index++;
    }
    
    boxResult.innerHTML = `${corrects} aciertos de ${questions.length}`;
}

function message(response, userResponse) {
    if (response.toString() === userResponse.toString()) {
        return `<span class="text-success"><strong>CORRECTO</strong></span>`;
    }
    return ` <span class="text-danger"><strong>INCORRECTO</strong></span>`;
}

checkResponses();