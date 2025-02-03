import { useState } from "react";
import Button from "../UI/button";
import classes from "./expenseForm.module.css";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleHandler(event) {
    setTitle(event.target.value);
  }
  // значение инпута

  function amountHandler(event) {
    setAmount(event.target.value);
  }
  // значение инпута

  function dateHandler(event) {
    setDate(event.target.value);
  }
  // значение инпута

  function onSubmit(event) {
    event.preventDefault();

    const newExpenses = {
      id: Math.floor(Math.random() * 100),
      title: title,
      date: new Date(date),
      price: amount,
    };

    
    props.onAdd(newExpenses);
    setTitle("");
    setDate("");
    setAmount("");
  }
  // что происходит когда форма работает

  return (
    <>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <label htmlFor="f1">Заголовок</label>
            <input
              type="text"
              id="f1"
              placeholder="Напишите название расхода"
              onChange={titleHandler}
              value={title}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="f2">Количество</label>
            <input
              type="number"
              id="f2"
              placeholder="Введите сколько вы потратили"
              onChange={amountHandler}
              value={amount}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="f3">Датировать</label>
            <input type="date" id="f3" onChange={dateHandler} value={date} />
          </div>
        </div>
        <div className={classes.buttons}>
          <Button title="Отмена" />
          <Button type="submit" title="Добавить расходы" />
        </div>
      </form>
    </>
  );
};
