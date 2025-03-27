import { useState, useEffect } from 'react';

import { NewsItem } from './types';
import List from './components/list';
import Input from './components/input';

import styles from './App.module.css';

function App() {
  const [data, setData] = useState(() => {
    const news = localStorage.getItem('news');
    return news ? (JSON.parse(news) as NewsItem[]) : [];
  });

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(data));
  }, [data]);

  const addNews = (description: string) =>
    setData((prev) => [...prev, { id: Date.now(), description }]);

  const deleteNews = (id: number) =>
    setData((prev) => prev.filter((item) => item.id !== id));

  const editNews = (id: number, newDescription: string) =>
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Новости</h1>
      <Input addNews={addNews} mode={'add'} />
      <List data={data} deleteNews={deleteNews} editNews={editNews} />
    </div>
  );
}

export default App;
