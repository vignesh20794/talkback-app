const btn =  document.querySelector('.talk');
const content = document.querySelector('.content');


const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = function(){
  console.log("voice actived !!! you can speck");
}


recognition.onresult = function(event){
  
  const current = event.resultIndex;
  const text = event.results[current][0].transcript;
  content.textContent = text;
  readOutLoud(text);
}


btn.addEventListener('click',() =>{
  recognition.start();  
});


function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.text = message;

  window.speechSynthesis.speak(speech);
}