
const input=document.querySelector('#inputs')

const number=document.querySelector('.box')

const btn=document.querySelector('#btn')

btn.addEventListener('click',()=>{
    
    const value=input.value;

    const box=document.createElement('h2')

    if(value%5==0 && value%3==0){
        box.innerHTML='yes';

    }
    else{
        box.innerHTML='no'

    }
    number.appendChild(box)

    input.value=""

    setTimeout(() => {
        box.remove();
    }, 3000);
})

