const menu = document.getElementById('navi'),
    submitButton = document.getElementById('submit-btn'),
    closeButton = document.getElementById('close-btn');


menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

submitButton.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('subject-result').innerText = 'Subject: ' + subject;
    const description = document.getElementById('description').value.toString();
    document.getElementById('description-result').innerText = 'Description: ' + description;
    document.getElementById('message-block').classList.remove('popup-hidden');
});

closeButton.addEventListener('click', () => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('description-result').innerText = '';
    document.getElementById('message-block').classList.add('popup-hidden');
});