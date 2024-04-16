import { useContext } from 'react';
import { TodoContext } from '../components/TodoContext';
import TodoItem from '../components/TodoItem';
import TodoCounter from '../components/TodoCounter';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoList from '../components/TodoList';
import TodosLoading from '../components/TodosLoading';
import TodosError from '../components/TodosError';
import EmptyTodos from '../components/EmptyTodos';
import TodoSearch from '../components/TodoSearch';
import SearchLoading from '../components/SearchLoading';
import CounterLoading from '../components/CounterLoading';
import './App.css';
import Modal from '../components/Modal';
import LoadingCreateTodoButton from '../components/LoadingCreateTodoButton';
import TodoForm from '../components/TodoForm';

function AppUI() {
  const {
    total,
    completed,
    todos,
    searchValue,
    setSearchValue,
    deleteTodo,
    completeTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      {
        loading ? <CounterLoading /> : <TodoCounter total={total} completed={completed} />
      }
      <div className='controls'>
        {
          loading ? <SearchLoading /> :
            <TodoSearch
              value={searchValue}
              setValue={setSearchValue}
            />
        }
      </div>

      <TodoList>
        {
          loading && <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        }
        {
          error && <TodosError />
        }
        {
          (!loading && todos.length === 0) && <EmptyTodos />
        }
        {
          !(error && loading) && todos.filter(x => x.text.toLowerCase().includes(searchValue.toLowerCase()))
            .map(x => <TodoItem
              key={x.id}
              onDeleted={() => deleteTodo(x.id)}
              onCompleted={() => completeTodo(x.id)}
              text={x.text}
              completed={x.completed}
            />)
        }
      </TodoList>
      {
        !loading ? <CreateTodoButton onClickCallback={() => setOpenModal(!openModal)}/> : <LoadingCreateTodoButton/>
      }
      {
        openModal && <Modal>
          <TodoForm/>
        </Modal>
      }
    </>
  )
}

export default AppUI