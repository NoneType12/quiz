var fetch = require('node-fetch');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
fetch('https://opentdb.com/api.php?amount=10&type=multiple').then(r=>r.json()).then(data=>{
    var answers = [data.results[0].incorrect_answers[0], data.results[0].incorrect_answers[1], data.results[0].incorrect_answers[2],
    data.results[0].correct_answer];
    answers.sort(() => (Math.random() > .5) ? 1 : -1);
    var abcd = [...'abcd'];
    process.stdout.write('\n\n')
    for (let i = 0; i < (answers.length); i++) {
        process.stdout.write(`${abcd[i]}) ${answers[i]} \n`);
    }
    rl.question(`${data.results[0].question} `, (ans)=>{
    if(ans==data.results[0].correct_answer){
        process.stdout.write(`You got it right! It's ${data.results[0].correct_answer}`)
    } else {
        process.stdout.write(`Wrong, it was ${data.results[0].correct_answer}!`)
    }
        process.exit()
    });
})