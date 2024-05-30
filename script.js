const forms= document.querySelector(".forms"),
    pwsShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEvenetListener("click", ()  => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
       
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.assEventListener("click", e => {
        e.preventfault();
        forms.classList.toogle("show-signup");
    })
})
