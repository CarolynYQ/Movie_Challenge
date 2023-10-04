import { useState, createContext, FC } from 'react';
import { useFetch } from '../hooks/useFetch';

interface Props {
  children: string;
}

export const DataContext = createContext();

export const DataProvider: FC<Props> = ({ children }) => {
  const[query, setQuery] = useState('');
  const {loading, error, message, data} = useFetch(`search/movie?query=${query}`);

  return (
    <DataContext.Provider value={{ setQuery, loading, error, message, data }}>
      {children}
    </DataContext.Provider>
  )
}