 


const name = document.getElementById('name');
const lastName = document.getElementById('lastname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const btn = document.getElementById('btn');
const wrapper = document.getElementById('wrapper');


function validate() {
    if (!name.value) {
      alert('Please enter a name');  
      name.focus();
      return false;
    }
    if (!lastname.value) {
        alert('Please enter a lastname');
        lastname.focus();
        return false;
    }  
 
    if (!age.value) {
        alert('Please enter a age');
        age.focus();
        return false;
    }  

    if (age.value <= 7 || age.value > 200 ) {
        alert('Age very small or big ');
        age.focus();
        return false;
    } 
    if (!email.value) {
        alert('Please enter a email');
        email.focus();  
        return false;
    }
    if (!password.value) {
        alert('Please enter a password');
        password.focus();  
        return false;
    }
     
function clear() {
    name.value = '';
    lastname.value = '';
    age.value = '';
    email.value = '';
    password.value = '';
}

    return true;

    
}

function getDataFromLocalStorage() {
    const data = [];
    if (localStorage.getItem('save')) {
        data = JSON.parse(localStorage.getItem('save'));
        
    }

    return data;
}




btn && btn.addEventListener('click', function() {
  if (validate(name, lastName, age, email, password)) {
    const saved = {
        name: name.value,
        lastName: lastName.value,
        age: age.value,
        email: email.value,
        password: password.value
    };
    let data = getDataFromLocalStorage();
    data.push(saved);
    localStorage.setItem('save', JSON.stringify(data));

    
     };

     




     
  }
 

);




