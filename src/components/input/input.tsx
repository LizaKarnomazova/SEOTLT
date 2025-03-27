import { useState } from 'react';

import { NewsItem } from '../../types';

import styles from './input.module.css';

type InputProps =
  | { mode: 'add'; addNews: (text: string) => void }
  | {
      mode: 'edit';
      editNews: (id: number, text: string) => void;
      item: NewsItem;
      setIsEdit: (isEdit: boolean) => void;
    };

function Input(props: InputProps) {
  const initialValue = props.mode === 'edit' ? props.item.description : '';
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!value.trim()) return setError(true);

    if (props.mode === 'edit') {
      props.editNews(props.item.id, value);
      props.setIsEdit(false);
    } else {
      props.addNews(value);
      setValue('');
    }
  };

  return (
    <div className={styles.container}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError(false);
        }}
        className={styles.input}
      />
      {error && <span>Заполните поле!</span>}
      <button
        onClick={handleSubmit}
        className={props.mode === 'edit' ? styles.confirmBtn : styles.addBtn}
      >
        {props.mode === 'edit' ? 'Сохранить' : 'Добавить'}
      </button>
    </div>
  );
}

export default Input;
