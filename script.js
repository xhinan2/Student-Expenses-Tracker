let total = 0;
let expenses = [];

let savedExpenses = localStorage.getItem("expenses");

if(savedExpenses){
    try {
        expenses = JSON.parse(savedExpenses);

        if (!Array.isArray(expenses)) {
            throw new Error("Invalid expense data");
        }

    }
    catch(error) {
        console.log("Error:", error);

        localStorage.setItem("expenses_backup", savedExpenses);

        localStorage.removeItem("expenses");

        expenses = [];

        alert("Saved expenses could not be loaded!");
    }
}

for(let i = 0; i < expenses.length; i++){
    displayExpense(expenses[i]);
}


function addExpense() {

    let expenseName = document.getElementById("expenseName").value.trim();
    let amountInput = document.getElementById("expenseAmount").value.trim();
    let expenseAmount = Number(amountInput);

    if (expenseName === "") {
        alert("Please Enter Expense Name");
        return;
    }

    if (amountInput ==="" || !Number.isFinite(expenseAmount) || expenseAmount <= 0){
        alert("Please Enter a Valid Amount");
        return;
    }

    let expense = {
        name: expenseName,
        amount: expenseAmount
    };
    expenses.push(expense);
    localStorage.setItem(
        "expenses",JSON.stringify(expenses)
    );

    displayExpense(expense);
    document.getElementById("expenseName").value="";
    document.getElementById('expenseAmount').value="";

    
}
function displayExpense(expense){ 
     total += Number(expense.amount);
    document.getElementById("total").textContent = total;
   
     let li = document.createElement("li");
    li.textContent = expense.name + " - ₹" + expense.amount ;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    
    li.appendChild(deleteButton);
    document.getElementById("expenseList").appendChild(li);

    deleteButton.addEventListener("click",function(){
        document.getElementById("expenseList").removeChild(li);
        total -= Number(expense.amount);
        document.getElementById("total").textContent = total;
        let currentIndex = expenses.indexOf(expense);
        expenses.splice(currentIndex, 1);
        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)
        );
    }); 



}
