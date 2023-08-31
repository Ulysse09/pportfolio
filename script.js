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