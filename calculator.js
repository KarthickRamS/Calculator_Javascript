let inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers, .key-others.operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        let buttonText = e.target.innerHTML.trim();

        // Handling different cases based on button clicked
        switch (buttonText) {
            case 'AC':
                inputValue.innerText = '0';
                break;
            case 'DEL':
                inputValue.innerText = inputValue.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    inputValue.innerText = eval(inputValue.innerText);
                } catch (error) {
                    inputValue.innerText = 'Error';
                }
                break;
            default:
                // For other buttons (numbers and operators)
                // If the current input is '0' or 'NaN', clear it
                if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
                    inputValue.innerText = "";
                }
                inputValue.innerText += buttonText;
                break;
        }
    });
});
