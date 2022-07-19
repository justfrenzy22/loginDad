// window.addEventListener(`load`, (event) => {   
    
//     let backRight = document.createElement(`div`)
//     backRight.classList.add(`backRight`)
//     document.body.append(backRight)


//     let left = document.createElement(`div`)
//     left.classList.add(`left`)
//     document.body.append(left)


//     let content = document.createElement(`div`) 
//     content.classList.add(`content`)
//     left.appendChild(content)

    
//     let h2 = document.createElement(`h2`)
//     h2.innerText = `Login`
//     content.appendChild(h2)
    

//     let form = document.createElement(`form`)     
//     content.appendChild(form)   
    
    
//     let input = document.createElement(`input`)   
//     input.setAttribute(`type`, `password`)         
//     input.setAttribute(`placeholder`, `Password`)
//     input.classList.add(`pass`)    
//     form.appendChild(input)              
    
//     let submitBtn = document.createElement(`input`)     
//     submitBtn.setAttribute(`type`, `submit`)            
//     submitBtn.classList.add(`submit`)       
//     form.appendChild(submitBtn)         
    

// })




let submitBtn = document.querySelector(`.submit`)
let input = document.querySelector(`.pass`)
let holdBtn = document.querySelector(`.hold`)
let content1 = document.querySelector(`.content1`)
let content2 = document.querySelector(`.content2`)
let span = document.querySelector(`.span`)
let tid = 0
let speed = 100


submitBtn.addEventListener(`click`, (event) => {        
    event.preventDefault()     

    if ( input.value != `123456` )  {
        alert(`Въвели сте грешна парола или не сте въвели парола. Моля въведете вашата парола!`) 
    }
 
    if (input.value == `123456`) {     
        content1.style.display = `none`
        content2.style.display = `block`
        
        holdBtn.addEventListener(`mousedown`, (event) => {
            if (tid == 0) {
                tid = setInterval(() => {
                    span.classList.add(`something`)
                }, speed);
            }
        })     
        holdBtn.addEventListener(`mouseup`, (event) => {
            if (tid != 0)  {
                clearInterval(tid)
                span.classList.remove(`something`)
                tid = 0;
            }
        })
    }
})




