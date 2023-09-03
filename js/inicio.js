var mensaje = prompt("Hola! estas listo para una mision?\nEscribe tu nombre");

var titulo = document.getElementById('mensajeDos');

titulo.innerHTML = `
<h1>${mensaje}<h1/>
<p>el objetivo de esta mision es ir a la casa de Patricio y festejar con él su cumpleaños</p>
`;
