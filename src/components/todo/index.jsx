import { FaListCheck } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import TodoItem from "../todoItem";
const Todo = () => {
  return (
    <div className="bg-white place-self-center w-[450px] h-[600px] p-12 flex flex-col gap-5 rounded-lg">
      {/* Title */}
      <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wider">
        <FaListCheck />
        Todo App
      </h1>
      {/* Add Todo Area */}
      <div className="flex items-center bg-[#eeeeee] p-1 rounded-full">
        <input
          type="text"
          className="flex-1 px-5 bg-transparent border-none outline-none placeholder:text-slate-400"
          placeholder="Add Todo"
        />
        <div className="flex items-center justify-center h-full p-1 rounded-r-full cursor-pointer w-14">
          <IoIosAddCircle className="size-8" />
        </div>
      </div>
      {/* Todo Items Area */}
      <div className="mt-5">
        <TodoItem text="Html öğren" />
        <TodoItem text="Css öğren" />
        <TodoItem text="Js öğren" />
        <TodoItem text="C öğren" />
      </div>
    </div>
  );
};

export default Todo;
