const name = document.getElementById('name');
const lastName = document.getElementById('lastname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const btn = document.getElementById('btn');
const wrapper = document.getElementById('wrapper');
const fatherName = document.getElementById('fatherName');
const motherName = document.getElementById('motherName');
const form = document.getElementById('form');
const cardWrapper = document.getElementById('card-wrapper');


function validate() {
    if (!name.value) {
      alert('Please enter a name');  
      name.focus();
      name.style.outlineColor = 'red';
      return false;
    } else {
        name.style.outlineColor = 'lightblue';
    }
    if (name.value.trim().length < 3) {
        name.focus();
        alert('length must be 3 characters');
        name.style.outlineColor = 'red';
        return false;
    }  else {
        name.style.outlineColor = 'lightblue';
    }
    if (!lastname.value) {
        alert('Please enter a lastname');
        lastname.focus();
        lastname.style.outlineColor = 'red';
        return false;
    }  else {
        lastname.style.outlineColor = 'lightblue';
    }
    if (!fatherName.value) {
        alert('Please enter a father name');
        fatherName.focus();
        fatherName.style.outlineColor = 'red';
        return false;
    }  else {
        fatherName.style.outlineColor = 'lightblue';
    }
    if (!motherName.value) {
        alert('Please enter a mother name');
        motherName.focus();
        motherName.style.outlineColor = 'red';
        return false;
    }  else {
        motherName.style.outlineColor = 'lightblue';
    }
    
 
    if (!age.value) {
        alert('Please enter a age');
        age.focus();
        age.style.outlineColor = 'red';
        return false;
    }  else {
        age.style.outlineColor = 'lightblue';
    }

    if (age.value <= 7 || age.value > 200 ) {
        alert('Age very small or big ');
        age.focus();
        return false;
    }   
    if (!email.value) {
        alert('Please enter a email');
        email.focus(); 
        email.style.outlineColor = 'red'; 
        return false;
    }   else {
        email.style.outlineColor = 'lightblue';
    }
    if (!password.value) {
        alert('Please enter a password');
        password.focus();  
        password.style.outlineColor = 'red';
        return false;
    }  else {
        password.style.outlineColor = 'lightblue';
    }
    return true; 
}

function getData() {
    let save = [];
    if (localStorage.getItem('save')) {
        save = JSON.parse(localStorage.getItem('save'))
    }
    return save;
}

btn && btn.addEventListener('click', function(e) {
    e.preventDefault();

  if (validate(name, lastName, fatherName, motherName, age, email, password)) {
    const saved = {
        name: name.value,
        lastName: lastName.value,
        fatherName: fatherName.value,
        motherName: motherName.value,
        age: age.value,
        email: email.value,
        password: password.value
    };

    let u = getData();
    u.push(saved);
    localStorage.setItem('save', JSON.stringify(u));
    form.reset();
    let card = createCard(saved);
    cardWrapper.innerHTML += card;
     } else {
        console.log('validatsiyadan otdi');     
    }
  }
 

);

function createCard(save) {
return `
<div class="card" >
<h2>New User</h2>
<h4 class="card-txt"><span>name:</span> ${save.name}</h4>
<h4 class="card-txt"><span>lastname:</span> ${save.lastName}</h4>
<h4 class="card-txt"><span>father name:</span> ${save.fatherName}</h4>
<h4 class="card-txt"><span>mother name:</span> ${save.motherName}</h4>
<h4 class="card-txt"><span>age:</span> ${save.age}</h4>
<h4 class="card-txt"><span>email:</span> ${save.email}</h4>
<h4 class="card-txt"><span>password:</span> ${save.password}</h4>
<button class="delete-btn">Delete</button>  
</div>
`
}

function deleteItem(btn) {
    var wrapper = btn.parentNode;
    var list = wrapper.parentNode;
    list.removeChild(wrapper);
}



document.addEventListener('DOMContentLoaded', function() {
let save = getData();
save.forEach(save => {
    let card = createCard(save);
    cardWrapper.innerHTML += card;
});
});






