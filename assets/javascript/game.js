
let charOpt = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

let answerOpt = ["pirates of the carribean", "gwyneth paltrow", "francis ford coppola", "pixar", "the searchers", "walt disney", "john wayne", "sunset boulevard"];

let answer = answerOpt[Math.floor(Math.random() * answerOpt.length)];

let answerArray = [];
for (let i = 0; i < answer.length; i++) {
    answerArray(i) = "_";
}

let remainingCharOpt = answer.length;

while (remainingCharOpt > 0) {
    alert(answerArray.join(""));
    let guess
        if (guess.length !== 1) {
            prompt("Please enter a single letter.");
        } else {
            for (var j = 0; j < answer.length; j++) {
                if (answer[j] === guess){
                    answerArray[j] = guess;
                    remainingCharOpt--;
                }
        }
}

document.onkeyup = function (event);

alert(answerArray.join(""));

alert("And the oscar goes to..." + answer);