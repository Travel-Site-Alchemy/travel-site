const secretP = document.getElementById('secret-p');
const formForm = document.getElementById('help-submit-form');

formForm.addEventListener('submit', (e) => {
    e.preventDefault();

    formForm.reset();

    secretP.textContent = 'Thank you for sharing your feelings. We hear them AND respect them.';

});
