import { useState, useEffect } from 'react';

export default function useStorage(storageAddress, initialState) {
  const localStorageItem = localStorage.getItem(storageAddress);
  const [item, setItem] = useState(initialState);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        if (!localStorageItem) {
          localStorage.setItem(storageAddress, JSON.stringify(initialState));
        } else {
          initialState = JSON.parse(localStorageItem);
          setItem(initialState);
        }
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    },0);
  }, [])


  const saveItem = (newItem) => {
    localStorage.setItem(storageAddress, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}