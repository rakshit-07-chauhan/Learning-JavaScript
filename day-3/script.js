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
    const preferredTime = document.getElementById("preferredTime").value
    const agreement = document.getElementById("agreement").value
    const skillLevel = document.getElementById("skillLevel").value
    const favoriteColor = document.getElementById("favoriteColor").value
    const resume = document.getElementById("resume").value
    const portfolio = document.getElementById("portfolio").value
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

    //  document.getElementById("output").textContent =
    //     JSON.stringify(student, null, 2);

    const welcomeMessage = document.getElementById("welcomeMessage");

    const skillMessage = document.getElementById("skillMessage");

    if (!name) {
        welcomeMessage.textContent = "Please enter your name.";
        skillMessage.textContent = "";
        return;
    }
    let sGender = "Ms."
    if(gender.value  == "feamle"){
        sGender = "Ms."
        return;  
    }

    welcomeMessage.innerHTML = `
        <h3>Welcome ${name}!</h3>

        <p>
            ${sGender} ${name}, you are ${age || "not specified"}
            years old. We can contact you on your mobile number
            ${mobile || "not specified"} or at the address:
            ${address || "not specified"}, or send an email to
            ${email || "not specified"}.
            It's good that you have a
            ${skills.length <= 1 ? "single" : "multiple"}
            skill(s) as ${skills.length ? skills.join(", ") : "none"}.
        </p>
    `;

    // 4. Generate skill message according to selection
    if (skills.length === 1) {
        skillMessage.textContent =
            `If have selected single skill: You have selected a skill as ${skills[0]}.`;

    } else if (skills.length === 2) {
        skillMessage.textContent =
            `If have selected any two skills: You have selected skills as ${skills[0]} and ${skills[1]}.`;

    } else if (skills.length > 2) {
        skillMessage.textContent =
            `If have selected more than two skills: You have selected the skills as ${skills.slice(0, -1).join(", ")} and ${skills[skills.length - 1]}.`;

    } else {
        skillMessage.textContent = "You have not selected any skills.";
    }
}


        
