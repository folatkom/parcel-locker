const getParcel = document.querySelector('.getParcel');
const inputs = document.getElementById('inputs');
const alert = document.getElementById('alert');
const success = document.getElementById('success');
const nextParcel = document.getElementById('nextParcel');
const secsSum = document.getElementById('secsSum');
const successImg = document.getElementById('successImg');
let phone;
let code;
let isClicked = false;
const regexCode = /^\d{4}$/;
const regexPhone = /^(\d{9}|\d{3}[-\s]\d{2}[-\s]\d{2}[-\s]\d{2})$/;
let secs = -1;
let timer;

const secCounter = () => {
    secs += 1;
    timer = setTimeout(()=>secCounter(),1000);
}

const getNextParcel = () => {
    secs = -1;
    secCounter();
    document.getElementById('phone').value = '';
    document.getElementById('code').value = '';
    inputs.classList.remove('invisible');
    inputs.classList.add('visible');
    getParcel.classList.remove('invisible');
    success.classList.add('invisible'); 
    successImg.classList.add('invisible')
    getParcel.addEventListener('click', showInputs);
}

const validate = () => {
    if(regexPhone.test(phone) && regexCode.test(code)){
        inputs.classList.add('invisible');
        inputs.classList.remove('visible');
        success.classList.remove('invisible'); 
        getParcel.classList.add('invisible');
        successImg.classList.remove('invisible');
        alert.innerHTML = '';
        secsSum.innerHTML = secs;
        window.clearTimeout(timer);
        nextParcel.addEventListener('click', getNextParcel);
    }
    else{
        if(regexPhone.test(phone) == false){
            if(regexCode.test(code)){
                alert.innerHTML = 'Podano nieprawidłowy numer telefonu.'
            }
            else{
                alert.innerHTML = 'Podano nieprawidłowy numer telefonu i kod odbioru.'
            }
        } 
        else{
            alert.innerHTML = 'Podano nieprawidłowy kod odbioru.'
        }
        getParcel.addEventListener('click', validate);       
    }
}

const showInputs = () => {
    if(isClicked == false){
        secCounter();
        inputs.classList.remove('invisible');
        inputs.classList.add('visible');
        isClicked = true;
    }
    else {
        phone = document.getElementById('phone').value;
        code = document.getElementById('code').value;
        validate(); 
    }
}

getParcel.addEventListener('click', showInputs);

