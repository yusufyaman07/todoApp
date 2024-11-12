import { v4 } from "uuid";
import { FaListCheck } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import TodoItem from "../todoItem";
import { useRef, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  // Function that adds todo
  const addTodos = () => {
    const inputContent = inputRef.current.value.trim();
    if (!inputContent) return;

    const newTodo = {
      id: v4(),
      text: inputContent,
      isCompleted: false,
    };

    setTodos((prev) => {
      const updatedTodos = [...prev, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    inputRef.current.value = "";
  };

  // Function that sets the completed status of todos
  const changeCompleted = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  // Function that deletes todos
  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <div className="bg-white place-self-center w-[450px] h-[600px] p-12 flex flex-col gap-5 rounded-lg">
      {/* Title */}
      <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wider ">
        <FaListCheck />
        Todo App
      </h1>
      {/* Add Todo Area */}
      <div className="flex items-center bg-[#eeeeee] p-1 rounded-full">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 px-5 bg-transparent border-none outline-none placeholder:text-slate-400"
          placeholder="Add Todo"
        />
        <div
          className="flex items-center justify-center h-full p-1 rounded-r-full cursor-pointer w-14"
          onClick={addTodos}
        >
          <IoIosAddCircle className="size-8" />
        </div>
      </div>
      {/* Todo Items Area */}
      <div className="px-2 mt-5 overflow-auto">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
