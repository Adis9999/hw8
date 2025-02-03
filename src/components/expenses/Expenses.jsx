import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import classes from "./expenses.module.css";
import Button from "../UI/button";
import { Modal } from "../UI/Modal";

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [open, setOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const modalHandler = (id) => {
    setOpen((prev) => !prev);
    if (id) {
      setDeleteItem(id);
    }
  };
// что бы открывать и закрывать модалку , и менять значение deleteItem


  const yearChangeHandler = (e) => {
    setSelectedYear(e.target.value);
    modalHandler();
  };
// когда пользователь выбирает какое тот время это время сохраняется в selectedYear


  const onDeleteFunc = () => {
    props.onDelete(deleteItem);
    setOpen((prev) => !prev);
  };
// удаление


  const filteredExpenses = props.expenses.filter((item) => {
    if (item.date.getFullYear().toString() === selectedYear) {
      return true;
    } else {
      return false;
    }
  });


  const renderedExpenses =
    selectedYear === "All" ? props.expenses : filteredExpenses;
  return (
    <div>
      {open && (
        <Modal onClose={modalHandler} open={open} onSave={onDeleteFunc}>
          <h2 style={{ color: "black" }}>Вы точно хотите удалить?</h2>
          <div>
            <Button title="Да" onClick={onDeleteFunc} />
            <Button title="Нет" onClick={modalHandler} />
          </div>
        </Modal>
      )}
      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
      <ul className={classes.list}>
        {renderedExpenses.map((item) => {
          return (
            <ExpenseItem {...item} deleteHandler={modalHandler} key={item.id} />
          );
        })}
      </ul>
    </div>
  );
};

const ExpenseItem = (props) => {
  return (
    <div className={classes.oneItem}>
      <ExpenseItemDate date={props.date} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={classes.title}>{props.title}</div>
        <div className={classes.price}>{props.price}$</div>
        <Button onClick={() => props.deleteHandler(props.id)} title="Delete" />
      </div>
    </div>
  );
};

const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={classes.date}>
      <div className={classes.month}>{month}</div>
      <div className={classes.year}>{year}</div>
      <div className={classes.day}>{day}</div>
    </div>
  );
};
