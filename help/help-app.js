const submitButton = document.getElementById('button');
const secretDiv = document.querySelector('secret-div');


submitButton.addEventListener('click', () => {
    const secretP = document.querySelector('#secret-p');

    secretP.textContent = `Thank You for sharing your feelings. we hear them AND respect them`;
    secretDiv.append(secretP);
});
