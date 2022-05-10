const rolldiceBtn = document.getElementById('roll_dice')
const dices = document.querySelectorAll('.dice')

function rollDice(numberOfSides) {

    switch (numberOfSides) {
        case 0:
            return Math.floor(Math.random() * 4) + 1;
            break;
        case 1:
            return Math.floor(Math.random() * 6) + 1;
            break;
        case 2:
            return Math.floor(Math.random() * 8) + 1;
            break;
        case 3:
            return Math.floor(Math.random() * 10);
            break;
        case 4:
            {
                const result = Math.floor(Math.random() * 10) * 10;
                if (result == 0) {
                    return '00';
                } else {
                    return result;
                }
            }
            break;
        case 5:
            return Math.floor(Math.random() * 12) + 1;;
            break;
        case 6:
            return Math.floor(Math.random() * 20) + 1;
    }

}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

dices.forEach((dice) => {
    dice.addEventListener('click', (e) => {
        if (dice.innerHTML != null) {
            dice.innerHTML = ''
        }
        dice.classList.toggle('choosen')
    })
})




rolldiceBtn.addEventListener('click', () => {

    for (const position of dices.keys()) {

        if (dices[position].classList.contains('choosen')) {
            /* console.log(position) */
            dices[position].innerHTML = `${rollDice(position)}`
        }
    }

    /* dices.forEach((diceSc) => {
        if (diceSc.classList.contains('choosen')) {
            console.log(dices.keys())
            diceSc.innerHTML = `${rollDice()}`
        }
    }) */

    /*     
${rollDice()}    
    const score = rollDice()
        test.innerHTML = score
        diceScore.innerHTML = `hello` */
})


