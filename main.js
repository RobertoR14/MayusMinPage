let inp1 = document.querySelector('.inp-1');
let inp2 = document.querySelector('.inp-2');
let btnMayus = document.querySelector('.mayus');
let btnMin = document.querySelector('.min');

let newText;
inp1.addEventListener("keyup", (event) => {

  newText = event.target.value;

  inp2.innerHTML = newText.toUpperCase();

});


function ConvertMayus(){

  inp2.innerHTML = newText.toUpperCase(); 
}



function ConvertMin(){

  inp2.innerHTML = newText.toLowerCase();

}

