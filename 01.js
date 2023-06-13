const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function generateNumber() {
    const digits = '123456789';
    let number = '';
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
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
console.log("숫자 야구 게임 시작!");

let attempts = 0;

function playGame() {
    attempts++; // 횟수 추가
    rl.question("3자리 숫자를 입력하세요: ", (guess) => {
        if (guess.length !== 3) {
            console.log("3자리 숫자를 입력하세요");
            playGame();
            return;
        }

        const { strike, ball } = compareNumbers(answer, guess);

        if (strike === 3) {
            console.log(`정답입니다! 축하합니다! 당신은 ${attempts}번 만에 정답을 맞혔습니다.`);
            rl.close();
            return;
        }

        console.log(`스트라이크: ${strike}, 볼: ${ball}`);
        playGame();
    });
}

playGame();


























