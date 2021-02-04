const submitButton = document.getElementById('button');
// const secretDiv = document.querySelector('secret-div');
const secretP = document.getElementById('secret-p');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();


    secretP.textContent = `Thank you for sharing your feelings. we hear them AND respect them`;

});
