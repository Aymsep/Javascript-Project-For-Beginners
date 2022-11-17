//declaring variables
const decrease = document.querySelector('#Decrease')
const increase = document.querySelector('#Increase')
const reset = document.querySelector('#Reset')
const count = document.querySelector('.Count')

//score to display in div.Count
let score = 0 

/*when click button increase*/ 
increase.addEventListener('click', onincrease)

/*when increase button clicked , this function will execute the increment*/ 
function onincrease() {

    // increase score by 1 in div.Count
    count.innerHTML = score += 1 ; 

    // for number greater than 0 take color green,and if score = 0 color white
    if(score > 0 ){
        count.style.color ='green'
    }else if (score == 0){
    count.style.color ='white'
    }
}
// end of increase function



// when click button decrease 
decrease.addEventListener('click', ondecrease)

// when decrease button clicked , this function will execute the decrease
function ondecrease() {

    // decrease score by 1 in div.Count
    count.innerHTML = score -= 1;

    // for number smaller than 0 take color red, and if score = 0 color white
    if(score < 0){
        count.style.color ='red'
    }else if(score == 0){
    count.style.color ='white'

    }
}


// when click button reset
reset.addEventListener('click', onreset)

// when reset button clicked , this function will execute the reset
function onreset() {

    /*reset score to 0 in div.Count*/ 
    count.innerHTML = score = 0 ;

    /*number color to white */
    count.style.color ='white'
}


/*end of javascript*/ 
