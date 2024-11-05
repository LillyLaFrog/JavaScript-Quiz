const correctAnswers = ['B','A','C','C','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;
    const usrAnswers = [];
    //get answers(number of answers based on answer key)
    for(i=0; i<correctAnswers.length; i++) {usrAnswers[i] = form['q'+(i+1)].value};
    console.log(usrAnswers);
    //check answers and add to score
    usrAnswers.forEach((answer, index)=>{if(answer === correctAnswers[index]){score +=1/correctAnswers.length;};});
    //convert score to rounded percentage
    score = Math.round(score*100);
    scrollTo(top);
    //make score visable
    result.classList.remove('d-none');
    //animate score to increse over a duration
    let scoreOutput = 0
    let duration = 1600;
    let interval = duration/score;
    const counter = setInterval(()=>{
        result.querySelector('span').innerHTML = scoreOutput + '%';
        if(scoreOutput === score){
            clearInterval(counter);
        }else{
            scoreOutput++;
        }
    },interval);
});
//reload the page when the reset button is pressed
form.addEventListener('click', e=>{
    if(e.target.value === 'Reset'){
        scrollTo(top);
        location.reload();
    }
});