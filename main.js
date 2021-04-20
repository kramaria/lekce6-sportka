// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:


let osudi = []
// console.log(osudi);

let tlacitko = document.querySelector('.tlacitko')
let vyherniCisla = document.querySelector('#vyherni-cisla');

function losuj() {
  vyherniCisla.innerHTML = []
  for (let i=1; i<=49; i=i+1 /*i+=1 i++ ++i */) {
    osudi.push(i);
  }
  // console.log(osudi);

  // z osudi vyberu 7 nahodnych cisiel

  let tazenaCisla = [];

  for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];

    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex,1);

    console.log(osudi);
    console.log(tazenaCisla);
  }

  // vypisu do html a nastavim casovac 2s pri losovani cisiel

  

  for (let i = 0; i < tazenaCisla.length; i++) {
    setTimeout(function () {
    vyherniCisla.innerHTML += '<span class ="cislo">' + tazenaCisla[i] + '</span>';
    
  }, i*2000)
  // zapisem vylosovane cisla do zoznamu
  
  }
  let historieHer = document.querySelector('#seznam'); 
  historieHer.innerHTML += tazenaCisla + '<br>';
}
