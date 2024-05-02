function verifyDigit(e) {
    console.log(`${e.type}: key = ${e.key}, which = ${e.which}, charCode = ${e.charCode}, keyCode = ${e.keyCode}`);
 
    if (e.key >= 0 && e.key <= 9) {
        return true;
    }
    return false;	
}

document.addEventListener("DOMContentLoaded", function() {
    const numberInputs = document.querySelectorAll(".number");
    numberInputs.forEach(input => {
        input.addEventListener("keypress", function(event) {
            if (!verifyDigit(event)) {
                event.preventDefault();
            }
        });
    });
});
