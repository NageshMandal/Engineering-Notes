// const mike_btn = document.querySelector('#mike-button')
window.addEventListener('DOMContentLoaded',()=>{
window.SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition


const recognition= new SpeechRecognition()

recognition.addEventListener('result',(e)=>{
    let text = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

    console.log(typeof(text))

    text = text.toLowerCase()
    console.log(text)
    if(text.includes("open computer science")){
        window.location.replace('branch/cs.html');
    }
    if(text.includes("open ece") || text.includes("open electronics and communication")){ 
        window.location.replace('branch/ece.html');
    }
    if(text.includes("open ee") ||text.includes("open electrical engineering")){
        window.location.replace('branch/ee.html');
    }
    if(text.includes("open mechanical")){
        window.location.replace('branch/ME.html');
    }
    if(text.includes("open civil")){
        window.location.replace('branch/CE.html');
    }
})

const mike_btn = document.getElementById('mike-button')
mike_btn.addEventListener('click',()=>{
    recognition.start()
    console.log('started')
})
// mike_btn.addEventListener('click',()=>{
//     recognition.stop();
//     console.log('stopped')
// })
// mike_btn.addEventListener('click',()=>{
//     recognition.abort();
//     console.log('aborted')
// })

// Get the message element to display the text messages
const messageElement = document.getElementById('message');

// Flag to track if recording is in progress
let isRecording = false;

// Event listener for hovering over the Voice Mic
mike_btn.addEventListener('mouseover', function() {
  messageElement.innerText = 'Click One Time & Start Recording.';
});
mike_btn.addEventListener('click', function() {
    if (!isRecording) {
      messageElement.innerText = 'Start Recording & Tell Me User Name.';
      // Start recording logic here
      isRecording = true;
    } else {
      messageElement.innerText = 'Recording Finished.';
      // Stop recording logic here
      isRecording = false;
    }
  });
});
