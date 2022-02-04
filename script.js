const getParcel = document.querySelector('.getParcel');
const inputs = document.getElementById('inputs');
const validationError = document.getElementById('validationError');
const success = document.getElementById('success');
const nextParcel = document.getElementById('nextParcel');
const secsSum = document.getElementById('secsSum');
const successImg = document.getElementById('successImg');
const loader = document.getElementById('loader');
const buttonLoader = document.getElementById('buttonLoader');
let phone;
let code;
let isClicked = false;
const regexCode = /^\d{4}$/;
const regexPhone = /^(\d{9}|\d{3}[-\s]\d{2}[-\s]\d{2}[-\s]\d{2}|\d{3}[-\s]\d{3}[-\s]\d{3})$/;
let secs = -1;
let timer;

const mockAPI = () => {
    if(isClicked == false){
        loader.classList.add('modal');
        setTimeout( ()=> {
            loader.classList.remove('modal');
            showInputs();
        }, 1000); 
    }
    else{
        validationError.innerHTML = '';
        buttonLoader.classList.remove('invisible');
        getParcel.classList.add('invisible');            
        setTimeout( ()=> {
            buttonLoader.classList.add('invisible');
            getParcel.classList.remove('invisible');
            validate();  
        }, 1000);
    }
}

const secCounter = () => {
    secs += 1;
    timer = setTimeout(()=>secCounter(),1000);
}

const getNextParcel = () => {
    secs = -1;
    secCounter();
    document.getElementById('phone').value = '';
    document.getElementById('code').value = '';
    successImg.classList.add('invisible');
    success.classList.remove('modal');
}

const validate = () => {
    phone = document.getElementById('phone').value;
    code = document.getElementById('code').value;
    if(regexPhone.test(phone) && regexCode.test(code)){
        success.classList.add('modal');
        successImg.classList.remove('invisible');
        secsSum.innerHTML = secs;
        window.clearTimeout(timer);
        nextParcel.addEventListener('click', getNextParcel);
    }
    else{
        if(regexPhone.test(phone) == false){
            if(regexCode.test(code)){
                validationError.innerHTML = 'Podano nieprawidłowy numer telefonu.';
            }
            else{
                validationError.innerHTML = 'Podano nieprawidłowy numer telefonu i kod odbioru.';
            }
        } 
        else{
            validationError.innerHTML = 'Podano nieprawidłowy kod odbioru.';
        }    
    }
}

const showInputs = () => {
    isClicked = true;
    secCounter();
    inputs.classList.remove('invisible');
    inputs.classList.add('visible');
}

getParcel.addEventListener('click', mockAPI);