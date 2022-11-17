// declaring variables
const span = document.querySelector('span')
const button = document.querySelector('button')
const cp = document.querySelector(".copied")

// when button clicked apply execute this function
button.addEventListener('click', ongenerate)

// function to execute on click
function ongenerate(e){

    // generate six number base 16 , for combination

    // two number
    let hex_1 = Math.floor(Math.random()*16)
    .toString(16)

    // two number
    let hex_2 = Math.floor(Math.random()*16)
    .toString(16)

    // two number
    let hex_3 = Math.floor(Math.random()*16)
    .toString(16)

    /*in case one has been generate we add 0 , to complete pattern of six number for hex*/ 

    // for var 1
    if(hex_1.length == 1){

        hex_1 += '0'
    }
    // for var 2
    if(hex_2.length == 1){

        hex_2 += '0'
    }
    // for var 3
    if(hex_3.length == 1){

        hex_3 += '0'
    }

    // change backgroundcolor based on combination of tree variable
    document.querySelector('body').style.background = `#${hex_1+hex_2+hex_3}`//template strings

    //display color hex code on span 
    span.innerText = `#${hex_1+hex_2+hex_3}`

    //change span color to generate hex code
    span.style.color = `#${hex_1+hex_2+hex_3}`

    //active class.active to pop-up "copied-text"   
    cp.classList.toggle("active")

    //after .9s make pop-up disappear
    setTimeout(() =>{
        cp.classList.remove('active')
    },"900")
}
/*end of generating random colors on click*/


/*when clicking on button , hex code will be copied to the keyboardf*/
function copy(htmlElement){
    if (!htmlElement){
        return;
    }
    let ele = htmlElement.innerText
    let input = document.createElement('input')
    input.setAttribute('value',ele)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.parentNode.removeChild(input)
}
 button.addEventListener('click', function(){
    copy(document.querySelector("#copy"))
 })







