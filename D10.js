/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Domenico",
  surname: "Cicero",
  age: 26,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["java", "javascript"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("php");

/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {
  const numRandom = Math.floor(Math.random() * 6 + 1);
  return numRandom;
};

// console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    const min = Math.min(num1, num2);
    return min;
  } else {
    console.log("uno o entrambi i parametri inseriti non sono numeri");
  }
};

// console.log(whoIsBigger(10, 7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = str => {
  if (typeof str === "string") {
    const arrayWords = str.split(" ");
    const finalArrayWords = [];
    for (let i = 0; i < arrayWords.length; i++) {
      const firstLetter = arrayWords[i].charAt(0).toUpperCase();
      const restLetter = arrayWords[i].slice(1);
      const finalWord = firstLetter + restLetter;
      finalArrayWords.push(finalWord);
    }
    return finalArrayWords;
  } else {
    console.log("il parametro inserito non è una stringa");
  }
};

// console.log(splitMe("ciao mi chiamo domenico"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (str, boolean) => {
  if (typeof str === "string" && typeof boolean === "boolean") {
    if (boolean === true) {
      const strWithoutFirstLetter = str.substring(1);
      return strWithoutFirstLetter;
    } else {
      const strWithoutLastLetter = str.substring(0, str.length - 1);
      return strWithoutLastLetter;
    }
  } else if (typeof str !== "string" && typeof boolean !== "boolean") {
    console.log("il primo parametro passato alla funzione non è una stringa e il secondo non è un valore booleano");
  } else if (typeof boolean !== "boolean") {
    console.log("il secondo parametro passato alla funzione non è un valore Booleano");
  } else {
    console.log("il primo parametro passato alla funzione non è una stringa");
  }
};

// console.log(deleteOne("domenico", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = str => {
  if (typeof str === "string") {
    const arrayLetters = str.split("");
    let arrayFinal = [];
    for (let i = 0; i < arrayLetters.length; i++) {
      let letterParse = parseInt(arrayLetters[i]);
      if (isNaN(letterParse)) {
        arrayFinal.push(arrayLetters[i]);
      } else {
        delete arrayLetters[i];
      }
    }
    const strClean = arrayFinal.join("");
    return strClean;
  } else {
    console.log("il parametro passato alla funzione non è una stringa");
  }
};

// console.log(onlyLetters("dom8enico8"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = str => {
  if (typeof str === "string") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(str)) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("il parametro passato alla funzione non è una stringa");
  }
};

// console.log(isThisAnEmail("domenico@libero.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const now = new Date();
  const dayOfWeekNumber = now.getDay();
  switch (dayOfWeekNumber) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
  }
};

// console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = num => {
  if (typeof num === "number") {
    const arrValues = [];
    for (let i = 0; i < num; i++) {
      const numRandom = dice();
      arrValues.push(numRandom);
    }

    let totalSum = 0;
    for (let i = 0; i < arrValues.length; i++) {
      totalSum += arrValues[i];
    }

    const obj = {
      sum: totalSum,
      values: arrValues,
    };

    return obj;
  } else {
    console.log("il parametro passato alla funzione non è un numero");
  }
};

// console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = data => {
  const now = new Date();

  const dataMillis = data.getTime();
  const nowMillis = now.getTime();

  const differenceMillis = nowMillis - dataMillis;

  const differenceDay = Math.floor(differenceMillis / (1000 * 60 * 60 * 24));

  return differenceDay;
};

// const dataValida = new Date(1997, 11, 31);
// console.log(dataValida);
// console.log(howManyDays(dataValida));

/* ESERCIZIO 10
Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = data => {
  const now = new Date();
  const nowDay = now.getDay();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();

  const dataDay = data.getDay();
  const dataMonth = data.getMonth();
  const dataYear = data.getFullYear();

  if (nowDay === dataDay && nowMonth === dataMonth && nowYear === dataYear) {
    return true;
  } else {
    return false;
  }
};

// const dataValida2 = new Date(2024, 1, 2);
// console.log(dataValida2);
// console.log(isTodayMyBirthday(dataValida2));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (obj, str) => {
  if (typeof obj === "object" && typeof str === "string") {
    delete obj[str];
    return obj;
  } else if (typeof obj === "object") {
    console.log("il primo parametro passato alla funzione non è un oggetto");
  } else if (typeof str === "string") {
    console.log("il secondo parametro passato alla funzione non è una stringa");
  } else {
    console.log("il primo parametro passato alla funzione non è un oggetto e il secondo non è una stringa");
  }
};

const object = {
  name: "domenico",
  surname: "cicero",
};

// console.log(deleteProp(object, "name"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
let movie = movies[0];
const newestMovie = () => {
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(movie.Year)) {
      movie = movies[i];
    }
  }
  return movie;
};

// console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = () => {
  return movies.length;
};

// console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = () => {
  const arrayYears = [];
  for (let i = 0; i < movies.length; i++) {
    arrayYears.push(movies[i].Year);
  }
  return arrayYears;
};

// console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = () => {
  const newArr = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) < 2000) {
      newArr.push(movies[i]);
    }
  }
  return newArr;
};

// console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
let total = 0;
const sumAllTheYears = () => {
  for (let i = 0; i < movies.length; i++) {
    total += parseInt(movies[i].Year);
  }
  return total;
};

// console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = str => {
  if (typeof str === "string") {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].Title === str) {
        return movies[i];
      }
    }
  } else {
    console.log("il parametro passato alla funzione non è una stringa");
  }
};

// console.log(searchByTitle("The Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = str => {
  if (typeof str === "string") {
    let obj = {
      match: [],
      unmatch: [],
    };

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].Title.includes(str)) {
        obj.match.push(movies[i]);
      } else {
        obj.unmatch.push(movies[i]);
      }
    }
    return obj;
  } else {
    console.log("il parametro passato alla funzione non è una stringa");
  }
};

// console.log(searchAndDivide("ord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = num => {
  if (typeof num === "number") {
    if (num < movies.length && num >= 0) {
      movies.splice(num, 1);
      return movies;
    } else {
      console.log("il numero passato come parametro è maggiore della lunghezza dell'array oppure è minore di zero");
    }
  } else {
    console.log("il parametro passato alla funzione non è un numero");
  }
};

// console.log(removeIndex(13));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const container = document.createElement("div");
container.id = "container";
const body = document.querySelector("body");
body.appendChild(container);

const selectedContainer = () => {
  const container = document.getElementById("container");
  return container;
};

// console.log(selectedContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectedAllTd = () => {
  const allTd = document.querySelectorAll("td");
  return allTd;
};

// console.log(selectedAllTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const readAllTd = () => {
  const allTd = document.querySelectorAll("td");
  for (let i = 0; i < allTd.length; i++) {
    const textTd = allTd[i].innerText;
    console.log(textTd);
  }
};

// readAllTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const link = document.createElement("a");
link.innerText = "questo è un link";
link.href = "#";
body.appendChild(link);

const printLink = () => {
  const allLink = document.querySelectorAll("a");
  for (let i = 0; i < allLink.length; i++) {
    allLink[i].style = "background-color: red";
  }
};

// printLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const ol = document.createElement("ol");
ol.id = "myList";
body.appendChild(ol);

const addListElement = () => {
  const listElement = document.createElement("li");
  listElement.innerText = "sono un nuovo li della ol";
  ol.appendChild(listElement);
};

// addListElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const removeLiInOl = () => {
  const lis = document.querySelectorAll("#myList li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].remove();
  }
};

// removeLiInOl();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassTr = () => {
  const trs = document.querySelectorAll("tr");
  for (let i = 0; i < trs.length; i++) {
    trs[i].className = "test";
  }
};

// addClassTr();
// const trs = document.querySelectorAll("tr");
// console.log(trs);

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = num => {
  if (typeof num === "number") {
    for (let i = 0; i <= num; i++) {
      let riga = " ";
      for (let j = 1; j <= i; j++) {
        riga += "*";
      }
      console.log(riga);
    }
  } else {
    console.log("il numero passato come parametro della funzione non è un numero");
  }
};

// halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = num => {
  for (let i = 1; i <= num; i++) {
    let spazio = " ".repeat(num - i);
    let asterisco = "*".repeat(2 * i - 1);
    const riga = spazio + asterisco;
    console.log(riga);
  }
};

// tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = num => {
  if (typeof num === "number") {
    if (num > 1) {
      if (num > 3) {
        let x = 0;
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            x = i;
          }
        }
        if (x === 0) {
          console.log(`il numero ${num} è un numero primo`);
        } else {
          console.log(`il numero ${num} NON è un numero primo`);
        }
      } else {
        if (num === 2) {
          console.log("il numero 2 non è un numero primo");
        } else {
          console.log("il numero 3 è un numero primo");
        }
      }
    } else {
      console.log("il numero 1 e qualsiasi numero minore ad 1 non sono numeri primi");
    }
  } else {
    console.log("il numero passato come parametro della funzione non è un numero");
  }
};

// isItPrime(67);
