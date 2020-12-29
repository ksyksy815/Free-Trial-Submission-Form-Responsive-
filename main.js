const form = document.querySelector('.form');
firstName = document.querySelector('#fName'),
lastName = document.querySelector('#lName'),
email = document.querySelector('#email'),
password = document.querySelector('#password'),
submit = document.querySelector('#submit'),
fnMessage = document.querySelector('#fNameMessage'),
lnMessage = document.querySelector('#lNameMessage'),
emailMessage = document.querySelector('#emailMessage'),
pwMessage = document.querySelector('#passwordMessage');

const inputFields = [
    {inputName: firstName,
    message: 'First Name cannot be empty',
        place: fnMessage},
    {inputName: lastName,
        message: 'Last Name cannot be empty',
        place: lnMessage},
    {inputName: email,
        message: 'Looks like this is not an email',
        place: emailMessage},
    {inputName: password,
        message: 'Password cannot be empty',
        place: pwMessage}
];

/*---Putting error messages in the <p>s--- */
for (i = 0; i < inputFields.length; i++) {
    inputFields[i].place.textContent = inputFields[i].message;
};

/*---Error message styling (display: none)--- */
for (i = 0; i < inputFields.length; i++) {
    inputFields[i].place.classList += ' places';
};

/*---Getting rid of the defaul error bubble of the browser--- */
for (i = 0; i < inputFields.length; i++) {
    inputFields[i].inputName.addEventListener('invalid', function(e) {
        e.preventDefault();
    })
};



/*---Display error messages when input value is empty--- */
submit.addEventListener('click', function() {
    for (i = 0; i < inputFields.length; i++) {
        if (inputFields[i].inputName.value == '') {
            inputFields[i].place.style.display = 'block';
        } else if (inputFields[i].place.style.display == 'block')
        inputFields[i].place.style.display = '';
    } 
});






/*---Terms and Services--- */

const terms = document.querySelector('#terms');
const bg = document.createElement('div');

bg.classList = 'termsBG';
document.body.appendChild(bg);

let termsInfo = document.createElement('div');
termsInfo.classList = 'termsInfo';

termsInfo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora molestiae eveniet totam nesciunt rerum minima ut a nostrum aperiam debitis, labore vel voluptatibus quis et repellat quas asperiores eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora molestiae eveniet totam nesciunt rerum minima ut a nostrum aperiam debitis, labore vel voluptatibus quis et repellat quas asperiores eligendi.';


bg.appendChild(termsInfo);

function showTerms() {
    bg.style.display = 'grid';
}

terms.addEventListener('click', showTerms);
bg.addEventListener('click', function(){
    if (bg.style.display == 'grid') {
        bg.style.display = 'none';
    }
})