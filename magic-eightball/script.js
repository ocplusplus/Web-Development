 // answers to the magic 8 ball
const messages = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", 
                  "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", 
                  "Don’t count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", 
                  "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"];

// function that gets a random message
function getEightballMessage() {
  let messagesSize = messages.length;
  let randomNumber = Math.floor(Math.random() * messagesSize);
  return messages[randomNumber];
}

// function to change the eightball message
function changeMessage() {
   let eightEl = document.getElementById('eight');
  eightEl.textContent = '';
 let answerEl = document.getElementById('answer');
  answerEl.textContent = getEightballMessage();
}

// call the message when clicking the button
let buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', changeMessage);
