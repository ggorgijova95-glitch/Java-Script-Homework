let balance = 1000; // hardcoded

function atm(withdrawAmount) {
    if (withdrawAmount > balance) return "Not enough money";
    balance -= withdrawAmount;
    return "You withdrew: $" + withdrawAmount + "\nMoney left: $" + balance;
}

// Ask repeatedly
while (true) {
    let requestedAmount = Number(prompt("Enter amount to withdraw (0 to exit):"));
    if (requestedAmount === 0) break;
    let result = atm(requestedAmount);
    alert(result);
    console.log(result);
}