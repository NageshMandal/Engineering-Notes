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
    if(text.includes("Explore Now")){
        window.location.replace('https://www.chaibasaengg.edu.in/');
    }
    if(text.includes("Open Computer Science Sem one 1")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/1st/cse.html');
    }
    if(text.includes("Open Computer Science Sem two 2")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/2nd/cse.html');
    }
    if(text.includes("Open Computer Science Sem three 3")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/3rd/cse.html');
    }
    if(text.includes("Open Computer Science Sem four 4")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/4th/cse.html');
    }
    if(text.includes("Open Computer Science Sem five 5")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/5th/cse.html');
    }
    if(text.includes("Open Computer Science Sem six 6")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/6th/cse.html');
    }
    if(text.includes("Open Computer Science Sem seven 7")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/7th/cse.html');
    }
    if(text.includes("Open Computer Science Sem eight 8")){
        window.location.replace('https://code-engineering.netlify.app/branch/subjects/8th/cse.html');
    }
    if(text.includes("About College")){
        window.location.replace('https://www.chaibasaengg.edu.in/About/about');
    }
    if(text.includes("Open gallery")){
        window.location.replace('https://www.chaibasaengg.edu.in/Gallery/gallery');
    }
    if(text.includes("Show Projects ")){
        window.location.replace('https://www.chaibasaengg.edu.in/Research/projects');
    }
    if(text.includes("Library")){
        window.location.replace('https://www.chaibasaengg.edu.in/Academic/library');
    }
    if(text.includes("Contact")){
        window.location.replace('https://www.chaibasaengg.edu.in/Contact/admission_cell');
    }
})


mike_btn.addEventListener('click',()=>{
    recognition.start()
    console.log('started')
})