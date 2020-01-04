const setup = () => {

// culoare background
const setBeckground = () => {
    const bgColor = document.querySelectorAll("input")[1];
    bgColor.addEventListener("keyup", function(event) {
        var body = document.querySelector("body");
        body.style.backgroundColor = event.target.value;
    });
};

// marime scris
const setFontSize = () => {
const fontSize = document.querySelectorAll("input")[2];
fontSize.addEventListener("keyup", function(event) {
    let value = event.target.value;
    if (Number(value)) {
        value = value + 'px';
    }
    var body = document.querySelector("body");
    
    body.style.fontSize = value;
});
};

// culoare scris
const setTextColor = () => {
    const textColor = document.querySelectorAll("input")[3];
    textColor.addEventListener("keyup", function(event) {
        var body = document.querySelector("body");
        body.style.color = event.target.value;
});
};

// dark mode cum fac sa ii dau uncheck?
const setDarkMode = () => {
    const darkMode = document.querySelectorAll("input")[4];
    darkMode.addEventListener("click", function() {
        if (darkMode.checked) {
            var body = document.querySelector("body");
            body.style.backgroundColor = 'black';
            body.style.color = 'grey';
        } 
}); 
};

// mesaj
const getMessage = () => {
    const submission = document.getElementById("submit");

    submission.addEventListener('click', function(event){   
        let messages = []

        const bgColor = document.querySelectorAll("input")[1];
        const fontSize = document.querySelectorAll("input")[2];
        const textColor = document.querySelectorAll("input")[3];
        const darkMode = document.querySelectorAll("input")[4];
        
        messages.push(bgColor.value);
        messages.push(fontSize.value);
        messages.push(textColor.value);
        messages.push(darkMode.checked);

        const infoMessage = document.querySelector(".info_message");
        infoMessage.innerHTML = "Ai ales: Background " + messages[0] +
                                ", marimea textului " + messages[1] +
                                ", culoarea textului "+ messages[2] +
                                ", darkmode " + messages[3];
                                
        
        console.log(infoMessage.innetText);

        console.log(messages);
    });
    
    
}




setBeckground();
setFontSize();
setTextColor();
setDarkMode();
getMessage();

}
setup();
