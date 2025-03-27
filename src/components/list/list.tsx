import { NewsItem } from '../../types';
import Item from '../item';

import styles from './list.module.css';

interface Props {
  data: NewsItem[];
  deleteNews: (id: number) => void;
  editNews: (id: number, description: string) => void;
}

function List({ data, deleteNews, editNews }: Props) {
  return (
    <ul className={styles.list}>
      {data.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            <Item {...item} deleteNews={deleteNews} editNews={editNews} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
