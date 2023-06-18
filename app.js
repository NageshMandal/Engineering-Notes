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

const syllabusSearch = document.getElementById('s-input');
const cards = document.querySelectorAll('.project-card');

syllabusSearch.addEventListener('input', function() {
  const searchTerm = this.value.trim().toLowerCase();
  searchProjects(searchTerm);
});

function searchProjects(searchTerm) {
  for (const card of cards) {
    const collegeName = card.querySelector('.project-card-title').textContent.trim().toLowerCase();
    const subjectName = card.querySelector('.project-card-author.s-subject').textContent.trim().toLowerCase();
  
    if (collegeName.includes(searchTerm) || subjectName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}
