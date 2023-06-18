const mike_btn = document.querySelector('#mike-button')
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


mike_btn.addEventListener('click',()=>{
    recognition.start()
    console.log('started')
})


// Get the input element
const searchInput = document.getElementById('s-input');

// Add an event listener for input changes
searchInput.addEventListener('input', function() {
  const searchTerm = this.value;
  searchProjects(searchTerm);
});

// The searchProjects function remains the same as before
function searchProjects(searchTerm) {
  const cards = document.querySelectorAll('.project-card');

  for (const card of cards) {
    const collegeName = card.querySelector('.project-card-title').textContent.trim();
    const subjectName = card.querySelector('.project-card-author').textContent.trim();

    if (collegeName.toLowerCase().includes(searchTerm.toLowerCase()) || subjectName.toLowerCase().includes(searchTerm.toLowerCase())) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}