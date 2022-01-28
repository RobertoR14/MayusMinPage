let inp1 = document.querySelector('.inp-1');
let inp2 = document.querySelector('.inp-2');

let btnSwitch = document.querySelector('#switch');
let body = document.body;



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

function Capitalize(){
  inp2.innerHTML = newText[0].toUpperCase() + newText.substring(1);
}

//DARKMODE CODE

btnSwitch.addEventListener('click', () => {
  let darkMode = body.classList.toggle('dark');

  btnSwitch.classList.toggle('active');

  localStorage.setItem('switch', darkMode)
});

let d = localStorage.getItem('switch');

 if(d == 'true'){
  body.classList.add('dark');
  btnSwitch.classList.add('active');
} else {
  body.classList.remove('dark');
  btnSwitch.classList.remove('active');
} 
