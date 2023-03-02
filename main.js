let textArea = document.getElementById("text"),
  words = document.getElementById("words"),
  letters = document.getElementById("letters"),
  sentences = document.getElementById("sentences"),
  button = document.getElementById('button');

function letterCounter() {
  let arr = textArea.value.split("");
  let arr2 = arr.filter((elem) => {
    return elem !== " " && elem !== ',' && elem !== '.' && elem !== '/' && elem !== ';' && elem !== ':' && elem !== '+' && elem !== '-' && elem !== '=' && elem !== '*';
  });

  return arr2.length;
}

function wordCounter() {
  let arr = textArea.value.split(" ");
  let arr2 = arr.filter((elem) => {
    return elem !== "";
  });

  return arr2.length;
}

function sentenceCounter() {
  let arr = textArea.value.split(".");
  let arr2 = arr.filter((elem) => {
    return elem !== " " && elem !== "";
  });

   return arr2.length;
}

textArea.addEventListener("keyup", () => {
  words.innerHTML = wordCounter();
  letters.innerHTML = letterCounter();
  sentences.innerHTML = sentenceCounter();
});

button.addEventListener('click', ()=>{

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background='#' + randomColor;
} )