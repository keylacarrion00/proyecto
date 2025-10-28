// Frases inspiradoras del Beato Domingo
const frases = [
  "“Haz de tu vida una oración constante al amor de Dios.”",
  "“Quien confía en Dios, nunca pierde la esperanza.”",
  "“La humildad es la puerta de la santidad.”",
  "“Servir con alegría es el mejor testimonio de fe.”",
  "“El amor vence el dolor cuando se ofrece a Dios.”"
];
document.getElementById("fraseDia").textContent =
  frases[Math.floor(Math.random() * frases.length)];

// Trivia
const preguntas = [
  { pregunta: "¿Dónde nació el Beato Domingo?", opciones: ["Italia", "España", "Francia"], respuesta: "España" },
  { pregunta: "¿A qué orden pertenecía?", opciones: ["Franciscanos", "Trinitarios", "Dominicos"], respuesta: "Trinitarios" },
  { pregunta: "¿En qué año fue beatificado?", opciones: ["1983", "1927", "1950"], respuesta: "1983" },
  { pregunta: "¿Qué virtud lo caracterizó?", opciones: ["Humildad", "Orgullo", "Ambición"], respuesta: "Humildad" },
  { pregunta: "¿Dónde falleció?", opciones: ["Roma", "Belmonte", "Madrid"], respuesta: "Belmonte" },
  { pregunta: "¿Qué ofreció a Dios en su enfermedad?", opciones: ["Su vida", "Su riqueza", "Su fama"], respuesta: "Su vida" }
];

let indice = 0;
let puntaje = 0;

const preguntaElem = document.getElementById("pregunta");
const opcionesElem = document.getElementById("opciones");
const btnSiguiente = document.getElementById("btnSiguiente");
const resultadoElem = document.getElementById("resultado");

function mostrarPregunta() {
  const actual = preguntas[indice];
  preguntaElem.textContent = actual.pregunta;
  opcionesElem.innerHTML = "";
  actual.opciones.forEach(opcion => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.onclick = () => verificarRespuesta(opcion);
    opcionesElem.appendChild(btn);
  });
}

function verificarRespuesta(opcion) {
  const correcta = preguntas[indice].respuesta;
  if (opcion === correcta) {
    puntaje++;
    resultadoElem.textContent = "✅ ¡Correcto!";
  } else {
    resultadoElem.textContent = "❌ Incorrecto. La respuesta era " + correcta + ".";
  }
}

btnSiguiente.onclick = () => {
  indice++;
  resultadoElem.textContent = "";
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    preguntaElem.textContent = "🎉 Trivia finalizada 🎉";
    opcionesElem.innerHTML = "";
    btnSiguiente.style.display = "none";
    resultadoElem.textContent = `Tu puntaje final es: ${puntaje}/${preguntas.length}`;
  }
};

mostrarPregunta();
