import {useState,createContext} from 'react';
import useStorage from '../../hooks/useStorage';

const TodoContext  = createContext();

function TodoProvider({children}) {
    const {item:todos,saveItem:setTodos,loading,error} = useStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = useState('');
    const [openModal,setOpenModal] = useState(false);
  
    const completeTodo = (id) => {
      const copy = [...todos];
      const element = copy[copy.findIndex(x => x.id === id)];
      element.completed = !(element.completed);
      setTodos(copy);
    }
  
  
    const deleteTodo = (id) => {
      setTodos(todos.filter(x => x.id !== id));
    }
  
    const createTodo = (text) => {
      const randomUUID = crypto.randomUUID();
      const copy = [...todos];
      copy.push({
        id:randomUUID,
        text,
        completed:false,
      });
      setTodos(copy);
    }
  return (
    <TodoContext.Provider value={{
          total:todos.length, 
          completed:todos.filter(x => x.completed).length,
          todos, 
          searchValue,
          setSearchValue,
          deleteTodo,
          completeTodo,
          loading,
          error,
          openModal,
          setOpenModal,
          createTodo
    }}>
        {children}
    </TodoContext.Provider>
)
}

export {
    TodoContext,
    TodoProvider
}