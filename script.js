// EKSEMPEL PÅ KODE VI GÅR IGJENNOM
/*
IKKE COPY/PASTE, SKRIV SELV ;)

//VARIABLER

const = noe som er konstant, ikke skal endres
let = noe som kan endres

//DATATYPER

number = tall
string = tekst
boolean = sant eller usant

array = liste 
object = lagrer forskjellig data, hver bit har et navn med en verdi, f.eks farge: "rød"

array og object er noe vi kommer tilbake til, trengs ikke å læres nå ;)

undefined = ingenting er her
null = jeg har bestemt at denne skal være tom

undefined og null er som regel tegn på en error i koden, noe er feil


//FUNKSJON//

function yourFunctionName(bokser for verdier, det kalles arguments){
    
    skriv koden her

    return eller console.log()
}

yourFunctionName(verdier, det kalles parametres)


//KOBLE TIL HTML

document.querySelection('#navnPåId')


//EVENTLISTENER

variabelNavn.addEventlistener("click", function{
    hva skal skje når man trykker
})

//IF ELSE STATEMENTS

if(){

} = sjekker om noe er sant eller usant

else{} = hvis ikke så skjer dette

=== betyr at noe er helt likt

!= skrives for å sjekke: "hvis ikke dette er likt"


//CLASSLIST

classList.add = legger til en class
classlist.remove = tar bort en class
classlist.toggle = skifter mellom å legge til og ta bort klassenavn

//OPPGAVER

 Oppgave1: 
 1.lag 3 variabler for en fruktbutikk,
 en variabel for butikkens navn, en variabel for antall epler i butikken, 
 og en variabel for om butikken er åpen eller ikke

 2. console.log variablene

 3. Hvilket variabel skal ha const?

 BONUS!

 4. lag en array eller et object som viser forskjellig typer frukt i butikken


 Oppgave2: 

 1.skriv en funksjon som console.log "Min første funksjon"
 2. skriv en funksjon som trekker fra 2 tall, f.eks 7-3,
  consol.log sum 

BONUS!

 3. skriv en funksjon hvor du bruker parametre og argumenter(se over om usikker),
    funksjonen skal sette sammen et fornavn og et etternavn, 
    skriv 2 variabler utenfor funksjonen som lagrer funksjonen med ulike verdier, 
    console.log variabel navnet


 Oppgave3:
 1.Lag en ny knapp i HTML og gi den en id
 2. Lag en variabel hvor du kobler til den nye knappen
 3. Lag en eventListener som console.log "knapp er trykket" når du trykker på den

 BONUS!

 4. Lag en animasjon i CSS som du skrur av og på med addEventlistener
 

*/

let appleStore = 'BabitaStore';
let numberOfapples = 50;
let itIsopen = true;

let nrMine = '12';
let nrYours = '13';

//Datatyper

//Number, String, Boloeon

const name = 'Anders';
let age = 38;
let isPresent = true;

let nrOne = '12';
let nrTwo = '12';

let sum = nrOne + nrTwo;

console.log(sum);

//Arrays, objects

let passengers = [
  'Ania Kubow',
  'Kevin Powell',
  'developedByEd',
  'Satori Graphics',
];

let flightInfo = {
  isDelayed: true,
  departure: {
    time: '09.15',
    airport: 'Flesland ',
    city: 'Bergen',
  },

  arrival: {
    time: '06.30',
    airport: 'JFK',
    city: 'New York',
  },
};

//Hvordan skrive en funksjon

function addNumber() {
  let numberOne = 4;
  let numberTwo = 3;

  let sum = numberOne + numberTwo;

  console.log(sum);
}

// Argumenter vs parametre

function minusNumbers(a, b) {
  let sum = a - b;

  return sum;
  console.log(sum)

    ;
}

let firstSum = minusNumbers(10, 2);
let secondSum = minusNumbers(8, 4);

console.log(firstSum);
console.log(secondSum);

// Hvordan hente inn ting vi skal gjøre noe med

// opgave 2

function myFirstfunction() {
  console.log('myFirstfunction');
}

myFirstfunction();

//oppgave 2.2 hvordan hente inn ting vi skal gjøre

const button = document.querySelector('#showBtn');
let text = document.querySelector('#text');
let toggle = document.querySelector('#toggleCont');
let toggleCircle = document.querySelector('#toggleCircle');

toggle.addEventListener("click", function()  {
  if (toggleCircle.classList.contains('move')){
    toggleCircle.classList.remove('move')
  toggleCircle.classList.add('moveback')
} else {

  toggleCircle.classList.remove('moveback')
  toggleCircle.classList.add('move')
}

}
)

button.addEventListener("click", function () {

  text.classList.toggle('showTextBox')
  text.classList.toggle('hiddenBox') 

  console.log('click is registered');
})
