const createRegisterPage = ()=> {
    const createForm = () => {
        
        // creating the Form structure
        const form = document.createElement("FORM");
        form.setAttribute("id", "form-1");
        document.body.appendChild(form);

        // creating inputs

        // first name input
        const input1 = document.createElement("INPUT");
        input1.setAttribute("type", "text");
        input1.setAttribute("placeholder", "First Name");
        document.getElementById("form-1").appendChild(input1);

        // last name input
        const input2 = document.createElement("INPUT");
        input2.setAttribute("type", "text");
        input2.setAttribute("placeholder", "Last Name");
        document.getElementById("form-1").appendChild(input2);

        // email input
        const input3 = document.createElement("INPUT"); 
        input3.setAttribute("type", "email");
        input3.setAttribute("placeholder", "Email");
        document.getElementById("form-1").appendChild(input3);

        // password input
        const input4 = document.createElement("INPUT");
        input4.setAttribute("type", "password");
        input4.setAttribute("placeholder", "Password");
        document.getElementById("form-1").appendChild(input4);

        // checkbox input
        const student = document.createElement("P");
        student.innerHTML = "Student";
        document.getElementById("form-1").appendChild(student);
        const input5 = document.createElement("INPUT");
        input5.setAttribute("type", "checkbox");
        document.getElementById("form-1").appendChild(input5);
        
        const teacher = document.createElement("P");
        teacher.innerHTML = "Teacher";
        document.getElementById("form-1").appendChild(teacher);
        const input6 = document.createElement("INPUT");
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
        const text1 = document.createTextNode("Trimite");
        buton1.appendChild(text1);
        document.getElementById("form-1").appendChild(buton1);
       
    };

    createForm();
};
createRegisterPage();
