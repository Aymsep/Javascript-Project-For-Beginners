const btncontainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.click-button');
const content = document.querySelectorAll('.content')

btncontainer.addEventListener("click", e => {
    const current = e.target.dataset.id
    console.log(e.target)
    if(current){
        btns.forEach(button => {
            button.classList.remove("active")
            e.target.classList.add("active")
        });
        content.forEach(content =>{
            content.classList.remove("active")
        })
        const cnt = document.getElementById(current)
        cnt.classList.add("active")
    }
    
})