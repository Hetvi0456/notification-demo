let button = document.querySelector('button');
let text = document.querySelector('p');

button.addEventListener('click', () => {
    setTimeout(() => {
        text.innerHTML = 'Button clicked!';
    }, 2000);

    setTimeout(() => {
        text.innerHTML += '<p>Logged in!</p>';
    }, 4000);

    setTimeout(() => {
        text.innerHTML += '<p>New message received!</p>';
    }, 6000);

    
    setTimeout(() => {
        text.innerHTML += '<p>Message reads : Hello, this is a test message.</p>';
    }, 8000);


    setTimeout(() => {
        text.innerHTML += '<p>You have been logged out.</p>';
    }, 10000)
});