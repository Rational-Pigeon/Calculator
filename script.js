const buttons = document.querySelectorAll(".btn");
console.table(buttons);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.borderTopColor = "#f6c2f3";
        button.style.borderLeftColor = "#f6c2f3";
        button.style.borderRightWidth = "2px";
        button.style.borderBottomWidth = "2px";

        setTimeout(() => {
            button.style.borderTopColor = "";
            button.style.borderLeftColor = "";
            button.style.borderRightWidth = "";
            button.style.borderBottomWidth = "";
        }, 150)
    });
});
