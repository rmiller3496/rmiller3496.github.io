// Define Global Variables

var checkingAccountBalance = 0;
var savingsAccountBalance = 0;
var withdrawalAmount = 0;
var depositAmount = 0;
var transferAmount = 0;
var action = ""
var proceed = "";


// 					Accounts 

var accountID = [690202, 348894];
var accountPIN = [9286, 4889];
var savingsOfAccount = [2000, 4000];
var checkingOfAccount = [3000, 5000];
var accountLocation = 0;

//Create  An Account

function createAccount() {
  var initialDepositAmount = 0;

  //Create Account Data
  var step1 = confirm("Welcome! To Get Started Creating Your Account, Press OK");
  if (step1 === true) {
    var newAccountID = Math.floor(Math.random() * 899999) + 100000
    var newAccountPIN = Number(prompt("Your Account ID is " + newAccountID + "\nPlease Enter a PIN to secure your account"));
    if (isNaN(newAccountPIN) || newAccountPIN === null) {
      alert("Setup Failed, Improper PIN, Please Retry");
    } else {
      alert("Account Created\nYour Account ID: " + newAccountID + "\nYour Account PIN: " + newAccountPIN);
      accountID.push(newAccountID);
      accountPIN.push(newAccountPIN);

      //Initial Deposit
      var initialDeposits = confirm("Would you like to put an initial deposit in your accounts?");
      if (initialDeposits === true) {
        var initialDepositAccount = prompt("Which Account would you like to make a deposit in?\nChecking or Saving?\nType 'Both' for a deposit in both accounts");
        if (initialDepositAccount !== null) {
          initialDepositAccount = initialDepositAccount.toLowerCase();
        }
        if (initialDepositAccount === "checking") {
          initialDepositAmount = Number(prompt("Enter Initial Checking Deposit Amount"));
          if (isNaN(initialDepositAmount)) {
            alert("Invalid Deposit, You can deposit at anytime when you sign in");
          } else {
            checkingOfAccount.push(initialDepositAmount);
          }
        } else if (initialDepositAccount === "savings") {
          initialDepositAmount = Number(prompt("Enter Initial Savings Deposit Amount"));
          if (isNaN(initialDepositAmount)) {
            alert("Invalid Deposit, You can deposit at anytime when you sign in");
          } else {
            savingsOfAccount.push(initialDepositAmount);
          }
        } else if (initialDepositAccount === "both") {
          initialDepositAmount = Number(prompt("Enter Initial Checking Deposit Amount"));
          if (isNaN(initialDepositAmount)) {
            alert("Invalid Deposit, You can deposit at anytime when you sign in");
          } else {
            checkingOfAccount.push(initialDepositAmount);
            alert("Deposit Confirmed");
          }
          initialDepositAmount = Number(prompt("Enter Initial Savings Deposit Amount"));
          if (isNaN(initialDepositAmount)) {
            alert("Invalid Deposit, You can deposit at anytime when you sign in");
          } else {
            savingsOfAccount.push(initialDepositAmount);
            alert("Deposit Confirmed");
          }
        } else {
          alert("Invalid Account, You can deposit at anytime when you sign in")
        }
      }
      savingsOfAccount.push(0);
      checkingOfAccount.push(0);
      console.log(accountID);
      console.log(accountPIN);
    }
  }
}


// Access Account

function signIn() {
  var idAttempt = Number(prompt("Please enter your account ID"));
  if (accountID.includes(idAttempt)) {
    accountLocation = accountID.indexOf(idAttempt);
    var pinAttempt = Number(prompt("Account Verified, Please enter your PIN"));
    if (pinAttempt === accountPIN[accountLocation]) {
      alert("Sign In Completed, Accessing Account")
      checkingAccountBalance = checkingOfAccount[accountLocation];
      savingsAccountBalance = savingsOfAccount[accountLocation];
      runAtm();
    } else {
      alert("Invalid PIN, Please Sign In Again");
    }
  } else {
    alert("Unknown ID, Please Sign In Again");
  }
}


//Run ATM Loop


function runAtm() {
  do {
    atm();
		savingsOfAccount[accountLocation] = savingsAccountBalance;
		checkingOfAccount[accountLocation] = checkingAccountBalance;
    proceed = confirm("Futher Actions?");
  }
  while (proceed === true);
}


//Main ATM Function

function atm() {
  action = prompt("What would you like to do today?\nAvailable Options: Withdrawal, Deposit, Transfer, Check Balance");
  if (action !== null) {
    action = action.toLowerCase();
  }

  if (action === "withdrawal") {
    withdrawalInitialize();
  } else if (action === "deposit") {
    depositInitialize();
  } else if (action === "transfer") {
    transferProcedure();
  } else if (action === "check balance" || action === "checkbalance" || action === "balance") {
		balance();
	} else {
    alert("Improper Option, Transaction Canceled")
  }

}

//Transfer Funds

function transferProcedure() {
  accountFrom = prompt("From what account would you like to transfer money from?");
  if (accountFrom !== null) {
    accountFrom = accountFrom.toLowerCase();
  }
  accountTo = prompt("To what account would you like to send the money to?");
  if (accountTo !== null) {
    accountTo = accountTo.toLowerCase();
  }

  if (accountFrom === "checking" && accountTo === "savings") {
    transferAmount = Number(prompt("How much money would you like to transfer?\n\nCurrent Checking Balance: " + checkingAccountBalance));
    if (isNaN(transferAmount)) {
      transferAmount = null;
    }
    if (transferAmount !== null) {
      if (transferAmount > checkingAccountBalance) {
        alert("Not Enough Funds, Transaction Canceled");
      } else {
        checkingAccountBalance = checkingAccountBalance - transferAmount;
        savingsAccountBalance = savingsAccountBalance + transferAmount;
        alert("Transaction Complete\nChecking Account Balance: " + checkingAccountBalance + "\nSavings Account Balance: " + savingsAccountBalance);
      }
    } else {
      alert("Transaction Canceled");
    }


  } else if (accountFrom === "savings" && accountTo === "checking") {
    transferAmount = Number(prompt("How much money would you like to transfer?/n/nCurrent Savings Balance: " + savingsAccountBalance));
    if (isNaN(transferAmount)) {
      transferAmount = null;
    }
    if (transferAmount !== null && transferAmount !== 0) {
      if (transferAmount > savingsAccountBalance) {
        alert("Not Enough Funds, Transaction Canceled");
      } else {
        checkingAccountBalance = checkingAccountBalance + transferAmount;
        savingsAccountBalance = savingsAccountBalance - transferAmount;
        alert("Transaction Complete\nChecking Account Balance: " + checkingAccountBalance + "\nSavings Account Balance: " + savingsAccountBalance);
      }
    } else {
      alert("Transaction Canceled");
    }

  } else {
    alert("Unknown Accounts, Transaction Canceled")
  }

}

//Get Data for Withdrawal

function withdrawalInitialize() {
  //Ask Account
  var withdrawalAccount = prompt("Which account would you like to withdrawal from?\nChecking or Savings?");

  if (withdrawalAccount !== null) {
    withdrawalAccount = withdrawalAccount.toLowerCase();
  }
  //Open Account to Withdrawal
  if (withdrawalAccount === "checking") {
    withdrawalProcedure("Checking");

  } else if (withdrawalAccount === "savings") {
    withdrawalProcedure("Savings");

  } else {
    alert("Invalid Account, Transaction Canceled");
  }
}

//Withdraw Funds

function withdrawalProcedure(account) {
  if (account === "Checking") {
    withdrawalAmount = Number(prompt(account + " Selected\nHow much would you like to withdrawal?\n\nCurrent Account Balance: $" + checkingAccountBalance));
    if (isNaN(withdrawalAmount)) {
      withdrawalAmount = null;
    }
    //Check if withdrawal more than account balance
    if (withdrawalAmount === null) {
      alert("Transaction Canceled");
    }
    if (withdrawalAmount > checkingAccountBalance) {
      alert("Amount of Withdrawal exceeds account funds. Transaction Canceled");
    } else {
      checkingAccountBalance = checkingAccountBalance - withdrawalAmount;
      alert("Transaction Complete\nAccount Balance: $" + checkingAccountBalance);
    }

  } else {
    withdrawalAmount = Number(prompt(account + " Selected\nHow much would you like to withdrawal?\n\nCurrent Account Balance: $" + savingsAccountBalance));
    if (isNaN(withdrawalAmount)) {
      withdrawalAmount = null;
    }
    //Check if withdrawal more than account balance
    if (withdrawalAmount === null) {
      alert("Transaction Canceled");
    }
    if (withdrawalAmount > savingsAccountBalance) {
      alert("Amount of Withdrawal exceeds account funds. Transaction Canceled");
    } else {
      savingsAccountBalance = savingsAccountBalance - withdrawalAmount;
      alert("Transaction Complete\nAccount Balance: $" + savingsAccountBalance);
    }
  }
}


// Get Data for Deposit

function depositInitialize() {
  var depositAccount = prompt("Which account would you like to deposit to>\nChecking or Savings?");

  if (depositAccount !== null) {
    depositAccount = depositAccount.toLowerCase();
  }

  if (depositAccount === "savings") {
    depositProcedure("Savings");
  } else if (depositAccount === "checking") {
    depositProcedure("Checking");
  }

}


// Deposit Money

function depositProcedure(account) {
  if (account === "Checking") {
    depositAmount = Number(prompt(account + " Selected\n\nHow much would you like to deposit?"));
    if (isNaN(depositAmount)) {
      depositAmount = null;
    }
    if (depositAmount === null) {
      alert("Transaction Canceled");
    } else {
      checkingAccountBalance = checkingAccountBalance + depositAmount;
      alert("Transaction Complete\nAccount Balance: $" + checkingAccountBalance);
    }
  } else if (account === "Savings") {
    depositAmount = Number(prompt(account + " Selected\n\nHow much would you like to deposit?"));
    if (isNaN(depositAmount)) {
      depositAmount = null;
    }
    if (depositAmount === null) {
      alert("Transaction Canceled");
    } else {
      savingsAccountBalance = savingsAccountBalance + depositAmount;
      alert("Transaction Complete\nAccount Balance: $" + savingsAccountBalance);
    }
  }
}

//Check Balance

function balance() {
	alert("Current Checking Balance: $" + checkingAccountBalance + "\nCurrent Savings Account Balance: $" + savingsAccountBalance);
}
