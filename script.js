const getParcel = document.querySelector('.getParcel');
const inputs = document.getElementById('inputs');
const alert = document.getElementById('alert');
const success = document.getElementById('success');
const nextParcel = document.getElementById('nextParcel');
const secsSum = document.getElementById('secsSum');
const successImg = document.getElementById('successImg');
const loader = document.getElementById('loader')
let phone;
let code;
let isClicked = false;
const regexCode = /^\d{4}$/;
const regexPhone = /^(\d{9}|\d{3}[-\s]\d{2}[-\s]\d{2}[-\s]\d{2})$/;
let secs = -1;
let timer;

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        loader.classList.add('modal');
        setTimeout( ()=> {
            loader.classList.remove('modal');
            showInputs();
            resolve();
        }, 1000);
    })
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
    success.classList.remove('modal')
    getParcel.addEventListener('click', showInputs);
}

const validate = () => {
    if(regexPhone.test(phone) && regexCode.test(code)){
        success.classList.add('modal')
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

getParcel.addEventListener('click', mockAPI);