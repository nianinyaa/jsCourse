function startGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;

function numberInput (){
    let userNum = prompt ('Угадай число от 1 до 100', 50);
    if(userNum === null){
        alert(`Игра окончена!`);
        return
    };
    let num = +userNum;
    if(isNaN(num)){
        alert(`Введи число!`);
       return numberInput();
        };
    if(num === secretNumber){
        alert(`Вы угадали!!!`);
        return numberInput()
    };
    if(num > secretNumber){
        alert(`Загаданное число меньше`);
        numberInput();
    };
    if(num < secretNumber){
    alert (`Загаданное число больше`);
    return numberInput();
    };
}
numberInput();
}
startGame();