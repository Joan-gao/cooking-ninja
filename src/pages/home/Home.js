import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/config';

// styles
import './Home.css';

// components
import RecipeList from '../../components/RecipeList';

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false); // 指示某个过程是否正在进行中，但尚未完成
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection('recipes').onSnapshot(// 实时性
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false); // 设置isPending为false，表示加载已完成
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, []); // 数组[]为空，这段逻辑仅在组件首次渲染时执行一次

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
