const prompt = require ("prompt-sync")();
let fraseUser = prompt("Digite uma frase:"); 

// Imprimir o comprimento da frase
let comprimentoSemEspacos = fraseUser.replace(/\s/g, "").length;
console.log("Comprimento da frase:", comprimentoSemEspacos);

// Converter a frase para letras maiúsculas
let fraseMaiuscula = fraseUser.toUpperCase();
console.log("Frase em letras maiúsculas:", fraseMaiuscula);

// Dividir a frase em palavras e imprimir cada palavra
let palavras = fraseUser.split(" ");
console.log("Palavras da frase:");
palavras.forEach(palavra => console.log(palavra));