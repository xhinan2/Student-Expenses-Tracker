let total = 0;

function addExpense() {

    let expenseName = document.getElementById("expenseName").value;
    let expenseAmount = document.getElementById("expenseAmount").value;

    if (expenseName === "" || expenseAmount === "") {
        alert("Please fill all fields");
        return;
    }

    total += Number(expenseAmount);

    document.getElementById("total").textContent = total;

    let li = document.createElement("li");

    li.textContent = expenseName + " - ₹" + expenseAmount;

    document.getElementById("expenseList").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}