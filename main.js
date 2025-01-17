// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Error is hidden by hardCoding it into the index.html file

// Make the EMPTY_HEART into a FULL_HEART
// function clickHandler() {

// }

// // Creat the Click action
// function createClick() {
//   // Find the element that we need to add the 'click' event to
//   const hearts = document.getElementsById('#like-glyph')
//   // Add the eventListener to the variable(the "empty hearts")
//   hearts.addEventListener('click', clickHandler)
// }

function handleClick() {
  mimicServerCall()
  .then(() => {
    const hearts = Array.from(document.getElementsByClassName('like-glyph'));
  //  hearts.forEach((heart) => heart.innerText = FULL_HEART)
  for(heart of hearts){
    console.log(heart)
  }
    })
  .catch((error) => {
    const errorModal = document.getElementById('modal');
    errorModal.classList.remove('hidden');
    p = document.getElementById('modal-message')
    p.innerText = error
    setTimeout(() => {
      errorModal.className = 'hidden'
     
    }, 3000)
  })
}
 

function createClick(){
  const hearts = Array.from(document.getElementsByClassName('like-glyph'));
  
  hearts.forEach((heart) => heart.addEventListener('click', handleClick))
}

createClick();

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
