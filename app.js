const closeButton = document.querySelector(".close-btn")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const showModal = document.querySelectorAll(".show-modal")
console.log(showModal)

const displayModal = function (){
   for (let i = 0 ; i < showModal.length ; i++){
    showModal[i].addEventListener("click",function(){
        modal.classList.remove("hidden") 
        overlay.classList.remove("hidden")
    })
   }
}

displayModal()



