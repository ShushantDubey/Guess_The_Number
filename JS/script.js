`use strict`;

const number = Math.trunc(Math.random() * 20)+1;

let score = 20;


document.querySelector(`.check`).addEventListener
(`click`,function(){
    const guess = Number(document.querySelector(`.guess`).value);

    console.log(document.querySelector(`.message`).textContent=`You Won🤩`);

//If no number has been seleceted
   if(!guess)
   {
    console.log(document.querySelector(`.message`).textContent=`🚫 No Number`);
   }

//Answer matches the hidden Number
   else if(guess === number)
   {
    console.log(document.querySelector(`.message`).textContent=`You Won 😎`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent=number;
   }

//Answer is wring & does not matches to the similar number
   else if(guess > number)
   {
       if(score > 0)
       {
        console.log(document.querySelector(`.message`).textContent=`Too High`);
        score--;
        console.log(document.querySelector(`.score`).textContent=score);
       }
       else
       {
        console.log(document.querySelector(`.message`).textContent=`You Lost😥`);
       }
   }
   else if(guess < number)
   {
    if(score > 0)
       {
        console.log(document.querySelector(`.message`).textContent=`Too Low`);
        score--;
        console.log(document.querySelector(`.score`).textContent=score);
       }
    else
       {
        console.log(document.querySelector(`.message`).textContent=`You Lost😥`);
       }
    }
}
);     

console.log(document.querySelector(`.again`).addEventListener
(`click`,function(){
    score = 20;
    number = Math.trunc(Math.random() * 20)+1;

    document.querySelector(`.message`).textContent=`Start Guessing . . .`;
    document.querySelector(`.score`).textContent=score;
    document.querySelector(`.textcontent`).textContent=`?`;
    document.querySelector(`.guess`).textContent=``;    

    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    
}));