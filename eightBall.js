let userName='Nick';
userName? console.log('Hello,'+ userName + '!') : console.log('Hello!');
let userQuestion='"Will I have a good day today?"';
userQuestion?console.log(`${userName} asked ${userQuestion}`) : null;
let randomNumber=Math.floor(Math.random()*8);
let eightBall='';

if (randomNumber===0) {
  let eightBall='It is certain.';
  console.log(eightBall);
}
else if(randomNumber===1) {
  let eightBall='It is decidedly so.';
  console.log(eightBall);
}
else if(randomNumber===2) {
  let eightBall='Reply hazy try again.';
  console.log(eightBall);
}
else if(randomNumber===3) {
  let eightBall='Cannot predict now.';
  console.log(eightBall);
}
else if(randomNumber===4){
  let eightBall='Do not count on it.'
  console.log(eightBall);
}
else if(randomNumber===5){
  let eightBall='My sources say no.';
  console.log(eightBall);
}
else if (randomNumber===6){
  let eightBall='Outlook poor.';
  console.log(eightBall);
}
else {
  let eightBall='Signs say yes.';
  console.log(eightBall);
}

