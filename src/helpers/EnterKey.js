
document.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter') return;
    document.getElementById('myTextField').focus();
}, true);