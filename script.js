//alert("Hola mundo <3");


let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
//Reconoces una acción porque tiene paréntesis después del nombre de lla acción
//A veces el operador tiene punto
typewriter
  .pauseFor(2500) //Milisegundos 2.5 segundos
  .typeString('Camila Jiménez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();

  let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});
//Reconoces una acción porque tiene paréntesis después del nombre de lla acción
//A veces el operador tiene punto
typewriterFrase
  .pauseFor(1000) //Milisegundos 1 segundos
  .typeString('"...Crea con pasión, vive con propósito"')
  .pauseFor(300)
  .start();