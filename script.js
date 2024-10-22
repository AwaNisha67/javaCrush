var acc = [...document.getElementsByClassName("heading")];
// console.log(acc);



acc.forEach(heading=>{
    heading.addEventListener("click",()=>{
        heading.querySelector("img").classList.toggle("plus")
        heading.nextElementSibling.classList.toggle("show")
    })
})