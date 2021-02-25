//dichiarazione e definizione variabili
var nome = prompt('Qual è il tuo nome?');
var cognome = prompt('Qual è il tuo cognome?');
var colore = prompt('Qual è il tuo colore preferito?');
var password = nome + cognome + colore;

//write line/print
document.writeln(password + '27'); //1 modo
document.writeln(nome + cognome + colore + '27'); //2 modo


//Chicca per generare numero random

//var numero = Math.floor(Math.random() * 100);
//document.writeln(password + numero);