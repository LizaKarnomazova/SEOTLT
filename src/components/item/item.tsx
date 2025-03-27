import { useState } from 'react';

import Input from '../input';

import styles from './item.module.css';

interface ItemProps {
  id: number;
  description: string;
  deleteNews: (id: number) => void;
  editNews: (id: number, description: string) => void;
}

function Item({ id, description, deleteNews, editNews }: ItemProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return isEdit ? (
    <Input
      item={{ id: id, description: description }}
      editNews={editNews}
      mode={'edit'}
      setIsEdit={setIsEdit}
    />
  ) : (
    <>
      <p className={styles.description}>{description}</p>
      <section className={styles.btns}>
        <button className={styles.editBtn} onClick={() => setIsEdit(true)}>
          Редактировать
        </button>
        <button className={styles.deleteBtn} onClick={() => deleteNews(id)}>
          Удалить
        </button>
      </section>
    </>
  );
}

export default Item;
