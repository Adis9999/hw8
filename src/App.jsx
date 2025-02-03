import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/expenseForm/expenseForm";
import { Expenses } from "./components/expenses/expenses";
import { Modal } from "./components/UI/Modal";
import Button from "./components/UI/button";

const expensesData = [];

function App() {
  const [expenses, setExpenses] = useState(expensesData);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal((prev) => !prev);
  };
  // функция что бы модалка открывалась и закрывалась


  function addExpenseHandler(param) {
    const updateExpense = [...expenses, param];
    setExpenses(updateExpense);
    modalHandler()
  }
  //обновление массива



  const deleteExpenseHandler = (id) => {
    const filteredExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(filteredExpenses);
  };
// удвление одного объекта

  return (
    <div className="container">
      <Modal open={modal} onClose={modalHandler}>
        <ExpenseForm onAdd={addExpenseHandler} />
      </Modal>
      {!modal && <Button title="Add new consumption" onClick={modalHandler}/>}
      <Expenses expenses={expenses} onDelete={deleteExpenseHandler} />
    </div>
  );
}

export default App;
