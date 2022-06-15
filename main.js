// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const simpleLiker = document.querySelectorAll(".like-glyph");

function likerCallback(e){
  const heart = e.target;
  mimicServerCall("bogusUrl")
  .then(function(){
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.ineerText = EMPTY_HEART;
      heart.className = "";

    }
  })
  .catch(function(error) {
    const modal =document.getElementById("modal");
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 30 );

  }
  );
}
for (const glyph of simpleLiker) {
  glyph.addEventListener("click",likerCallback);
}


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
