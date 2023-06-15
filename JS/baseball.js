const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function generateNumber() {
    const digits = '0123456789';
    let number = '';
    while (number.length < 3) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        if(number.search(digits[randomIndex]) == -1)
            number += digits[randomIndex];
    }
    return number;
}

function compareNumbers(answer, guess) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
        if (answer[i] === guess[i]) {
            strike++;
        } else if (answer.includes(guess[i])) {
            ball++;
        }
    }

    return { strike, ball };
}

const answer = generateNumber();
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

let attempts = 1;

function recursion() {
    rl.question(`${attempts}번째 시도 : `, (guess) => {
        if (guess.length !== 3) {
            console.log("3자리 숫자를 입력하세요");
            recursion();
            return;
        }

        const { strike, ball } = compareNumbers(answer, guess);

        let str = (strike > 0 ? `${strike}S` : "") + (ball > 0 ? `${ball}B` : "") + (strike == 0 && ball == 0 ? "0S0B" : "");
        console.log(str);
        if (strike === 3) {
            console.log(`${attempts}번만에 맞히셨습니다.`);
            rl.close();
            return;
        }

        attempts++; // 횟수 추가
        recursion();
    });
}

recursion();



















