import React, { useEffect, useState } from 'react';
import Todo from '../todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import styles from './Todolist.module.css';

export default function Todolist({ filter }) {
  const [todos, setTodos] = useState(() => readTodo());

  useEffect(() => {
    localStorage.todos = JSON.stringify(todos);
  }, [todos]);

  const handleAdd = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDelete = (t_id) => {
    setTodos((prev) => prev.filter((t) => t.id !== t_id));
  };

  const handleUpdated = (updated) => {
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const filtered = getFiltered(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onDelete={handleDelete}
            onStatusChange={handleUpdated}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFiltered(todos, filter) {
  if (filter === 'all') return todos;
  return todos.filter((todo) => todo.status === filter);
}

function readTodo() {
  const todos = localStorage.todos;
  return todos ? JSON.parse(todos) : [];
}
