const form = document.querySelector("form");
const inputField = document.querySelector("input");
let welcomeText = document.querySelector("#welcome-text"); 

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = inputField.value;
    localStorage.setItem("navn", inputValue);
    welcomeText.textContent = `Velkommen, vi ønsker deg alt som er godt, ${inputValue}!`;
})

const storedValue = localStorage.getItem("navn");

if(storedValue){
    welcomeText.textContent = `Velkommen, vi ønsker deg alt som er godt, ${inputValue}!`;
}