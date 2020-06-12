const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
console.log(perimeter)
circle.setAttribute('stroke-dasharray', perimeter);


let duration = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        console.log('Timer started');
        duration = totalDuration;
    },
    OnTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
        perimeter * timeRemaining / duration - perimeter);
    },
    onComplete(){
        console.log('Time just completed')
    }
});
console.log((perimeter*30) / 30/perimeter);