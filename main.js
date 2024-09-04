function dep() {
    document.getElementById('result').innerHTML = `
        <label for="deposit-acno">Account Number:</label>
        <input type="text" class="form-control" id="acno" required>
        
        <label for="deposit-amount">Amount:</label>
        <input class="form-control" id="amount" required>
        
        <button id="dep" class="mt-3" onclick="deposit()">Deposit</button>`;

    gsap.from("#result", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
}

function wdrw() {
    document.getElementById('result').innerHTML = `
        <label for="withdraw-acno">Account Number:</label>
        <input type="text" class="form-control" id="withdraw-acno" required>
        
        <label for="withdraw-amount">Amount:</label>
        <input class="form-control" type="text" id="amount" required>
        
        <button id="with" class="mt-3" onclick="withdraw()">Withdraw</button>`;

    gsap.from("#result", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
}

function deposit() {
    var acno = document.getElementById('acno').value;
    var amount = parseFloat(document.getElementById('amount').value);

    if (acno in localStorage) {
        var bank = JSON.parse(localStorage.getItem(acno));
        bank.balance += amount;
        localStorage.setItem(acno, JSON.stringify(bank));
        alert("Deposit successful!");
        alert("New balance: " + bank.balance);
    } else {
        alert("Account number not found.");
    }
}

function withdraw() {
    var acno = document.getElementById('withdraw-acno').value;
    var amount = parseFloat(document.getElementById('amount').value);

    if (acno in localStorage) {
        var bank = JSON.parse(localStorage.getItem(acno));
        if (amount <= bank.balance) {
            bank.balance -= amount;
            localStorage.setItem(acno, JSON.stringify(bank));
            alert("Withdraw successful!");
            alert("New balance: " + bank.balance);
        } else {
            alert("Insufficient balance");
        }
    }
}

function logout() {
    window.location = 'login.html';
}