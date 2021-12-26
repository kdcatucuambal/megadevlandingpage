const questions = [
    {
        "question": "En una clase de Matemática asisten 10 estudiantes y se van a formar equipos de trabajo de 2. ¿Cuántos equipos de trabajo diferentes se pueden formar?",
        "options": [
            2,
            4,
            45,
            210
        ],
        "correct": 45,
        "subject": "Matemáticas",
        "id": "001",
        "flag": false
    },
    {
        "question": "En un curso de 48 alumnos, el número de niños es el triple del número de niñas. La cantidad de niñas que hay en el curso es: ",
        "options": [
            8,
            12,
            18,
            19
        ],
        "correct": 12,
        "subject": "Matemáticas",
        "id": "002",
        "flag": false
    },
    {
        "question": "Mario vende 1/3 de su finca. Renta 1/8 del resto y lo que le queda lo cultiva. ¿Qué porción de la finca cultiva?",
        "options": [
            "7/12",
            "1/3",
            "1/4",
            "11/12"
        ],
        "correct": "7/12",
        "subject": "Matemáticas",
        "id": "003",
        "flag": false
    },
    {
        "question": "El precio de un Smartphone se rebaja 20%. Para volverlo al valor original, el nuevo precio debe aumentarse en:",
        "options": [
            "18%",
            "20%",
            "21%",
            "25%"
        ],
        "correct": "25%",
        "subject": "Matemáticas",
        "id": "004",
        "flag": false
    },
    {
        "question": "A puede realizar un trabajo en 6 horas, mientras que B realiza el trabajo el 12 horas. Si A y B trabajan juntos, ¿en cuántas horas terminan el trabajo?",
        "options": [
            "9 horas",
            "6 horas",
            "4 horas",
            "3 horas"
        ],
        "correct": "9 horas",
        "subject": "Matemáticas",
        "id": "005",
        "flag": false
    },
    {
        "question": `Identifique el elemento de la comunicación que está marcado entre comillas.<br/>
        Madrid, 12 de febrero de 2013 <br/>
        "Sres. Investigadores" <br/>
        En sus despachos, Por medio de la presente notificación se les exhorta a dejar constancia en sus registros de la hora de entrada y salida de la institución. Esto debido a las nuevas disposiciones de la Rectoría. 
        Muy atentamente, 
        La Secretaría Académica`,
        "options": [
            "Código",
            "Emisor",
            "Receptor",
            "Mensaje"
        ],
        "correct": "Receptor",
        "subject": "Lenguaje",
        "id": "006",
        "flag": false
    },
    {
        "question": `Con base en el caso, identifique al emisor del mensaje.<br/>

        Miguel Hernández escribió la estrofa: <br/>

        <p class="text-center text-dark">
        Por el cinco de enero,<br/>
        cada enero ponía <br/>
        mi calzado cabrero <br/>
        a la ventana fría. <br/><br/>
        Los estudiantes de una escuela la memorizaron. Esta estrofa es parte del poema llamado Las desiertas abarcas, escrito originalmente en español.
        </p>

       
        `,
        "options": [
            "Estudiantes",
            "Poeta",
            "Poema",
            "Idioma español"
        ],
        "correct": "Poeta",
        "subject": "Lenguaje",
        "id": "007",
        "flag": false
    },
    {
        "question": `
            Con base en el texto, identifique el nivel de lenguaje: <br/><br/>
            La halita es la forma mineral de una sustancia que se utiliza para cocinar y conservar alimentos desde la antigüedad: la sal común, que es una variedad cristalizada del cloruro de sodio (NaCl). Como mineral, la sal es trasparente o translúcida, de brillo cristalino, frágil, blanda (su dureza es 2) y ligera (su densidad es de 2 126 g/cm).
        `,
        "options": [
            "Coloquial",
            "Vulgar",
            "Familiar",
            "Centífico"
        ],
        "correct": "Centífico",
        "subject": "Lenguaje",
        "id": "008",
        "flag": false
    },
    {
        "question": `Identifique la palabra que está formada con el prefijo griego que significa por ambos lados.`,
        "options": [
            "Anfiteatro",
            "Antipatía",
            "Antagonista",
            "Analgesia"
        ],
        "correct": "Anfiteatro",
        "subject": "Lenguaje",
        "id": "009",
        "flag": false
    },
    {
        "question": `Identifique la función del lenguaje que predomina en el texto.<br/><br/>
        En el sistema ortográfico del español, la letra q solo tiene uso como elemento integrante del dígrafo qu para representar el fonema /k/ ante las vocales e, i (queso [késo], quién [kién]). Este mismo fonema se representa, en el resto de posiciones, con la letra c (canguro [kangúro], corto [kórto], cuenta [kuénta], acné [akné], tictac [tikták]), aunque en préstamos de otras lenguas también puede aparecer representado por la letra k en cualquier posición (karaoke [karaoke], kilo [kílo], koala [koála], kurdo [kúrdo], búnker [búnker], anorak [anorak]).

        `,
        "options": [
            "Metalingüística",
            "Apelativa",
            "Estética",
            "Fática"
        ],
        "correct": "Metalingüística",
        "subject": "Lenguaje",
        "id": "010",
        "flag": false
    },
    {
        "question": `
        Elija los términos considerados como extranjerismos. <br/>

        `,
        "options": [
            "Metalingüística",
            "Apelativa",
            "Estética",
            "Fática"
        ],
        "correct": "Metalingüística",
        "subject": "Lenguaje",
        "id": "011",
        "flag": false
    },
    {
        "question": `
        Elija los términos considerados como extranjerismos. <br/>
        1. Argot <br/>
        2. Dialecto <br/>
        3. Amateur <br/>
        4. Banal <br/>
        5. Trivial
        `,
        "options": [
            "1, 2, 5",
            "1, 3, 4",
            "2, 3, 5",
            "3, 4, 5"
        ],
        "correct": "1, 3, 4",
        "subject": "Lenguaje",
        "id": "012",
        "flag": false
    },
    {
        "question": `Identifique el complemento circunstancial marcado entre comillas.<br/><br/>
        Los países han sido clasificados por sus velocidades de conexión a internet "en la región de Asia" para finalizar la investigación.
        `,
        "options": [
            "De cantidad",
            "De lugar",
            "De tiempo",
            "De modo"
        ],
        "correct": "De lugar",
        "subject": "Lenguaje",
        "id": "013",
        "flag": false
    }
    ,
    {
        "question": `Elija los términos considerados como extranjerismos.<br/><br/>
        1. Variedad <br/>
        2. Debut <br/>
        3. Unidad <br/>
        4. Dossier <br/>
        5. Glamour <br/>
        `,
        "options": [
            "1, 2, 4",
            "1, 3, 5",
            "2, 3, 4",
            "2, 4, 5"
        ],
        "correct": "2, 4, 5",
        "subject": "Lenguaje",
        "id": "014",
        "flag": false
    },
    {
        "question": `Seleccione las palabras formadas con prefijos.<br/><br/>
        1. Árbol <br/>
        2. Intercolegial <br/>
        3. Botella <br/>
        4. Extraterrestre <br/>
        5. Forense <br/>
        6. Impuntual
        `,
        "options": [
            "1, 3, 5",
            "1, 4, 6",
            "2, 3, 5",
            "2, 4, 6"
        ],
        "correct": "2, 3, 5",
        "subject": "Lenguaje",
        "id": "015",
        "flag": false
    },
    {
        "question": `Identifique la aposición en la oración.<br/><br/>
        El majestuoso monte Everest, la elevación más alta del mundo, se encuentra situado entre China y Nepal.
        `,
        "options": [
            "Situado entre China y NepalSituado entre China y Nepal",
            "El majestuoso monte Everest ",
            "La elevación más alta del mundo",
            "Se encuentra"
        ],
        "correct": "La elevación más alta del mundo",
        "subject": "Lenguaje",
        "id": "016",
        "flag": false
    },
    {
        "question": `Con base en la oración, identifique el elemento sintáctico marcado entre comillas.<br/><br/>
        La obra Los que se van, "novela insigne del Grupo de Guayaquil", se caracterizó por el uso del lenguaje coloquial.
        `,
        "options": [
            "Construcción comparativa ",
            "Aposición",
            "Modificador indirecto ",
            "Modificador directo"
        ],
        "correct": "Aposición",
        "subject": "Lenguaje",
        "id": "017",
        "flag": false
    },
    {
        "question": `Con base en la oración, identifique la función sintáctica del elemento marcado entre comillas.<br/><br/>
        Javier respondió "enfadado" a las demandas que sus compañeros le hicieron en el trabajo.
        `,
        "options": [
            "Complemento directo ",
            "Núcleo del predicado ",
            "Complemento agente",
            "Complemento predicativo"
        ],
        "correct": "Complemento predicativo",
        "subject": "Lenguaje",
        "id": "018",
        "flag": false
    },
    {
        "question": `Con base en la oración, identifique el tipo de complemento circunstancial del sintagma entre "comillas".<br/><br/>
        El día jueves, las actividades fueron suspendidas en la fábrica "por un conato de incendio".
        `,
        "options": [
            "De lugar",
            "De modo",
            "De finalidad",
            "De causa"
        ],
        "correct": "De causa",
        "subject": "Lenguaje",
        "id": "019",
        "flag": false
    },
    {
        "question": `Identifique el enunciado que utiliza correctamente las mayúsculas.`,
        "options": [
            "La UNICEF es un programa de la Onu.",
            "Los hinchas apoyaron a su equipo. ellos perdieron ayer.",
            "El Polo Norte es opuesto al Polo sur.",
            "Da Vinci dijo: “La sabiduría es hija de la experiencia”."
        ],
        "correct": "Da Vinci dijo: “La sabiduría es hija de la experiencia”.",
        "subject": "Lenguaje",
        "id": "020",
        "flag": false
    },
    {
        "question": `Identifique el par de palabras que en el contexto de la lectura manifiestan una relación de homografía.<br/><br/>
        Les sirvieron una copa de buen licor cuando llegaron a la casa del célebre músico. Mientras él abría la puerta, los jóvenes se encontraban hablando de la primera obra que el artista habría publicado en otro país según los rumores de la prensa. En el fondo brillaba una escopeta de caza que despertó la admiración de los visitantes, luego, el más travieso de ellos se puso un polvoriento sombrero de copa que halló colgado de un pequeño clavo junto al umbral de la puerta por donde entraron. Finalmente el anfitrión ablandó su carácter y empezó a dar su testimonio.
        `,
        "options": [
            "Abría y habría ",
            "Copa y copa ",
            "Hablando y ablandó ",
            "Casa y caza"
        ],
        "correct": "Abría y habría ",
        "subject": "Lenguaje",
        "id": "021",
        "flag": false
    },
    {
        "question": `Seleccione los enunciados que utilizan correctamente la coma.<br/><br/>
        1. El amor, la lealtad, el respeto y la solidaridad son elementos necesarios para construir una sociedad justa. <br/>
        2. Francisco de Asís el santo italiano, fue canonizado por la iglesia en la Edad Media. <br/>
        3. Frantz Fanon, gran escritor francés, apoyó la lucha argelina por la independencia. 
        4. La Pinta la Niña y, la Santa María acompañaron a Cristóbal Colón en el trayecto de exploración a la India. <br/>
        5. Mónica, quiero que entregues tus trabajos de fin de semestre el próximo miércoles.
        `,
        "options": [
            "1, 2, 4",
            "1, 3, 5",
            "2, 4, 5",
            "3, 4, 5"
        ],
        "correct": "1, 3, 5",
        "subject": "Lenguaje",
        "id": "022",
        "flag": false
    },
    {
        "question": `Seleccione los enunciados que utilizan correctamente los dos puntos.<br/><br/>
        1. Gandhi dijo: “La violencia es el miedo a los ideales de los demás”.<br/>
        2. Todos los días: llega tarde. Pues bien, hoy no es la excepción. <br/>
        3. Gandhi: dijo la violencia es el miedo a los ideales de los demás. <br/>
        4. Todos los días llega tarde. Pues bien: hoy no es la excepción<br/>
        `,
        "options": [
            "1, 2",
            "1, 4",
            "2, 3",
            "3, 4"
        ],
        "correct": "2, 3",
        "subject": "Lenguaje",
        "id": "023",
        "flag": false
    },
    {
        "question": `Relacione la función del lenguaje con su ejemplo.<br/><br/>
        1. Emotiva <br/>
        2. Estética <br/>
        3. Apelativa <br/><br/>

        a) Hijo saluda, por favor<br/>
        b) Tus ojos cual luceros los veo brillar<br/>
        c) ¡Qué susto tan horrible!<br/>
        `,
        "options": [
            "1a, 2b, 3c",
            "1b, 2c, 3a",
            "1c, 2a, 3b ",
            "1c, 2b, 3a"
        ],
        "correct": "1c, 2b, 3a",
        "subject": "Lenguaje",
        "id": "024",
        "flag": false
    },
    {
        "question": `Complete la secuencia: 1a, 4c, 7e, 10g, ____, 16k`,
        "options": [
            "12i",
            "12h",
            "13h",
            "13i"
        ],
        "correct": "13i",
        "subject": "Matemáticas",
        "id": "025",
        "flag": false
    },
    {
        "question": `La suma de la tercera parte y la cuarta parte de un número equivale al duplo del número disminuido en 17. Halle el número.`,
        "options": [
            "12",
            "13",
            "14",
            "15"
        ],
        "correct": "12",
        "subject": "Matemáticas",
        "id": "026",
        "flag": false
    },
    {
        "question": `Complete el valor que falta en la secuencia: 1, 3, 7, 13, ___,31, 43`,
        "options": [
            "19",
            "20",
            "21",
            "24"
        ],
        "correct": "21",
        "subject": "Matemáticas",
        "id": "027",
        "flag": false
    },
    {
        "question": `Si 10 artículos cuestan $p, ¿cuántos artículos se pueden comprar con $x?`,
        "options": [
            "10p/x",
            "10/px",
            "px/10",
            "10x/p"
        ],
        "correct": "10x/p",
        "subject": "Matemáticas",
        "id": "028",
        "flag": false
    },
    {
        "question": `De un grupo de 36 estudiantes de tercero de bachillerato, los 2/9 de los estudiantes reprobaron el examen
        final. ¿Cuántos estudiantes aprobaron dicho examen final?`,
        "options": [
            "18",
            "10",
            "24",
            "28"
        ],
        "correct": "28",
        "subject": "Matemáticas",
        "id": "029",
        "flag": false
    },
    {
        "question": `Al factorizar 6x²+7x-5, se obtiene:`,
        "options": [
            "(2x-1)(3x+5)",
            "(2x+1)(3x-5)",
            "(x+1)(6x-5)",
            "(6x-1)(x-3)"
        ],
        "correct": "(2x-1)(3x+5)",
        "subject": "Matemáticas",
        "id": "030",
        "flag": false
    },
    {
        "question": `Un sastre tiene un corte de tela de 12 m de largo. Si cada día corta 2 m, ¿en cuántos días terminará de
        cortar la pieza?`,
        "options": [
            "8 días",
            "7 días",
            "6 días",
            "5 días"
        ],
        "correct": "5 días",
        "subject": "Matemáticas",
        "id": "031",
        "flag": false
    },
    {
        "question": `Dos amigos arriendan un local para realizar un evento. Si no uno de ellos paga USD 6000, que equivale a
        5/11 del valor total. ¿Cuánto debe pagar el otro?`,
        "options": [
            "4800",
            "7200",
            "8400",
            "9600"
        ],
        "correct": "7200",
        "subject": "Matemáticas",
        "id": "032",
        "flag": false
    },
    {
        "question": `En una canasta con 36 bolas entre rojas y amarillas, hay 6 bolas rojas más que amarillas, ¿Cuántas bolas
        rojas hay en la canasta?`,
        "options": [
            "21",
            "15",
            "18",
            "30"
        ],
        "correct": "21",
        "subject": "Matemáticas",
        "id": "033",
        "flag": false
    },
    {
        "question": `Complete la serie: 0,2; 1; 1,8; ____; 3,4; _____; 5`,
        "options": [
            "2,0; 4,2",
            "2,6; 4,0",
            "2,6; 4,2",
            "4,2; 2,6"
        ],
        "correct": "2,6; 4,2",
        "subject": "Matemáticas",
        "id": "034",
        "flag": false
    },
    {
        "question": `Un tanque tiene una capacidad de 5/2 m², expresa esta cantidad en cm²`,
        "options": [
            "250",
            "25000",
            "2500000",
            "25000000"
        ],
        "correct": "25000",
        "subject": "Matemáticas",
        "id": "035",
        "flag": false
    },
    {
        "question": `La menor de las fracciones es:`,
        "options": [
            "3/5",
            "5/8",
            "3/4",
            "2/3"
        ],
        "correct": "2/3",
        "subject": "Matemáticas",
        "id": "036",
        "flag": false
    },
    {
        "question": `Determine los términos que completan la sucesión: 4096, -1024, 256, ___, ____, -4, 1`,
        "options": [
            "32, 8",
            "-64, 16",
            "48, -8",
            "32, 16"
        ],
        "correct": "-64, 16",
        "subject": "Matemáticas",
        "id": "037",
        "flag": false
    },
    {
        "question": `¿Qué porcentaje de descuento se ha aplicado a una laptop que costaba 500 euros y por el que se han
        pagado 325 euros?`,
        "options": [
            "35%",
            "25%",
            "15%",
            "17.5%"
        ],
        "correct": "35%",
        "subject": "Matemáticas",
        "id": "038",
        "flag": false
    },
    {
        "question": `En un grupo de 30 personas hay 8 personas que tienen camiseta azul, 10 camiseta roja, 6 camiseta negra
        y el resto tienen camiseta blanca. ¿Cuál es la probabilidad de elegir a una persona con camiseta blanca?`,
        "options": [
            "1/10",
            "3/10",
            "2/5",
            "1/5"
        ],
        "correct": "1/5",
        "subject": "Matemáticas",
        "id": "039",
        "flag": false
    },
    {
        "question": `En la final del concurso nacional de matemáticas han clasificado 10 colegios. De cuantas maneras se
        pueden repartir los premios a los tres primeros colegios, si los premios son diferentes.`,
        "options": [
            "120",
            "720",
            "30",
            "560"
        ],
        "correct": "120",
        "subject": "Matemáticas",
        "id": "040",
        "flag": false
    },
    {
        "question": `Si el duplo de un número se le resta la mitad el resultado es 54 ¿cuál es el número?`,
        "options": [
            "18",
            "36",
            "27",
            "21"
        ],
        "correct": "27",
        "subject": "Matemáticas",
        "id": "041",
        "flag": false
    },
    {
        "question": `¿De cuantas maneras puede sentarse Juan y sus cuatro amigos alrededor de una mesa redonda?`,
        "options": [
            "120",
            "105",
            "24",
            "60"
        ],
        "correct": "120",
        "subject": "Matemáticas",
        "id": "042",
        "flag": false
    },
    {
        "question": `Una obra puede ser realizada por 40 obreros en 28 días. El número de obreros que se requiere aumentar
        para que la obra se termine en 16 es:`,
        "options": [
            "11",
            "23",
            "30",
            "70"
        ],
        "correct": "30",
        "subject": "Matemáticas",
        "id": "043",
        "flag": false
    }
];


const container = document.querySelector('._contq');
let idButtonPrevious = "";

let active = "link1";
const link = document.querySelector(`#${active}`);
link.classList.add("active");

const navigate = (id, num) => {
    console.log("Navigate: ", id, num);
    if (id === active) {
        return;
    }
    const linkPrev = document.querySelector(`#${active}`);
    const link = document.querySelector(`#${id}`);
    active = id;
    linkPrev.classList.remove("active");
    link.classList.add("active");
    const top = document.querySelector(".top-page");
    top.scrollIntoView({ behavior: "smooth" });
    loadQ(num);
}

const partials = getRandoms(43);



function getRandoms(size) {
    const numbers = [];
    for (let index = 0; index < size; index++) {
        let number = getRandomArbitrary(0, 43);;
        while (numbers.includes(number)) {
            number = getRandomArbitrary(0, 43);
        }
        numbers.push(number)
    }
    return numbers;
}

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

let questionsCurrent = []

function loadQ(link) {
    for (const question of questionsCurrent) {
        question.flag = false;
    }

    let from = 0;
    let to = 0;
    if (link === 9) {
        from = 42;
        to = 40;
    } else {
        from = link * 5 - 1;
        to = link * 5 - 5;
    }

    questionsCurrent = [];
    for (let index = to; index <= from; index++) {
        questionsCurrent.push(questions[partials[index]]);
    }
    writeQuestions(questionsCurrent);

}

function writeQuestions(questions) {
    container.innerHTML = '';
    for (const question of questions) {
        container.innerHTML += `
        <div class="col-md-9 col-12 mx-auto">
        <div class="card mt-4">
        <div class="card-body">
        <div class="row">
            <div class="col-6">
                <h5 class="card-title text-dark">${question.subject}</h5>
            </div>
            <div id="msg${question.id}" class="col-6">
                
            </div>
      </div>
    
          <p class="card-text text-justify text-dark">${question.question}</p>
          <div class="row">
            <div class="col-6 my-1">
              <button style="white-space: unset" id="btn1_${question.id}" type="button" class="btn btn-light w-100 text-justify" onclick="checkResponse('${question.id}','${question.options[0]}','btn1_${question.id}')">
                ${question.options[0]}
              </button>
            </div>
            <div class="col-6 my-1">
            <button style="white-space: unset" id="btn2_${question.id}" type="button" class="btn btn-light w-100 text-justify" onclick="checkResponse('${question.id}','${question.options[1]}','btn2_${question.id}')">
            ${question.options[1]}
          </button>
            </div>
    
            <div class="col-6 my-1">
            <button style="white-space: unset" id="btn3_${question.id}" type="button" class="btn btn-light w-100 text-justify" onclick="checkResponse('${question.id}','${question.options[2]}','btn3_${question.id}')">
            ${question.options[2]}
            </button>
            </div>
            <div class="col-6 my-1">
              <button style="white-space: unset" id="btn4_${question.id}" type="button" class="btn btn-light w-100 text-justify" onclick="checkResponse('${question.id}','${question.options[3]}','btn4_${question.id}')">
                ${question.options[3]}
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
        `
    }
}

const checkResponse = (id, value, idbutton) => {

    const qR = questionsCurrent.find((question) => question.id === id);

    if (qR.flag) {
        return;
    }

    const btnResponse = document.querySelector(`#${idbutton}`);
    let flag = false;
    let msg = ""
    if (qR.correct.toString() === value) {
        btnResponse.className = "btn btn-success text-light w-100 text-justify"
        msg = `<h5 class="card-title text-success text-right animate__animated animate__bounceInLeft"><strong>CORRECTO</strong></h5>`;
        flag = true;
    } else {
        btnResponse.className = "btn btn-danger w-100 text-light text-justify"
        msg = `<h5 class="card-title text-danger text-right animate__animated animate__bounceInLeft"><strong>INCORRECTO</strong></h5>`;
    }



    if (!qR.flag) {
        const msgCont = document.querySelector(`#msg${id}`);
        if (idButtonPrevious !== "") {
            const btnPrev = document.querySelector(`#${idButtonPrevious}`);
            btnPrev.className = "btn btn-light w-100 text-justify";

        }
        msgCont.innerHTML = "";
        msgCont.innerHTML = msg;
        qR.flag = flag;
        if (flag) {
            idButtonPrevious = "";
            return;
        }
        idButtonPrevious = idbutton;
    }
}


loadQ(1);