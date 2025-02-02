import { useState } from 'react';

function useLocalStorage(key: string, initailValue: any) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initailValue;
            
        } catch (error) {
            console.error("Error reading localStorage", error )
            return initailValue;
        }
    })
    const setValue = (value: any) => {
        try {
          // Allow value to be a function for functional updates
          const valueToStore = value instanceof Function ? value(storedValue) : value;
          setStoredValue(valueToStore);
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
          console.error("Error setting localStorage", error);
        }
      };
    
      return [storedValue, setValue];
}

export default useLocalStorage;