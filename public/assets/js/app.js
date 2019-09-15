const button =  document.querySelector('form button');
button.addEventListener('click',(event)=>{
    const input = document.querySelector('input');
    spartan(input);
});

const spartan = async (input) => {
    try{
        await fetch('https://mytodox.herokuapp.com/', {
            method: 'POST',
            body: input.value
        });
    }catch(err){
        console.log(`Sending Error Occurred : ${err}`);
    }
}

const list = document.querySelectorAll('li');
list.forEach((elem)=>{
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        trojan(elem).then(()=>{
            elem.remove();
        });
    });
});

const trojan = async (input) => {
    try {
        await fetch(`https://mytodox.herokuapp.com/${input.innerText}`, {
            method: 'DELETE',
            body: input.innerText
        });
    } catch (err) {
        console.log(`Sending Error Occurred : ${err}`);
    }
}