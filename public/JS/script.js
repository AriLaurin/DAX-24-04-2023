const form = document.querySelector("form");
const inputField = document.querySelector("input");
let welcomeText = document.querySelector("#welcome-text"); 
let nameList = document.querySelector("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = inputField.value;
    let storedValues = JSON.parse(localStorage.getItem("navn")) || [];
    if (!Array.isArray(storedValues)) {
        storedValues = [];
    }
    storedValues.push(inputValue);
    localStorage.setItem("navn", JSON.stringify(storedValues));
    sessionStorage.setItem("SkrevetNavn", JSON.stringify(inputValue));
    welcomeText.textContent = `Velkommen, vi ønsker deg alt som er godt, ${inputValue}!`;

      // Add a new <li> element to the <ul> with the input value
  const listItem = document.createElement('li');
  listItem.textContent = inputValue;
  nameList.appendChild(listItem);
})

const storedValue = JSON.parse(localStorage.getItem("navn")) || [];
storedValue.forEach(value => {
    const listItem = document.createElement('li');
    listItem.textContent = value;
    const list = document.querySelector('ul');
    list.appendChild(listItem);
  });

  let randomNumberElement = document.getElementById('randomNumber');

  function updateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberElement.textContent = `${randomNumber}`;
  }
  
  function updateClock() {
    const now = new Date();
    const minutes = now.getMinutes();
    if (minutes === 0 || randomNumberElement.textContent === '') {
      updateRandomNumber();
    }
  }
  
  updateRandomNumber();

  //dette sjekker bare hva tiden er hvert minutt
  setInterval(updateClock, 1000);
  setInterval(updateRandomNumber, 60000);