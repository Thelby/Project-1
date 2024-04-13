function enterToWin() {
  let lawFirm = prompt("What is the name of your law firm?");
  let location = prompt("Where is your law firm located?").toLowerCase();

  if (location === "gauteng") {
    alert(
      "Thank you for your interest, " + lawFirm + " \nWe'll be in touch soon!🎊"
    );
  } else {
    alert("Sorry, " + lawFirm + "\nYou cannot enter the competition😞");
  }
}

let enterButton = document.querySelector("button");
enterButton.addEventListener("click", enterToWin);
