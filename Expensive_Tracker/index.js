function expenseTrack(event){
    event.preventDefault();
    const amount = document.getElementById("a1").value;
    const expense = document.getElementById("e1").value;
    const category = document.getElementById("category").value;

    const obj ={
        amount,
        expense,
        category
    }
    localStorage.setItem("expenseDetails",JSON.stringify(obj));
    showExpenses(obj);
}

function showExpenses(obj){

    const parent_element = document.getElementById("display_items");
    const child_element = document.createElement("li");
    child_element.innerHTML = obj.amount+" - "+obj.expense+" - "+obj.category;

    const del_btn = document.createElement("button");
    del_btn.innerHTML ="Delete Expense";
    child_element.appendChild(del_btn);

    del_btn.onclick = () => {
        localStorage.removeItem("amount");
        parent_element.removeChild(child_element);
    }
    parent_element.appendChild(child_element);


    const edit_btn = document.createElement("button");
    edit_btn.innerHTML = "Edit Expense";
    child_element.appendChild(edit_btn);

    edit_btn.onclick = () => {
        localStorage.removeItem("amount");
        parent_element.removeChild(child_element);
        
        document.getElementById("a1").value= obj.amount;
        document.getElementById("e1").value = obj.expense;
        document.getElementById("category").value = obj.category;
    }


}