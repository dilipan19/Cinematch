import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import { getContinueWatching } from '../../services/ott';

const ContinueWatching = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getContinueWatching());
    const onStorage = () => setItems(getContinueWatching());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  if (!items.length) return null;

  return <Carousel title="Continue Watching" movies={items} />;
};

export default ContinueWatching;
