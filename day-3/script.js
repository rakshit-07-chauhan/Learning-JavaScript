function showData(){
    const name = document.getElementById("name").value
    const email = document.getElementById("eMail").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value
    const mobile = Number(document.getElementById("mobile"))
    const selectedGender = document.querySelector('input[name="gender"]:checked')
    const gender = selectedGender ? selectedGender.value : "Not Selected"
    const selectedSkill = document.querySelectorAll('input[name= "skills"]:checked')
    const skills = Array.from(selectedSkill).map((checkbox)=>{
        return checkbox.value
    })
    const course = document.getElementById("course").value
    const selectedLanguage = document.getElementById("language")
    const language = Array.from(selectedLanguage.selectedOptions).map((option)=>{
        return option.value
    })
      
    const address = document.getElementById("address").value
    const dob = document.getElementById("dob").value
    const preferredTime = document.getElementById("preferredTime")
    const agreement = document.getElementById("agreement").value
    const skillLevel = document.getElementById("skillLevel").value
    const favoriteColor = document.getElementById("favoriteColor").value
    const resume = document.getElementById("resume").value
    const portfolio = document.getElementById("postfolio").value
    const searchTopic = document.getElementById("searchTopic").value

    const student = {
        name : name,
        email : email,
        password : password,
        age : age,
        mobile : mobile,
        gender : gender,
        skills : skills,
        course :course,
        language : language,
        address :address,
        dob : dob,
        preferredTime : preferredTime,
        skillLevel : skillLevel,
        favoriteColor : favoriteColor,
        resume : resume,
        portfolio : portfolio,
        searchTopic : searchTopic
    };

     document.getElementById("output").textContent =
        JSON.stringify(student, null, 2);

     
        
}