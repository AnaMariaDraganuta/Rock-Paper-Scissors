function play(userOption) {

    let msg;
  
    const arr = ["rock", "paper", "scissors"];
    const computerOption = arr[Math.floor(Math.random() * 3)];
  
    
    if (computerOption == userOption) {
      msg = "The choice are equal, there is no winner";
    } else if (
      (userOption == "rock" && computerOption == "scissors") ||
      (userOption == "paper" && computerOption == "rock") ||
      (userOption == "scissors" && computerOption == "paper")
      ) {
        msg = "User wins!";
    } else{
      msg = "Computer wins!";
    }
   
    const userElem = document.querySelector('#user');
    userElem.textContent = userOption;
  
    const computer = document.querySelector('#computer');
    computer.textContent = computerOption;
    
    const result = document.querySelector('#result');
    result.textContent = msg;
  }