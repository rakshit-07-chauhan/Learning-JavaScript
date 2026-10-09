let name = "Rakshit Chauhan";
let age = 23
const course  = "MCA";
const collegeName = 'KIET University'

console.log("Jai Shree Ram");
console.log(`My name is ${name}`);
console.log(`My age is ${age}`);
console.log(`My Course is ${course}`);
console.log(`My College name is ${collegeName}`);


let btnClick = document.getElementById('btn')
btnClick.addEventListener("click",function(){
    btnClick.innerHTML="Submitted"
    alert("Form Submit Successfull")
    
})
const bodyBgColor = document.getElementById("myBody");
bodyBgColor.addEventListener("click", ()=>{
    bodyBgColor.style.backgroundColor = "bisque";
})
