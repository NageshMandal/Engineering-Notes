//! voice assistent

const texts = document.querySelector(".texts");

window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResult = true;

let p = document.createElement('p');

recognition.addEventListener('result',(e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'hi';
            texts.appendChild(p);
        }
        if(text.includes('open my YouTube channel')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening...';
            texts.appendChild(p);
            window.open('https: //www.youtube.com')
        }
        if(text.includes('open engineering notes website') || text.includes("engineering notes")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening...';
            texts.appendChild(p);
            window.open('https://nageshmandal.github.io/Engineering-Notes-Website/')
        }
        if(text.includes('open computer science branch')
            || text.includes("open CSE branch") || text.includes("open CS branch")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening...';
            texts.appendChild(p);
            window.open('https://nageshmandal.github.io/Engineering-Notes-Website/branch/cs.html')
        }
        if(text.includes('open ECE branch')
            || text.includes("open EC branch") || text.includes("open Electronics branch")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening...';
            texts.appendChild(p);
            window.open('https://nageshmandal.github.io/Engineering-Notes-Website/branch/ece.html')
        }
        if(text.includes('open EE branch')
            || text.includes("open electrical branch") || text.includes("open electrical engneering branch")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening...';
            texts.appendChild(p);
            window.open('https://nageshmandal.github.io/Engineering-Notes-Website/branch/ee.html')
        }
        if(text.includes('open mechanical branch')
            || text.includes("open ME branch") || text.includes("open mechanical engineering branch")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening...';
            texts.appendChild(p);
            window.open('https://nageshmandal.github.io/Engineering-Notes-Website/branch/ME.html')
        }
        if(text.includes('open civil branch')
            || text.includes("open civil engineering branch") || text.includes("open Sea branch")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening...';
            texts.appendChild(p);
            window.open('https://nageshmandal.github.io/Engineering-Notes-Website/branch/CE.html')
        }
        
        p = document.createElement('p');
    }

    console.log(texts);
})
recognition.addEventListener('end',()=>{
    recognition.start();
})
recognition.start();



