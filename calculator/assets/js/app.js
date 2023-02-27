const buttons = document.querySelectorAll("button")
const storageInput = document.querySelector(".storaged-number")
const currentInput = document.querySelector(".current-number")

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonType = button.dataset.type
        if (buttonType === "number") {
            currentInput.value = currentInput.value + button.value
        }
        if (buttonType === "operation") {
            if (storageInput.value.length) {
                equalOperation(storageInput.value.slice(0, -1), currentInput.value, button.value)
                currentInput.value = ""
            } else {
                storageInput.value = currentInput.value + button.value
                currentInput.value = ""
            }
        }

        if (buttonType === "equal") {
            equalOperation(storageInput.value.slice(0, -1), currentInput.value, storageInput.value.slice(-1))
            currentInput.value = ""
            storageInput.value = storageInput.value.slice(0, -1)
        }


        if (buttonType === "clean") {
            currentInput.value = "0"
        }


        if (buttonType === "clean-all") {
            currentInput.value = "0"
            storageInput.value = ""
        }

        if (buttonType === "ON") {
            if (!currentInput.value.length) {
                currentInput.value = "0"
            }
            else{
                currentInput.value = ""
            }
        }

        if (buttonType === "delete") {
            
            if (currentInput.value.length) {
              currentInput.value =  currentInput.value.slice(0, -1)
            }

           


        }


    })


});

const equalOperation = function (storageNumber, currentNumber, operation) {
    let equal = ""

    if (operation === "+") {
        equal = Number(storageNumber) + Number(currentNumber) + "+";

    }
    else if (operation === "-") {
        equal = Number(storageNumber) - Number(currentNumber) + "-";

    }
    else if (operation === "*") {
        equal = Number(storageNumber) * Number(currentNumber) + "*"

    }
    else if (operation === "/") {
        equal = Number(storageNumber) / Number(currentNumber) + "/"

    }


    storageInput.value = equal
}
