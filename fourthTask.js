document.addEventListener('DOMContentLoaded', () => {
    const secretCode = '1234';
    let inputSequence = '';

    const secretInput = document.getElementById('secretInput');
    const secretMessage = document.getElementById('secretMessage');

    secretInput.addEventListener('keydown', (event) => {
        inputSequence += event.key;
        inputSequence === secretCode
        ? secretMessage.style.display = 'block' 
        : secretMessage.style.display = 'none';
    });
});