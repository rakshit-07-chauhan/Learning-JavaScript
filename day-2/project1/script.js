
    // const btn = document.getElementById("showData")
    // btn.addEventListener("click",()=>{
    //     let name = document.getElementById("name").value;
    //     let age = document.getElementById("age").value;
    //     let course = document.getElementById("course").value
    //     alert(name+" "+age+" "+course); 
    // })

    const form = document.getElementById("studentForm")
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value
        const age = document.getElementById("age").value
        const course = document.getElementById("course").value

        localStorage.setItem("userName", name)
        localStorage.setItem("userAge", age)
        localStorage.setItem("userCourse", course)

        window.location.href = "profile.html"
        
    })