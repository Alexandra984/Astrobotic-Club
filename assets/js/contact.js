const createRegisterPage = ()=> {
    const createForm = () => {
        
        // creating the Form structure
        const form = document.createElement("FORM");
        form.setAttribute("id", "form-1");
        document.body.appendChild(form);

        // form title
        const title = document.createElement("H2");
        title.innerHTML = "Inregistrare";
        document.getElementById("form-1").appendChild(title); 

        // creating inputs

        // first name input
        const input1 = document.createElement("INPUT");
        input1.setAttribute("type", "text");
        input1.setAttribute("placeholder", "First Name");
        input1.setAttribute("aria-describedby", "error-firstName");
        input1.setAttribute("id", "firstName");
        document.getElementById("form-1").appendChild(input1);
        const div1 = document.createElement("DIV");
        div1.setAttribute("id", "error-firstName");
        document.getElementById("form-1").appendChild(div1);
        

        // last name input
        const input2 = document.createElement("INPUT");
        input2.setAttribute("type", "text");
        input2.setAttribute("placeholder", "Last Name");
        input2.setAttribute("aria-describedby", "error-lastName");
        input2.setAttribute("id", "lastName");
        document.getElementById("form-1").appendChild(input2);
        const div2 = document.createElement("DIV");
        div2.setAttribute("id", "error-lastName");
        document.getElementById("form-1").appendChild(div2);
        

        // email input
        const input3 = document.createElement("INPUT"); 
        input3.setAttribute("type", "email");
        input3.setAttribute("placeholder", "Email");
        input3.setAttribute("aria-describedby", "error-email");
        input3.setAttribute("id", "email");
        document.getElementById("form-1").appendChild(input3);
        const div3 = document.createElement("DIV");
        div3.setAttribute("id", "error-email");
        document.getElementById("form-1").appendChild(div3);
        

        // password input
        const input4 = document.createElement("INPUT");
        input4.setAttribute("type", "password");
        input4.setAttribute("placeholder", "Password");
        input4.setAttribute("aria-describedby", "error-password");
        input4.setAttribute("id", "password");
        document.getElementById("form-1").appendChild(input4);
        
        const i = document.createElement("i");
        i.setAttribute("id", "pass-status");
        i.setAttribute("class", "fa fa-eye");
        i.setAttribute("aria-hidden", "true");
        document.getElementById("form-1").appendChild(i);

        const div4 = document.createElement("DIV");
        div4.setAttribute("id", "error-password");
        document.getElementById("form-1").appendChild(div4);
        

        // checkbox input
        const student = document.createElement("P");
        student.innerHTML = "Student";
        document.getElementById("form-1").appendChild(student);
        const input5 = document.createElement("INPUT");
        input5.classList.add("checkbox");
        input5.setAttribute("type", "checkbox");
        document.getElementById("form-1").appendChild(input5);
        
        const teacher = document.createElement("P");
        teacher.innerHTML = "Profesor";
        document.getElementById("form-1").appendChild(teacher);
        const input6 = document.createElement("INPUT");
        input6.classList.add("checkbox");
        input6.setAttribute("type", "checkbox");
        document.getElementById("form-1").appendChild(input6);

        // range input
        const input9 = document.createElement("INPUT");
        input9.setAttribute("type", "range");
        input9.setAttribute("id", "start");
        input9.setAttribute("name", "volume");
        input9.setAttribute("min", "0");
        input9.setAttribute("max", "11");
        const p = document.createElement("P");
        p.innerText = "Cat de mult iti place astrofizica?";
        document.getElementById("form-1").appendChild(p);
        document.getElementById("form-1").appendChild(input9);

        // select input
        const text = document.createElement("P");
        text.setAttribute("id", "selectPlanets");
        text.innerHTML = "Selecteaza despre ce planeta vrei sa aflii informatii:";
        document.getElementById("form-1").appendChild(text);

        
        const select = document.createElement("SELECT");
        document.getElementById("form-1").appendChild(select);

        const option1 = document.createElement("OPTION");
        option1.setAttribute("value", "mercur");
        option1.innerHTML = "Mercur";
        document.getElementsByTagName("select")[0].appendChild(option1);

        const option2 = document.createElement("OPTION");
        option2.setAttribute("value", "venus");
        option2.innerHTML = "Venus";
        document.getElementsByTagName("select")[0].appendChild(option2);

        const option3 = document.createElement("OPTION");
        option3.setAttribute("value", "Pamant");
        option3.innerHTML = "Pamant";
        document.getElementsByTagName("select")[0].appendChild(option3);

        const option4 = document.createElement("OPTION");
        option4.setAttribute("value", "marte");
        option4.innerHTML = "Marte";
        document.getElementsByTagName("select")[0].appendChild(option4);
        
        const option5 = document.createElement("OPTION");
        option5.setAttribute("value", "jupiter");
        option5.innerHTML = "Jupiter";
        document.getElementsByTagName("select")[0].appendChild(option5);

        const option6 = document.createElement("OPTION");
        option6.setAttribute("value", "saturn");
        option6.innerHTML = "Saturn";
        document.getElementsByTagName("select")[0].appendChild(option6);

        const option7 = document.createElement("OPTION");
        option7.setAttribute("value", "uranus");
        option7.innerHTML = "Uranus";
        document.getElementsByTagName("select")[0].appendChild(option7);

        const option8 = document.createElement("OPTION");
        option8.setAttribute("value", "neptun");
        option8.innerHTML = "Neptun";
        document.getElementsByTagName("select")[0].appendChild(option8);

        const option9 = document.createElement("OPTION");
        option9.setAttribute("value", "pluto");
        option9.innerHTML = "Pluto";
        document.getElementsByTagName("select")[0].appendChild(option9);

        // radio input
        // const input7 = document.createElement("INPUT"); 
        // input7.setAttribute("type", "radio");
        // input7.setAttribute("value", "Male");
        // const male = document.createTextNode("Male")
        // input7.appendChild(male);
        // document.getElementById("form-1").appendChild(input7);

        // const input8 = document.createElement("INPUT"); 
        // input8.setAttribute("type", "radio");
        // input8.setAttribute("value", "Female");
        // input8.innerHTML = "Female";
        // document.getElementById("form-1").appendChild(input8);

        // const input10 = document.createElement("INPUT"); 
        // input10.setAttribute("type", "radio");
        // input10.setAttribute("value", "Alien");
        // input10.innerHTML = "Alien";
        // document.getElementById("form-1").appendChild(input10);

        
        // button input
        const buton1 = document.createElement("BUTTON");
        buton1.setAttribute("type", "submit");
        buton1.setAttribute("id", "buton");
        buton1.setAttribute("class", "w3-button w3-blue");
        const text1 = document.createTextNode("Trimite");
        buton1.appendChild(text1);
        document.getElementById("form-1").appendChild(buton1);
       
    };

    createForm();

    // Create the validation-form function
    const validateForm = () => {
        
        // check first name
        const firstName = document.getElementById("firstName");
        const errorFirstName = document.getElementById("error-firstName");

        firstName.addEventListener("keyup", function(event) {
            const regexFirstName = /^[a-zA-Z-]+$/;
            if (regexFirstName.test(event.target.value) == false) {
                errorFirstName.innerHTML = "Prenumele trebuie sa contina litere mari si mici!";
            } else {
                errorFirstName.innerHTML = "";
            }
        });

        // check last name
        const lastName = document.getElementById("lastName");
        const errorLastName = document.getElementById("error-lastName");
        
        lastName.addEventListener("keyup", function(event) {
            const regexLastName = /^[a-zA-Z-]+$/;
            if (regexLastName.test(event.target.value) == false) {
                errorLastName.innerHTML = "Numele trebuie sa contina litere mari si mici!";
            } else {
                errorLastName.innerHTML = "";
            }
        });

        // check email
        const email = document.getElementById("email");
        const errorEmail = document.getElementById("error-email");
       
        email.addEventListener("keyup", function(event) {
            const regexEmail = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+([a-zA-Z0-9-]*)\.)+[com, ro]+$/;
            console.log(regexEmail.test(event.target.value));
            if (regexEmail.test(event.target.value) == false) {
                errorEmail.innerHTML = "Mailul introdus nu este valid";
            }

            if (regexEmail.test(event.target.value)) {
                errorEmail.innerHTML = "";
            }
        });

       // see password
       const i = document.getElementById("pass-status");
       i.addEventListener("click", function(event) {
            var password = document.getElementById('password');
            if (password.type == 'password'){
                password.type='text';
                i.className='fa fa-eye-slash';
    
                }
                else{
                password.type='password';
                i.className='fa fa-eye';
            }
       });

        // check password

        const errorPassword = document.getElementById("error-password");
        const password = document.getElementById("password");

        password.addEventListener("keyup", function(event) {
            const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(){}~?-])[a-zA-Z0-9!@#$%^&*(){}~?-]{8,}/;
            console.log(regexPassword.test(event.target.value));
            if (regexPassword.test(event.target.value) == false) {
                errorPassword.innerHTML = "Parola Slaba.<br> Introdu litere mari, mici, cifre, simboluri.<br> Parola trebuie sa aiba minim 8 caractere";
            }

            if (regexPassword.test(event.target.value)) {
                errorPassword.innerHTML = "Parola Puternica";
                errorPassword.style.color = "green";
                
            }
        });

        // check conditions for submitting
        const form = document.getElementById("form-1");

        form.addEventListener("submit", function(event) {            
            if (errorFirstName.innerHTML == "" && errorFirstName.innerHTML == "" && errorEmail.innerHTML == "" && errorPassword.innerHTML == "Parola Puternica") {
                console.log("Toate campurile sunt completate corect");
            } else {
                Swal.fire('Oops...', 'Trebuie toate campurile completate!', 'error')
                event.preventDefault();
            }

        });
        
    };

    validateForm();
};
createRegisterPage();