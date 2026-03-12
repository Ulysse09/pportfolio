let btn = document.getElementById('menu-btn');
let nav = document.getElementById('menu');



btn.addEventListener('click', function(){
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden')
    console.log('yoo');
})


//form validation
let form = document.getElementById('form');
let btn1 = document.getElementById('btn1');
let name1 = document.getElementById('name1');
let email = document.getElementById('email');
let message = document.getElementById('message')
let emessage = document.getElementById('emess')

form.addEventListener('submit', (e) => {
    if(name1.value === "" || email.value === "" || message.value === ""){
        name1.classList.toggle('border-red-500');
        email.classList.toggle('border-red-500');
        message.classList.toggle('border-red-500');
        
        
        alert('Fill in the form correctly');
        
    }else{
        alert('Form successful');
        name1.classList.toggle('border-green-400');
        email.classList.toggle('border-green-400');
        message.classList.toggle('border-green-400');

    }
     
    e.preventDefault();
    console.log('biish');
    
})

 



// cursor-animation

const words = ['Optimized Sales Funnels. ','Pristine Product Pages.','Seamless Fintech intergrations.']
const staticText = 'I build ';
const el = document.getElementById('text')

let wordIndex = 0 
let charIndex = 0 
let isDeleting = false 
let firstPhase = true


function type() {
     
    let currentWord = words[wordIndex];


    
    if (firstPhase) {
        
        const fullText= staticText + currentWord;
        charIndex++;

        
        el.innerHTML = fullText.substring(0,charIndex) + `<span class="cursor">|</span>`
        
        if (charIndex === fullText.length) {
            setTimeout(()=>{
                firstPhase = false;
                isDeleting = true
                charIndex = currentWord.length
            },1000)
        }
        
        return setTimeout(type,160)
    }

    
    if (isDeleting) {
        charIndex--
    } else {
        charIndex++
        
    }

    

    const dynamicText = currentWord.substring(0,charIndex);
    el.innerHTML = staticText + dynamicText +`<span class="cursor">|</span>`

    if (!isDeleting && charIndex===currentWord.length) {
        setTimeout(()=>isDeleting = true,1000)
    }

    if (isDeleting &&charIndex===0){
        isDeleting =false;
        wordIndex = (wordIndex +1) % words.length;
    }
    setTimeout(type,isDeleting?55:160);
}

type()

// should a function be called after or befor listeners ??

// const btn_wa = document.getElementById("wa-btn");
//         btn_wa.addEventListener("click", () => {
//         plausible("whatsapp_click");
//         console.log("WhatsApp CTA clicked");
//         });
  
// Popup logic
const popup = document.getElementById("popup");
let shown = false;


window.addEventListener("scroll", () => {

  const scrollPosition = window.scrollY;

  if (scrollPosition > 550 && !shown) {
    popup.classList.remove("hidden");
    // popup.classList.add("animate-bounce"); 
      shown = true;
  }

});

// analytics logic

document.querySelectorAll('.whatsapp-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    
    console.log('Location :',btn.dataset.location)
    plausible('whatsapp_click', {
      props: {
        location: btn.dataset.location
      }
    });
  });
});
