import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Todo({ todo, onDelete, onStatusChange }) {
  const { text, status, id } = todo;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdated = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    const updated = { ...todo, status };
    onStatusChange(updated);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        name='checkbox'
        id={`checkbox_${id}`}
        onChange={handleUpdated}
        checked={status === 'completed'}
      />
      <label className={styles.text} htmlFor={`checkbox_${id}`}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <BsTrashFill />
        </button>
      </span>
    </li>
  );
}
