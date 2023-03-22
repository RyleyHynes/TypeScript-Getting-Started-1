function startGame() {
    //start a new game
    const messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome To MultiMath! Start New Game...';
}
document.getElementById('startGame')!.addEventListener('click', startGame);