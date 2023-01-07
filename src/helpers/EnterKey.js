
document.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter') return;
    console.log(event.key);
    document.getElementById('myTextField').focus();

}, true);