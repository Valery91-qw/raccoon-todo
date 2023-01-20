import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

const AppDataContext = createContext({});

export function useAppDataContext() {
  return useContext(AppDataContext);
}
export function AppDataProvider({ children }: typeof children) {
  const [todos, setTodo] = useState([
    { todoName: 'one todo', tasks: [] },
    { todoName: 'two todo', tasks: [] },
  ]);

  const addTodo = useCallback((title: string) => {
    setTodo((prev) => [...prev, { todoName: title, tasks: [] }]);
  }, []);

  const removeTodo = useCallback((title: string) => {
    setTodo((prev) => prev.filter((el) => el.todoName !== title));
  }, []);

  const value = useMemo(() => ({ todos, addTodo, removeTodo }), [todos, addTodo, removeTodo]);

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
}
