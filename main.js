const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
    
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    //Clear Fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// Single element selectors
  //document.getElementById();
    /*
      document.getElementById('my-form');
      const form = document.getElementById('my-form');
      console.log(form);
    */

  //document.querySelector();
    /*
    console.log(document.querySelector('my-form'));
    */

// Multiple element selectors

  //document.querySelectorAll() - selects more than one item
    //RECOMMEND THAT WE USE THIS ONE AS THE OTHER ONES ARE OLDER
    
    //console.log(document.querySelectorAll('.item'));

  //Older Ones
  //document.getElementsByClassName('')

    //console.log(document.getElementsByClassName('item'));
    //This gives an HTML collection, can make it an array

  //document.getElementsByTagName('')

    //console.log(document.getElementsByTagName('li'));

//MANIPULATING THE DOM

  //.remove(); - Removes what you need gone

    const ul = document.querySelector('.items');

    //ul.remove();
    //ul.lastElementChild.remove();

  //.textContent = ''; - Change HTML Text from the Javascript
    //ul.firstElementChild.textContent = 'Hello';

  //.innerText = ''; - Change HTML Text from the Javascript  
    //ul.children[1].innerText = 'LaRenzo';

  //.innerHTML = ''; - Change HTML Text from the Javascript.  This method requires use of h1, p, form ect.
    //ul.lastElementChild.innerHTML = '<h1>Happy</h1>';
    
  // .style - Changes style
    //const btn = document.querySelector('.btn');
    //btn.style.background = 'red'
  
  //.addEventListener('event we want', function to run when event happens)
  /*
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#my-form').style.background = '#ccc';
      document.querySelector('body').classList.add('bg-dark');
      document.querySelector('.items').lastElementChild.innerHTML = "<h1>HELLO</h1>";
    } );

    */


